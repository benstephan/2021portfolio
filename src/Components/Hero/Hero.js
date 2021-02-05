import React from "react";
import { Link } from "react-router-dom";
import "./Hero.scss";

export default function Hero(props) {
  return (
    <div className="hero">
      <div className="hero__wrap">
        <div className="bordered"></div>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        {props.link && props.cta && <Link to={props.link} className="btn btn-primary">
          {props.cta}
        </Link> }
      </div>
    </div>
  );
}
