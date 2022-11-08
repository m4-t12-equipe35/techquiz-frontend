import { createContext, ReactNode } from "react";
import api from "../services";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySucess } from "../components/Toasts";

interface UserProps {
  children: ReactNode;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  stack: string;
  isAdm?: boolean;
}

interface IRegisterUserResponse {
  name: string;
  email: string;
  stack: string;
  isAdm: boolean;
  isActive: boolean;
  id: string;
  score: number;
}

export interface IUserLogin {
  email: string;
  password: string;
  token: string;
}

interface IUserContext {
  registerUser: (data: IRegisterUser) => void;
  userLogin: (data: IUserLogin) => void;
  logout: () => void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: UserProps) => {
  const navigate = useNavigate();

  function registerUser(data: IRegisterUser) {
    data.isAdm = false;
    const { confirmPassword, ...rest } = data;

    api
      .post<IRegisterUserResponse>("/users", rest)
      .then(() => {
        notifySucess("Conta criada com sucesso!");
      })
      .catch(() => {
        notifyError("Erro ao realizar cadastro");
      });
  }

  function userLogin(data: IUserLogin) {
    api
      .post<IUserLogin>("/login", data)
      .then((res) => {
        notifySucess("Login realizado com sucesso!");
        navigate("/dashboard", { replace: true });
        window.localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        notifyError("Email ou senha incorretos");
      });
  }

  function logout() {
    window.localStorage.clear();
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{
        registerUser,
        userLogin,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
