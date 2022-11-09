import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AnswersStyled } from "../Answers/style";
import { UserContext } from "../../contexts/UserContext";
import { AnswerContext, IAnswersRequest } from "../../contexts/AnswersContext";
import { QuestionContext } from "../../contexts/QuestionsContext";
import answersImage from "../../assets/womanInTheChair.svg";

const Answers = () => {
  const { token } = useContext(UserContext);
  const { answers, setAnswers, questionTitle, setQuestionTitle } =
    useContext(AnswerContext);
  const { questionsByTech, alreadyAnswered, setAlreadyAnswered } =
    useContext(QuestionContext);

  const navigate = useNavigate();
  const letters = ["A", "B", "C", "D"];

  const checkAnswer = (
    event: React.MouseEvent<HTMLButtonElement>,
    answer: IAnswersRequest
  ) => {
    const target = event.target as HTMLButtonElement;
    const questionIndex = questionsByTech.findIndex(
      (question) => question.question === questionTitle
    );
    setAlreadyAnswered([...alreadyAnswered, questionIndex]);

    let button = target.parentElement;
    if (target.type === "submit") button = target;
    if (answer.isCorrect) {
      if (button != null) button.className = "buttonIsCorrect";
    } else {
      const correctAnswerPosition = answers.findIndex(
        (answer) => answer.isCorrect === true
      );
      const buttonWithCorrectAnswer =
        document.getElementsByClassName("buttonAnswers")[correctAnswerPosition];
      if (buttonWithCorrectAnswer != null) {
        buttonWithCorrectAnswer.className = "buttonIsCorrect";
      }
      if (button != null) {
        button.className = "buttonIsIncorrect";
      }
    }
  };

  const nextQuestion = () => {
    let nexIndex = Math.round(Math.random() * (questionsByTech.length - 1));
    const newQuestion = questionsByTech[nexIndex];
    const isIncorrectButton = document.querySelector(".buttonIsIncorrect");
    if (isIncorrectButton != null)
      isIncorrectButton.className = "buttonAnswers";
    const isCorrectButton = document.querySelector(".buttonIsCorrect");
    if (isCorrectButton != null) isCorrectButton.className = "buttonAnswers";
    setAnswers(newQuestion.answers);
    setQuestionTitle(newQuestion.question);
  };

  const questionsPage = () => {
    navigate("/questions");
  };

  return token ? (
    <div>
      <AnswersStyled>
        <div className="main">
          <div className="mainRight">
            <h1>{questionTitle}</h1>
            <div className="answersDiv">
              {answers.map((answer, index) => (
                <div key={answer.question_id}>
                  <button
                    className="buttonAnswers"
                    onClick={(event) => {
                      checkAnswer(event, answer);
                    }}
                  >
                    <div>{letters[index]}</div>
                    <h1>{answer.answer}</h1>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mainLeft">
            <img src={answersImage} alt="imagem" />
          </div>
        </div>
        <div className="botton">
          <button
            className="bottonButtons"
            onClick={() => {
              questionsPage();
            }}
          >
            Voltar para as perguntas
          </button>
          <button
            className="bottonButtons"
            onClick={() => {
              nextQuestion();
            }}
          >
            Próxima pergunta
          </button>
        </div>
      </AnswersStyled>
    </div>
  ) : (
    <div></div>
  );
};

export default Answers;
