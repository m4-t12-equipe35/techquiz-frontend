import Login from "../../assets/login.svg";
import Logout from "../../assets/logout.svg";
import { ButtonStyled, HeaderStyled } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { logout, token } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <nav>
        <span onClick={() => navigate("/dashboard")}>TechQuiz</span>
        <ButtonStyled onClick={() => logout()} login={token ? "sair" : "login"}>
          {token ? (
            <>
              <p>Sair</p>{" "}
              <img src={Logout} alt="Icone sair" width={20} height={20} />
            </>
          ) : (
            <>
              <p>Login</p>{" "}
              <img src={Login} alt="Icone login" width={20} height={20} />
            </>
          )}
        </ButtonStyled>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
