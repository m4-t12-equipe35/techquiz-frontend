import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Answers from "../../components/Answers";

const AnswersPage = () => {
  const { token } = useContext(UserContext);

  return token ? <Answers /> : <Navigate to="/" />;
};

export default AnswersPage;
