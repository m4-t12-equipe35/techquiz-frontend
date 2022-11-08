import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "../../../validators/registerValidator";
import { IRegisterUser, UserContext } from "../../../contexts/UserContext";
import { Form, MsgErro } from "./styles";
import { useContext } from "react";

const RegisterForm = () => {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({ resolver: yupResolver(registerSchema) });

  function onSubmitRegisterFunction(data: IRegisterUser) {
    const { confirmPassword, ...newUser } = data;
    registerUser(newUser);
  }

  return (
    <Form typeof="submit" onSubmit={handleSubmit(onSubmitRegisterFunction)}>
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        id="name"
        placeholder="Digite aqui seu nome"
        {...register("name")}
      />
      <MsgErro>{errors.name?.message}</MsgErro>

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

      <label htmlFor="password">Confirme sua senha</label>
      <input
        type="password"
        id="passwordConfirmation"
        placeholder="Digite aqui sua senha novamente"
        {...register("confirmPassword")}
      />
      <MsgErro>{errors.confirmPassword?.message}</MsgErro>

      <label htmlFor="select">Stack</label>
      <select id="select" {...register("stack")}>
        <option defaultValue={"Frontend"}>Frontend</option>
        <option value="Backend">Backend</option>
        <option value="FullStack">Full Stack</option>
      </select>

      <MsgErro>{errors.stack?.message}</MsgErro>

      <button type="submit" className="formButton">
        Registrar
      </button>
    </Form>
  );
};

export default RegisterForm;
