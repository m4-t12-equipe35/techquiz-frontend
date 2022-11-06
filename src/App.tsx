import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
