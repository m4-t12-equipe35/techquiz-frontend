import "./App.css";
import Homepage from "./components/Home/home";
import GlobalStyle from "../src/styles/global";
import Router from "./routes";

function App() {
  return (
    <div className="App">
      <Homepage />
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
