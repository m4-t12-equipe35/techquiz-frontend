import Homepage from "../components/Home/home";
import { Route, Routes, Navigate } from "react-router-dom";
import QuestionsPage from "../pages/QuestionsPage";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={"inserir page de cadastro"} />
      <Route path="/dashboard" element={<Homepage />} />
      <Route path="/questions" element={<QuestionsPage />} />
      <Route
        path="/answers"
        element={
          "inserir page de respostas da pergunta selecionado pelo usuario"
        }
      />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default Router;
