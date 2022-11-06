import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "../components/Home/home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={"inserir page de cadastro"} />
      <Route path="/dashboard" element={<Homepage />} />
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
