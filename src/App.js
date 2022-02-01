import logo from "./logo.svg";
import "./App.css";
import Header from "./components/common/header/Header";
import Main from "./components/pages/Main";
import Footer from "./components/common/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
