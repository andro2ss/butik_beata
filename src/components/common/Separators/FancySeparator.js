import React from "react";
import "./FancySeparator.scss";

export function FancySeparator() {
  return (
    <div className="fancy-sep">
      <span>
        <img src={require("../../../images/Bb_small.png")} width="100" />
      </span>
    </div>
  );
}
