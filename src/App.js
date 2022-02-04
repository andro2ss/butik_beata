import "./App.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "animate.css";

import Header from "./components/common/header/Header";
import Main from "./components/pages/Main";
import Footer from "./components/common/footer/Footer";

function App() {
  const navElements = [
    ["Strona główna", "stronaGlowna"],
    ["Godziny otwarcia", "godzinyOtwarcia"],
    ["Jak dojechać", "jakDojechac"],
    ["Galeria", "galeria"],
  ];

  return (
    <div className="App">
      <Header navItems={navElements} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
