import { createContext, ReactNode } from "react";
import api from "../services";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySucess } from "../components/Toasts";

// Interface para tipar o contexto:

interface IUserContext {
  registerUser: (data: IRegisterFunction) => void;
  loginUser: (data: ILoginFunction) => void;
  logout: () => void;
  token: string | null;
}

// Interface para tipar as props:

interface IUserProps {
  children: ReactNode;
}

// Interfaces relacionadas ao cadastro de usuário:

export interface IRegisterFunction {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  stack: string;
  isAdm?: boolean;
}

interface IRegisterResponse {
  id: string;
  name: string;
  email: string;
  stack: string;
  isAdm: boolean;
  isActive: boolean;
  score: number;
}

// Interfaces relacionadas ao login:

export interface ILoginFunction {
  email: string;
  password: string;
}

interface ILoginResponse {
  token: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProps) => {
  const token = localStorage.getItem("@TOKEN");
  const navigate = useNavigate();

  function registerUser(data: IRegisterFunction) {
    data.isAdm = false;
    const { confirmPassword, ...rest } = data;

    api
      .post<IRegisterResponse>("/users", rest)
      .then(() => {
        notifySucess("Conta criada com sucesso!");
      })
      .catch(() => {
        notifyError("Erro ao realizar cadastro");
      });
  }

  function loginUser(data: ILoginFunction) {
    api
      .post<ILoginResponse>("/login", data)
      .then((res) => {
        notifySucess("Login realizado com sucesso!");
        window.localStorage.setItem("@TOKEN", res.data.token);
        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        notifyError("Email ou senha incorretos...");
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
        loginUser,
        logout,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
