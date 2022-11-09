import {
  useState,
  createContext,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import api from "../services/index";
import { UserContext } from "./UserContext";

interface IAnswersRequest {
  question_id: string;
  answer: string;
  isCorrect: boolean;
}

interface IQuestionRequest {
  question: string;
  level: string;
  tech: ITech;
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
  questionsByTech: IQuestion[];
  setQuestionsByTech: Dispatch<SetStateAction<IQuestion[]>>;
  techList: ITech[];
  setTechList: Dispatch<SetStateAction<ITech[]>>;
  tech: ITech;
  setTech: Dispatch<SetStateAction<ITech>>;
  filteredTech: ITech[];
  setFilteredTech: Dispatch<SetStateAction<ITech[]>>;
}

export interface ITech {
  id: string;
  name: string;
  stack: string;
}

export const QuestionContext = createContext<IQuestionContext>(
  {} as IQuestionContext
);

export function QuestionProvider({ children }: IQuestionProviderProps) {
  const [questions, setQuestions] = useState<IQuestion[]>([] as IQuestion[]);
  const [questionsByTech, setQuestionsByTech] = useState<IQuestion[]>(
    [] as IQuestion[]
  );
  const [techList, setTechList] = useState<ITech[]>([]);
  const [tech, setTech] = useState<ITech>({} as ITech);
  const [filteredTech, setFilteredTech] = useState<ITech[]>([]);
  const { token } = useContext(UserContext);

  useEffect(() => {
    async function getQuestions(): Promise<void> {
      try {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await api.get<IQuestion[]>("/questions");
        setQuestions(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (token) {
      getQuestions();
    }
  }, [token]);

  return (
    <QuestionContext.Provider
      value={{
        questions,
        questionsByTech,
        setQuestionsByTech,
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
