import { useContext } from "react";
import {
  QuestionItem,
  QuestionsLeft,
  QuestionsList,
  QuestionsMain,
  QuestionsRight,
} from "../components/Questions/Questions.style";
import { QuestionContext } from "../contexts/QuestionsContext";
import questionFigure from "../assets/questions.svg";

const QuestionsPage = () => {
  const { questions } = useContext(QuestionContext);

  return (
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
  );
};

export default QuestionsPage;
