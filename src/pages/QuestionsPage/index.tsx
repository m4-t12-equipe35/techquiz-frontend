import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import {
  QuestionItem,
  QuestionsLeft,
  QuestionsList,
  QuestionsMain,
  QuestionsRight,
  TechInfo,
} from "../../components/Questions/Questions.style";
import { IQuestionRequest, QuestionContext } from "../../contexts/QuestionsContext";
import { UserContext } from "../../contexts/UserContext";
import questionFigure from "../../assets/questions.svg";
import { AnswerContext, IAnswer, IAnswersRequest } from "../../contexts/AnswersContext";


const QuestionsPage = () => {
  const { questionsByTech, tech } = useContext(QuestionContext);
  const { setAnswers, setQuestionTitle } = useContext(AnswerContext);
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  function selectQuestion(question: IQuestionRequest) {
    setAnswers(question.answers);
    setQuestionTitle(question.question);
    navigate("/answers");
  }

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
            <QuestionItem key={question.id} onClick={() => selectQuestion(question)}>{question.question}</QuestionItem>
          ))}
        </QuestionsList>
      </QuestionsRight>
    </QuestionsMain>
  ) : (
    <Navigate to="/" />
  );
};

export default QuestionsPage;
