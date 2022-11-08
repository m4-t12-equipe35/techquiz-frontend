import Dashboard from "../pages/Dashboard/";
import LoginRegister from "../pages/LoginRegister";
import { Route, Routes, Navigate } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginRegister />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/questions"
        element={
          "inserir page de questions que tem todas as perguntas da tech selecionada"
        }
      />
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
