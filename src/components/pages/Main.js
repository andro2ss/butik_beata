import React from "react";
import {
  CCarousel,
  CCarouselItem,
  CCol,
  CContainer,
  CImage,
} from "@coreui/react";
import Iframe from "react-iframe";
import CIcon from "@coreui/icons-react";
import { cilLocationPin } from "@coreui/icons";
import "./Main.scss";

function Main() {
  return (
    <CContainer xl className="shadow p-3 mb-5 bg-body rounded">
      <div className="page__container" id="stronaGlowna">
        <br />
        <h1>Beata</h1>
        <p>Serdecznie zaprasza!</p>
        <p>
          Jesteśmy sklepem odzieżowym z modą damską i akcesoriami. Nieprzerwanie
          świadczymy dla Państwa usługi od 200 roku. Nasz personel z chęcią
          służyć będzie radą i pomocą. Staramy się iść z trendami i mieć coś
          nowego dla Państwa chociaż raz w tygodniu.
        </p>
        <p>
          Informacje o tymczasowych zmianach godzin pracy, jak i o dostawach
          nowinek ze świata mody znajdą Państwo na naszym{" "}
          <a href="https://www.facebook.com/">facebooku</a>.
        </p>
        <p>
          W razie jakiś pytań również zapraszamy na nasz{" "}
          <a href="https://www.facebook.com/">facebook</a>, staramy się na
          bieżąco Państwu odpowiadać w godzinach otwarcia butiku
        </p>
      </div>
      <hr />
      <div className="page__container" id="godzinyOtwarcia">
        <CContainer>
          <h2>Godziny Otwarcia</h2>
          <div className="row justify-content-md-center">
            <CCol xs lg={2}>
              Poniedziałek
            </CCol>
            <CCol xs lg={2}>
              10:00 - 17:00
            </CCol>
          </div>
          <div className="row justify-content-md-center">
            <CCol xs lg={2}>
              Wtorek
            </CCol>
            <CCol xs lg={2}>
              10:00 - 17:00
            </CCol>
          </div>
          <div className="row justify-content-md-center">
            <CCol xs lg={2}>
              Środa
            </CCol>
            <CCol xs lg={2}>
              10:00 - 17:00
            </CCol>
          </div>
          <div className="row justify-content-md-center">
            <CCol xs lg={2}>
              Czwartek
            </CCol>
            <CCol xs lg={2}>
              10:00 - 17:00
            </CCol>
          </div>
          <div className="row justify-content-md-center">
            <CCol xs lg={2}>
              Piątek
            </CCol>
            <CCol xs lg={2}>
              10:00 - 17:00
            </CCol>
          </div>
          <div className="row justify-content-md-center">
            <CCol xs lg={2}>
              Sobota
            </CCol>
            <CCol xs lg={2}>
              10:00 - 14:00
            </CCol>
          </div>
          <div className="row justify-content-md-center">
            <CCol xs lg={2}>
              Niedziela
            </CCol>
            <CCol xs lg={2}>
              zamknięte
            </CCol>
          </div>
        </CContainer>
      </div>
      <hr />
      <div className="page__container" id="jakDojechac">
        <h2>Jak dojechać</h2>
        <CContainer>
          <div className="row justify-content-md-center">
            <CCol md={4}>
              <span className="location__address">
                <span className="address--block">
                  <CIcon icon={cilLocationPin} size="md" /> Róża Wiatrów
                  <br />
                  poziom: parter
                </span>
                <span className="address--street">
                  Promienna 7c <br />
                  Włocławek 87-800 <br />
                </span>
              </span>
            </CCol>
            <CCol md={8}>
              <Iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d604.9064391813467!2d19.039696729268623!3d52.66673699874015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c990f5dd4e7a9%3A0xf1f663ea581e21d1!2sPromienna%207C%2C%2087-816%20W%C5%82oc%C5%82awek!5e0!3m2!1spl!2spl!4v1643798804739!5m2!1spl!2spl"
                style="border:0;"
                allowFullScreen=""
                loading="lazy"
                className="location__map"
              ></Iframe>
            </CCol>
          </div>
        </CContainer>
      </div>
      <hr />
      <div className="page__container" id="galeria">
        <h2>Galeria</h2>
        <CCarousel controls transition="crossfade" indicators>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src={require("./images/img1.jpg")}
              alt="slide 1"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src={require("./images/img2.jpg")}
              alt="slide 2"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src={require("./images/img3.jpg")}
              alt="slide 3"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src={require("./images/img4.jpg")}
              alt="slide 4"
            />
          </CCarouselItem>
        </CCarousel>
      </div>
      <hr />
    </CContainer>
  );
}

export default Main;
