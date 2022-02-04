import { CCol, CContainer } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLocationPin } from "@coreui/icons";
import Iframe from "react-iframe";
import React from "react";
import "./LocationSection.scss";

export function LocationSection() {
  return (
    <div className="page__container" id="jakDojechac">
      <h2>Jak dojechać</h2>
      <CContainer>
        <div className="row justify-content-md-center">
          <CCol md={4}>
            <span className="location__address">
              <span className="address--block">
                <CIcon icon={cilLocationPin} size="lg" /> Róża Wiatrów
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
  );
}
