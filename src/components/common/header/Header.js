import React, { useState } from "react";
import {
  CContainer,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CNavbar,
  CNavbarToggler,
  CNavbarBrand,
  CCollapse,
} from "@coreui/react";
import "./Header.scss";

function Header({ navItems }) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <>
      <CNavbar
        expand="lg"
        colorScheme="light"
        className="header__nav"
        placement="fixed-top"
      >
        <CContainer xl className="border-bottom border-bottom-warning">
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CNavbarBrand
            href={`#${navItems[0][1]}`}
            onClick={() => setActive(0)}
            className="mb-0 h1"
          >
            <span className="font--title">Beata Butik</span>
          </CNavbarBrand>
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="me-auto mb-2 mb-lg-0">
              {navItems.map((navItem, itemIndex) => (
                <CNavItem key={navItem[0]}>
                  <CNavLink
                    href={`#${navItem[1]}`}
                    onClick={() => setActive(itemIndex)}
                    className={` ${active === itemIndex ? "active" : ""}`}
                  >
                    {navItem[0]}
                  </CNavLink>
                </CNavItem>
              ))}
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
}

export default Header;
