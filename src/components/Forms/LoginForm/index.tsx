import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../../../validators/loginValidator";
import { IUserLogin, UserContext } from "../../../contexts/UserContext";
import { Form, MsgErro } from "../RegisterFom/styles";
import { useContext } from "react";

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>({ resolver: yupResolver(loginSchema) });

  return (
    <Form typeof="submit" onSubmit={handleSubmit(userLogin)}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Digite aqui seu email"
        {...register("email")}
      />
      <MsgErro>{errors.email?.message}</MsgErro>

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        placeholder="Digite aqui sua senha"
        {...register("password")}
      />
      <MsgErro>{errors.password?.message}</MsgErro>

      <button type="submit" className="formButton">
        Entrar
      </button>
    </Form>
  );
};

export default LoginForm;
