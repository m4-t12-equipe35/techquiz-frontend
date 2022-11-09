import { Navigate } from "react-router-dom";
import { useContext } from "react";
import {
  QuestionItem,
  QuestionsLeft,
  QuestionsList,
  QuestionsMain,
  QuestionsRight,
  TechInfo,
} from "../../components/Questions/Questions.style";
import { QuestionContext } from "../../contexts/QuestionsContext";
import { UserContext } from "../../contexts/UserContext";
import questionFigure from "../../assets/questions.svg";

const QuestionsPage = () => {
  const { questionsByTech, tech } = useContext(QuestionContext);
  const { token } = useContext(UserContext);
  console.log(questionsByTech);

  return token ? (
    <QuestionsMain>
      <QuestionsLeft>
        <TechInfo>
          <span>Perguntas sobre:</span>
          <h2>{tech.name}</h2>
        </TechInfo>
        <img src={questionFigure} alt="" />
      </QuestionsLeft>
      <QuestionsRight>
        <QuestionsList>
          {questionsByTech.map((question) => (
            <QuestionItem key={question.id}>{question.question}</QuestionItem>
          ))}
        </QuestionsList>
      </QuestionsRight>
    </QuestionsMain>
  ) : (
    <Navigate to="/" />
  );
};

export default QuestionsPage;
