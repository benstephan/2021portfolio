import React, { useState } from "react";
import "./ServicesIcons.scss";
import ReactLogo from "../../../Assets/Images/ReactLogo";
import SassLogo from "../../../Assets/Images/SassLogo";
import AngularLogo from "../../../Assets/Images/AngularLogo";
import VueLogo from "../../../Assets/Images/VueLogo";
import WebpackLogo from "../../../Assets/Images/WebpackLogo";
import NodeLogo from "../../../Assets/Images/NodeLogo";
import PHPLogo from "../../../Assets/Images/PHPLogo";
import InvisionLogo from "../../../Assets/Images/InvisionLogo";
import FigmaLogo from "../../../Assets/Images/FigmaLogo";
import AdobeLogo from "../../../Assets/Images/AdobeLogo";

export default function ServicesIcons() {
  const [toggleActive, setToggleActive] = useState(false);
  return (
    <div className="services-icons">
      <label id="service-switch" className="toggle-label">
        <input type="checkbox" />
        <span className="back" onClick={() => setToggleActive(!toggleActive)}>
          <span className="toggle"></span>
          <span className="tech-label label on">Tech</span>
          <span className="design-label label off">Design</span>
        </span>
      </label>
      <div className={toggleActive === false ? "services-icons__wrap active" : "services-icons__wrap"}>
        <div className="services-icons__wrap__logo">
          <ReactLogo />
          <p>React</p>
        </div>
        <div className="services-icons__wrap__logo">
          <SassLogo />
          <p>SASS</p>
        </div>
        <div className="services-icons__wrap__logo">
          <AngularLogo />
          <p>Angular</p>
        </div>
        <div className="services-icons__wrap__logo">
          <VueLogo />
          <p>Vue</p>
        </div>
        <div className="services-icons__wrap__logo">
          <WebpackLogo />
          <p>Webpack</p>
        </div>
        <div className="services-icons__wrap__logo">
          <NodeLogo />
          <p>Node</p>
        </div>
        <div className="services-icons__wrap__logo">
          <PHPLogo />
          <p>PHP</p>
        </div>
      </div>
      <div className={toggleActive === true ? "services-icons__wrap active" : "services-icons__wrap"}>
        <div className="services-icons__wrap__logo">
            <InvisionLogo />
            <p>Invision</p>
        </div>
        <div className="services-icons__wrap__logo">
            <FigmaLogo />
            <p>Figma</p>
        </div>
        <div className="services-icons__wrap__logo">
            <AdobeLogo />
            <p>Adobe</p>
        </div>
      </div>
    </div>
  );
}
