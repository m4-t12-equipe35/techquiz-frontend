import "./App.css";
import Footer from "./components/Footer";
import Router from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <Footer/>
    </>
  );
}

export default App;
