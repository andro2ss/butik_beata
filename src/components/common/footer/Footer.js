import React from "react";
import { CContainer, CFooter, CImage, CLink } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cibFacebook, cilArrowCircleTop } from "@coreui/icons";
import "./Footer.scss";

function Footer(props) {
  return (
    <CFooter className="footer">
      <CContainer xl>
        <div className="footer__content">
          <div>
            <ul className="list-group list-group-flush">
              <p className="h4">Odwiedź nas na:</p>
              <li className="list-group-item">
                Facebook'u
                <br />
                <CLink href="https://coreui.io">
                  <CIcon icon={cibFacebook} size="xl" /> Beata Butik
                </CLink>
              </li>
              <li className="list-group-item">
                Stacjonarnie
                <br />
                <span className="footer__text">
                  Promienna 7c,
                  <br />
                  87-800 Włocławek
                </span>
              </li>
            </ul>
          </div>
          <CImage
            className="logo animate__animated animate__swing animate__infinite"
            src={require("../../../images/Bb_big.png")}
            alt="logo"
          />
        </div>
      </CContainer>
    </CFooter>
  );
}

export default Footer;
