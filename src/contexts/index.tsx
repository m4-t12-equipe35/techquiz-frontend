import { ReactNode } from "react";
import { UserProvider } from "./UserContext";
import { QuestionProvider } from "./QuestionsContext";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <UserProvider>
      <QuestionProvider>{children}</QuestionProvider>
    </UserProvider>
  );
};
