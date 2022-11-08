import { useState, createContext, ReactNode, useEffect } from "react";
import api from "../services/index";

interface IAnswersRequest {
  question_id: string;
  answer: string;
  isCorrect: boolean;
}

interface IQuestionRequest {
  question: string;
  level: string;
  techId: string;
  answers: IAnswersRequest[];
}

interface IQuestion extends IQuestionRequest {
  id: string;
}

interface IQuestionProviderProps {
  children: ReactNode;
}

interface IQuestionContext {
  questions: IQuestion[];
  // getQuestions: () => void;
}

export const QuestionContext = createContext<IQuestionContext>(
  {} as IQuestionContext
);

export function QuestionProvider({ children }: IQuestionProviderProps) {
  const [questions, setQuestions] = useState<IQuestion[]>([] as IQuestion[]);

  useEffect(() => {
    console.log("use effect");
    async function getQuestions(): Promise<void> {
      try {
        // api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await api.get<IQuestion[]>("/questions");
        setQuestions(response.data);
        console.log("test");
      } catch (error) {
        console.log(error);
      }
    }

    getQuestions();
  }, []);

  return (
    <QuestionContext.Provider value={{ questions }}>
      {children}
    </QuestionContext.Provider>
  );
}
