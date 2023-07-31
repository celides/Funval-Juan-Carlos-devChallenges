import React from "react";
import "./PronosticoT.css";
export default function PronosticoT(props) {
  return (
    <section className="weatherForecast__container">
      <ul className="weatherForecast__list">{props.children}</ul>
    </section>
  );
}
