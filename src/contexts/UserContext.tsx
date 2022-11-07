import { createContext, useState, useEffect, ReactNode } from "react";
import api from "../services/index";
import { useNavigate } from "react-router-dom";

// Interface para tipar o contexto:

interface IUserContext {
  token: string | null;
  registerUser: (data: IRegisterFunction) => void;
  loginUser: (data: ILoginFunction) => void;
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
  confirmPassword: string;
  stack: string;
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

interface ILoginFunction {
  email: string;
  password: string;
}

interface ILoginResponse {
  token: string;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProps) => {
  const [user, setUser] = useState<IRegisterResponse | null>(null);
  const token = localStorage.getItem("@TOKEN");
  let navigate = useNavigate();

  // Requisição de cadastro:

  function registerUser(formData: IRegisterFunction): void {
    api
      .post<IRegisterResponse>("/users", formData)
      .then(() => {
        setTimeout(() => navigate("/login"), 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Requisição de login:

  function loginUser(formData: ILoginFunction): void {
    api
      .post<ILoginResponse>("/login", formData)
      .then((response) => {
        localStorage.setItem("@TOKEN", response.data.token);
        setTimeout(() => navigate("/dashboard"), 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Requisição para o "autologin':

  useEffect(() => {
    async function autoLogin(): Promise<void> {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          const { data } = await api.get<IRegisterResponse>(
            `/users/${user?.id}`
          );

          setUser(data);
        } catch (error: unknown) {
          console.error(error);
          localStorage.clear();
        }
      }
    }
    autoLogin();
  }, [user?.id]);

  return (
    <UserContext.Provider value={{ token, registerUser, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
