import { Route, Routes, Navigate } from "react-router-dom";
import LoginRegister from "../pages/LoginRegister";
import Dashboard from "../pages/Dashboard/";
import QuestionsPage from "../pages/QuestionsPage";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
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
