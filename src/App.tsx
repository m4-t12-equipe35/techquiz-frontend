import "./App.css";
import Header from "./components/Header";
import Router from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Router />
    </>
  );
}

export default App;
