import React, { useEffect, useState } from "react";
import "./Cookie.scss";
import { CButton } from "@coreui/react";

function Cookie() {
  const [cookieOK, setCookieOK] = useState("block");

  if (!localStorage.getItem("cookie")) {
    localStorage.setItem("cookie", "block");
  }

  useEffect(() => {
    let cookie = localStorage.getItem("cookie");
    if (cookie) {
      if (cookie !== cookieOK) {
        setCookieOK(cookie);
      }
      if (cookie === "none") {
        document
          .querySelector(".cookie--custom")
          .classList.add("visually-hidden");
      }
    }
  }, [cookieOK]);
  return (
    <div className="cookie--custom ">
      <div className="cookie-consent">
        <span>
          Ta strona używa plików cookie stron trzecich w celu zwiększenia
          komfortu użytkowania
        </span>
        <div className=" ml-2 d-flex align-items-center justify-content-center g-2">
          <CButton
            color="success"
            shape="rounded-pill"
            className="allow-button"
            onClick={() => {
              setCookieOK("none");
              localStorage.setItem("cookie", "none");
            }}
          >
            Rozumiem
          </CButton>
        </div>
      </div>
    </div>
  );
}

export default Cookie;
