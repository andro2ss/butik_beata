import React from "react";
import { CContainer, CFooter, CLink } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cibFacebook, cilArrowCircleTop } from "@coreui/icons";
import "./Footer.scss";

function Footer(props) {
  return (
    <CFooter>
      <CContainer xl>
        <div className="footer__content">
          <div>
            <h2>Kontakt</h2>
            <p>
              <CLink href="https://coreui.io">
                <CIcon icon={cibFacebook} size="xl" /> Butik Beata
              </CLink>
            </p>
          </div>
          <div>
            <CLink href="#">
              <CIcon icon={cilArrowCircleTop} size="xxl" />
            </CLink>
          </div>
        </div>
      </CContainer>
    </CFooter>
  );
}

export default Footer;
