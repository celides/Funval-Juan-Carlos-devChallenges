"use client";

import React from "react";
import Image from "next/image";
import "./LadoIz.css";
import Encabezado from "../Encabezado";
import Buscador from "../Buscador";

const location = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-geo-alt-fill"
    viewBox="0 0 16 16"
  >
    {" "}
    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />{" "}
  </svg>
);

export default function LadoIz(props) {
  const [buscadorAbierto, setBuscadorAbierto] = React.useState(false);

  return (
    <section className="todayWeather__section">
      <Encabezado
        setBuscadorAbierto={setBuscadorAbierto}
        getClima={props.getClima}
        getData={props.getData}
      />
      <div className="currentWeather__info_container">
        <div className="weather__icon_container">
          <span className="currentWeather_icon">
            <Image
              src={`/clima/${props.icon}`}
              width={80}
              height={80}
              alt={props.condition}
            />
          </span>
        </div>

        <div className="weather__temp_container">
          <h2 className="weather__temp">
            {props.changeDegree ? props.tempC : props.tempF}
          </h2>
          <h3>{props.changeTemp}</h3>
        </div>

        <h2 className="weather__condition">{props.condition}</h2>

        <p className="weather__date">
          Today &nbsp;&nbsp; . &nbsp;&nbsp; {props.date}
        </p>

        <pre className="weather__location">
          <span className="material-symbols-outlined">{location}</span>
          {props.city}
        </pre>
      </div>

      <Buscador
        buscadorAbierto={buscadorAbierto}
        setBuscadorAbierto={setBuscadorAbierto}
        getClima={props.getClima}
        getData={props.getData}
      />
    </section>
  );
}
