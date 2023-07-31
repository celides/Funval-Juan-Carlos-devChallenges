import React from "react";
import "./Buscador.css";
export default function Buscador(props) {
  const [cityName, setCityName] = React.useState("");

  const onChangeSearchLocation = (event) => {
    setCityName(event.target.value);
  };

  return (
    <section
      className={`weatherNav_container ${!props.buscadorAbierto && "hide"}`}
    >
      <nav className="Weather__nav">
        <button
          className="weather__nav_buttonClose"
          onClick={() => {
            props.setBuscadorAbierto(false);
          }}
        >
          X
        </button>

        <div className="weather__nav_inputConatiner">
          <span className="material-symbols-outlined">search</span>

          <input
            type="text"
            placeholder="search location"
            value={cityName}
            onChange={onChangeSearchLocation}
          />
        </div>

        <button
          className="weather__nav_buttonSearch"
          onClick={() => {
            props.getClima(cityName);
            props.getData(cityName);
            props.setBuscadorAbierto(false);
          }}
        >
          Search
        </button>
      </nav>
    </section>
  );
}
