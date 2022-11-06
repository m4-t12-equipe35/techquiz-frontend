import { useNavigate } from "react-router-dom";
import api from "../../services";
import Login from "../../assets/login.svg";
import Logout from "../../assets/logout.svg";
import { ButtonStyled, HeaderStyled } from "./style";

interface ILogin {
  email: string;
  password: string;
}

const Header = () => {
  const token = localStorage.getItem("@userToken");

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  const login = async (data: ILogin) => {
    api
      .post("login", data)
      .then((res) => {
        localStorage.setItem("@userToken", res.data.token);
        //  toast.success("Login realizado com sucesso", {
        //      position: "top-right",
        //      autoClose: 2000,
        //      hideProgressBar: false,
        //      closeOnClick: true,
        //      pauseOnHover: true,
        //      draggable: true,
        //      progress: undefined,
        //  });
        setTimeout(() => {
          navigate("/dashboard", { replace: true });
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        //     toast.error("Email e/ou senha incorreta", {
        //      position: "top-right",
        //      autoClose: 3000,
        //      hideProgressBar: false,
        //      closeOnClick: true,
        //      pauseOnHover: true,
        //      draggable: true,
        //      progress: undefined,
        //   });
      });
  };

  return (
    <HeaderStyled>
      <span>TechQuiz</span>
      <ButtonStyled onClick={() => (token ? logout : login)} login={token ? 'sair' : 'login'}>
        {token ? (
          <>
            <p>Sair</p> <img src={Logout} alt="Icone sair" width={20} height={20}/>
          </>
        ) : (
          <>    
            <p>Login</p> <img src={Login} alt="Icone login" width={20} height={20} />
          </>
        )}
      </ButtonStyled>
      
    </HeaderStyled>
  );
};

export default Header;
