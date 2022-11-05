import "./App.css";
import GlobalStyle from "../src/styles/global";
import Router from "./routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
