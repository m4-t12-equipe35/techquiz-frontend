import { Route, Routes, Navigate } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/register" element={"inserir page de cadastro"} />
      <Route path="/login" element={"inserir page de login"} />
      <Route path="/dashboard" element={"inserir page de dashboard"} />
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
      <Route path="*" element={<Navigate replace to="/register" />} />
    </Routes>
  );
};

export default Router;
