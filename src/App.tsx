import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ToastContainer />
      <Router />
      <Footer />
    </>
  );
}

export default App;
