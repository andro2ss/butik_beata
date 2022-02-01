import "./App.css";
import "@coreui/coreui/dist/css/coreui.min.css";

import Header from "./components/common/header/Header";
import Main from "./components/pages/Main";
import Footer from "./components/common/footer/Footer";

function App() {
  const navElements = [
    ["Strona główna", "stronaGlowna"],
    ["Godziny otwarcia", "godzinyOtwarcia"],
    ["Galeria", "galeria"],
    ["Jak dojechać", "jakDojechac"],
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
