import { useState } from "react";
import LoginForm from "../../components/Forms/LoginForm";
import RegisterForm from "../../components/Forms/RegisterFom";
import { Box, FormImg } from "../../components/Forms/RegisterFom/styles";
import { MdOutlineLogin } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { ButtonColor } from "../../components/Forms/styles";
import formLogo from "../../assets/formLogo.png";

const LoginRegister = () => {
  const [register, setRegister] = useState(true);

  return (
    <Box id="box">
      <div className="formContainer">
        <div className="formHeader">
          {register ? (
            <>
              <div className="login" style={{ background: "#F0F0F0" }}>
                <MdOutlineLogin color="#a39f9f" />
                <ButtonColor
                  color="white"
                  className="formHeaderButton"
                  onClick={() => {
                    setRegister(false);
                  }}
                >
                  Login
                </ButtonColor>
              </div>
              <div className="register" style={{ background: "#117CB9" }}>
                <FaUserPlus color="#ffffff" />
                <ButtonColor
                  color="blue"
                  className="formHeaderButton"
                  onClick={() => {
                    setRegister(false);
                  }}
                >
                  Cadastro
                </ButtonColor>
              </div>
            </>
          ) : (
            <>
              <div className="login" style={{ background: "#117CB9" }}>
                <MdOutlineLogin color="#ffffff" />
                <ButtonColor
                  color="blue"
                  className="formHeaderButton"
                  onClick={() => {
                    setRegister(true);
                  }}
                >
                  Login
                </ButtonColor>
              </div>
              <div className="register" style={{ background: "#F0F0F0" }}>
                <FaUserPlus color="#a39f9f" />
                <ButtonColor
                  color="white"
                  className="formHeaderButton"
                  onClick={() => {
                    setRegister(true);
                  }}
                >
                  Cadastro
                </ButtonColor>
              </div>
            </>
          )}
        </div>
        {register ? <RegisterForm /> : <LoginForm />}
      </div>
      <FormImg src={formLogo} alt="Imagem Formulário" />
    </Box>
  );
};
export default LoginRegister;
