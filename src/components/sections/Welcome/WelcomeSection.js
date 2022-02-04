import { CCol, CImage, CListGroup, CListGroupItem } from "@coreui/react";
import React from "react";
import "./WelcomeSection.scss";

export function WelcomeSection() {
  return (
    <div className="page__container" id="stronaGlowna">
      <br />
      <h1 className="font--title title--custom">Beata Butik</h1>
      <p className="h4">Serdecznie zaprasza!</p>
      <div className="row justify-content-md-center align-items-center">
        <CCol md={4}>
          <span className="home__text">
            Jesteśmy sklepem odzieżowym z modą damską i akcesoriami.
            Nieprzerwanie świadczymy dla Państwa usługi od dobrych 20 lat. Nasz
            personel z chęcią służyć będzie radą i pomocą. Staramy się iść z
            trendami i mieć jak najczęściej coś nowego dla Państwa.
          </span>
        </CCol>
        <CCol md={4}>
          <CImage
            className="home__images"
            src={require("../images/shopping_woman.jpg")}
            alt="Kobieta z torbami"
          />
        </CCol>
      </div>
      <div className="row justify-content-md-center align-items-center row--custom">
        <CCol md={4}>
          <CImage
            className="home__images"
            src={require("../images/bags.jpg")}
            alt="torebki"
          />
        </CCol>
        <CCol md={4}>
          <span className="home__text">
            Informacje o tymczasowych zmianach godzin pracy, jak i o nowym
            asortymencie znajdą Państwo na naszym{" "}
            <a href="https://www.facebook.com/">facebooku</a>.<br />
            <br /> Z chęcią odpowiemy na Państwa pytania poprzez naszego{" "}
            <a href="https://www.facebook.com/">facebooka</a> w godzinach
            funkcjonowania butiku
          </span>
        </CCol>
      </div>
      <div className="row justify-content-md-center align-items-center">
        <CCol md={4}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item h5">To co nas wyróżnia:</li>
            <li className="list-group-item">Modna odzież damska,</li>
            <li className="list-group-item">Stylowe akcesoria,</li>
            <li className="list-group-item">Atrakcyjne ceny,</li>
            <li className="list-group-item">Przyjazna atmosfera,</li>
            <li className="list-group-item">Kompetenta pomoc przy zakupach.</li>
          </ul>
        </CCol>
        <CCol md={4}>
          <CImage
            className="home__images"
            src={require("../images/hanger.jpg")}
            alt="Puste wieszaki"
          />
        </CCol>
      </div>
    </div>
  );
}
