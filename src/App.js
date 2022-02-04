import "./style/App.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "animate.css";
import "./style/CustomStyle.scss";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import { CContainer } from "@coreui/react";
import { WelcomeSection } from "./components/sections/Welcome/WelcomeSection";
import { FancySeparator } from "./components/common/separators/FancySeparator";
import { OpenHoursSection } from "./components/sections/OpenHours/OpenHoursSection";
import { LocationSection } from "./components/sections/Location/LocationSection";
import { GallerySection } from "./components/sections/Gallery/GallerySection";
import React from "react";
import Cookie from "./components/common/Cookie/Cookie";

function App() {
  const navElements = [
    ["Strona główna", "stronaGlowna"],
    ["Godziny otwarcia", "godzinyOtwarcia"],
    ["Jak dojechać", "jakDojechac"],
    ["Galeria", "galeria"],
  ];
  return (
    <div className="App">
      <Cookie />
      <Header navItems={navElements} />
      <CContainer xl className="shadow p-3 mb-5 bg-body rounded">
        <WelcomeSection />
        <FancySeparator />
        <OpenHoursSection />
        <FancySeparator />
        <LocationSection />
        <FancySeparator />
        <GallerySection />
      </CContainer>
      <Footer />
    </div>
  );
}

export default App;
