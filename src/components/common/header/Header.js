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

function Header({ navItems }) {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <>
      <CNavbar
        expand="lg"
        colorScheme="light"
        className="bg-light"
        placement="fixed-top"
      >
        <CContainer fluid>
          <CNavbarToggler
            aria-label="Toggle navigation"
            aria-expanded={visible}
            onClick={() => setVisible(!visible)}
          />
          <CNavbarBrand
            href={`#${navItems[0][1]}`}
            onClick={() => setActive(0)}
          >
            Beata Butik
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
