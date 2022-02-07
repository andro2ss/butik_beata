import { CCol, CContainer } from "@coreui/react";
import React from "react";
import "./OpenHoursSection.scss";

export function OpenHoursSection() {
  return (
    <div className="page__container" id="godzinyOtwarcia">
      <h2>Godziny Otwarcia</h2>
      <CContainer>
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
            10:00 - 13:00
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
  );
}
