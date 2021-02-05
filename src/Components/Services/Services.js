import React from "react";
import "./Services.scss";
import ServicesIcons from "./ServicesIcons/ServicesIcons";

export default function Services() {
  return (
    <div className="services-background">
      <div className="services">
        <div className="services__title">
          <h5>My Skills</h5>
          <div className="bordered"></div>
          <p>
            My creative skillset spans the abstract to the analytical. While I
            specialize in front-end development, my roots are in maticulous
            print production and graphic design.
          </p>
        </div>
        <div class="services__list">
          <div class="services__list__box">
            <h6>UX/UI</h6>
            <p>
              User Experience Design
              <br />
              Rapid Prototyping
              <br />
              Usability Testing
              <br />
              UX Reviews
              <br />
              Interaction Design
              <br />
              Customer journeys
            </p>
          </div>
          <div class="services__list__box">
            <h4>Product Design</h4>
            <p>
              User Interface Design
              <br />
              Visual Design
              <br />
              Visual Identities
              <br />
              Design Systems
              <br />
              Responsive &amp; Mobile Websites
              <br />
              Modular Grid Systems
              <br />
              Brand guidelines <br />
            </p>
          </div>
          <div class="services__list__box">
            <h4>Development</h4>
            <p>
              Front-end development
              <br />
              Responsive &amp; Mobile Websites
              <br />
              Mobile apps
              <br />
              Animations
              <br />
              SaaS applications
              <br />
              Platform solutions <br />
            </p>
          </div>
        </div>
        <ServicesIcons />
      </div>
    </div>
  );
}
