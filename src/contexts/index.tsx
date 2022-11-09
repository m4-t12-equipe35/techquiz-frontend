import { ReactNode } from "react";
import { UserProvider } from "./UserContext";
import { QuestionProvider } from "./QuestionsContext";
import { AnswareProvider } from "./AnswersContext";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <UserProvider>
      <QuestionProvider>
      <AnswareProvider>
        {children}
      </AnswareProvider>
      </QuestionProvider>
    </UserProvider>
  );
};
