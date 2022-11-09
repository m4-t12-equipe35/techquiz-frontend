import {
  useState,
  createContext,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import { UserContext } from "./UserContext";

export interface IAnswersRequest {
  question_id: string;
  answer: string;
  isCorrect: boolean;
}

export interface IAnswer extends IAnswersRequest {
  id: string;
}

interface IAnswerProviderProps {
  children: ReactNode;
}

interface IAnswersContext {
  answers: IAnswersRequest[];
  setAnswers: Dispatch<SetStateAction<IAnswersRequest[]>>;
  questionTitle: string;
  setQuestionTitle: any;
}

export const AnswerContext = createContext<IAnswersContext>(
  {} as IAnswersContext
);

export function AnswareProvider({ children }: IAnswerProviderProps) {
  const [answers, setAnswers] = useState<IAnswersRequest[]>([] as IAnswersRequest[]);
  const [questionTitle, setQuestionTitle] = useState("");
  const { token } = useContext(UserContext);

  useEffect(() => {
    function getAnswers(){
      return answers;
    }
    if (token) {
      getAnswers();
    }
  }, [token]);

  return (
    <AnswerContext.Provider
      value={{
        answers,
        setAnswers,
        questionTitle,
        setQuestionTitle
      }}
    >
      {children}
    </AnswerContext.Provider>
  );
}
