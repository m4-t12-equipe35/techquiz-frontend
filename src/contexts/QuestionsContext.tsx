import {
  useState,
  createContext,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
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
  techList: ITech[];
  setTechList: Dispatch<SetStateAction<ITech[]>>;
  tech: object;
  setTech: Dispatch<SetStateAction<object>>;
  filteredTech: ITech[];
  setFilteredTech: Dispatch<SetStateAction<ITech[]>>;
}

interface ITech {
  id: string;
  name: string;
  stack: string;
}

export const QuestionContext = createContext<IQuestionContext>(
  {} as IQuestionContext
);

export function QuestionProvider({ children }: IQuestionProviderProps) {
  const [questions, setQuestions] = useState<IQuestion[]>([] as IQuestion[]);
  const [techList, setTechList] = useState<ITech[]>([]);
  const [tech, setTech] = useState<object>({});
  const [filteredTech, setFilteredTech] = useState<ITech[]>([]);

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
    <QuestionContext.Provider
      value={{
        questions,
        techList,
        setTechList,
        tech,
        setTech,
        filteredTech,
        setFilteredTech,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
