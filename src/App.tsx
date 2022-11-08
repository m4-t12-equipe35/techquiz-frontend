import "./App.css";
import Router from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Router />
    </>
  );
}

export default App;
