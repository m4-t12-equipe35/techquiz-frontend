import { ReactNode } from "react";
import { UserProvider } from "./UserContext";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return <UserProvider>{children}</UserProvider>;
};
