import React from "react";
import './AboutIntro.scss';

export default function AboutIntro() {
  return (
    <div className="about-intro">
      <div className="about-intro__image">
        <img
          src="https://zms.benstephan.com/wp-content/uploads/2020/08/ben-stephan.png"
          width="100%"
          alt="Ben Stephan"
        />
      </div>
      <div className="about-intro__content">
        <h4>Always striving</h4>

        <p>
          My goal as a creative professional is to always be improving. Whether
          that's within my job or in my skillset, I always am looking for new
          ways to expand in my passion
        </p>
        <h4>Preparation Meets Opportunity</h4>

        <p>
          Having experience in multiple disciplines, and 10+ years of experience
          in these creative fields, gives me a unique advantage in the web
          development and graphic design industry.
        </p>
      </div>
    </div>
  );
}
