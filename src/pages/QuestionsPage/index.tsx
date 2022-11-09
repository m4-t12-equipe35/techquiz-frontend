import { Navigate } from "react-router-dom";
import { useContext } from "react";
import {
  QuestionItem,
  QuestionsLeft,
  QuestionsList,
  QuestionsMain,
  QuestionsRight,
} from "../../components/Questions/Questions.style";
import { QuestionContext } from "../../contexts/QuestionsContext";
import { UserContext } from "../../contexts/UserContext";
import questionFigure from "../../assets/questions.svg";

const QuestionsPage = () => {
  const { questions, tech } = useContext(QuestionContext);
  const { token } = useContext(UserContext);

  console.log(tech);

  return token ? (
    <QuestionsMain>
      <QuestionsLeft>
        <div>
          <p>Question Tech</p>
          <img src={questionFigure} alt="" />
        </div>
      </QuestionsLeft>
      <QuestionsRight>
        <QuestionsList>
          <QuestionItem>
            <p>Question 1</p>
          </QuestionItem>
          <QuestionItem>
            <p>Question 2</p>
          </QuestionItem>
          <QuestionItem>
            <p>Question 3</p>
          </QuestionItem>
          <QuestionItem>
            <p>Question 4</p>
          </QuestionItem>
        </QuestionsList>
      </QuestionsRight>
    </QuestionsMain>
  ) : (
    <Navigate to="/" />
  );
};

export default QuestionsPage;
