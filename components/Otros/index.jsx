import React from "react";
import "./Otros.css";
import Image from "next/image";
export default function Otros({ clima }) {
  

  return (
    <div className="currentWeather_hightlights">
      <h2 className="currentWeather_hightlights_title">Today`s Hightlights</h2>

      <div className="currentWeather__windStatus">
        <h2 className="currentWeather__windStatus_title">Wind status</h2>

        <div className="currentWeather__windStatus_value">
          <h3>{clima.wind.speed}</h3>

          <h4>mph</h4>
        </div>

        <div className="currentWeather__windStatus_direction">
          <span className="material-symbols-outlined">
            <Image src="/wind-direction.svg" alt="w" width={20} height={20} />
          </span>

          {clima.wind.deg}
        </div>
      </div>

      <div className="currentWeather__humidity">
        <h2 className="currentWeather__humidity_title">Humidity</h2>

        <div className="currentWeather__humidity_value">
          <h3>{clima.main.humidity}</h3>
          <h4>%</h4>
        </div>

        <div className="humidity__number_porcentage">
          <p className="barracrece">0</p>
          <p className="barracrece">50</p>
          <p className="barracrece">100</p>
        </div>

        <div className="humidity__bar">
          <div style={{ width: `${clima.main.humidity}%` }}></div>
        </div>

        <div className="humidity__porcentage">%</div>
      </div>

      <div className="currentWeather__visibility">
        <h2 className="currentWeather__visibility_title">Visibility</h2>

        <div className="currentWeather__visibility_value">
          <h3>{clima.visibility / 1000}</h3>
          <h4>miles</h4>
        </div>
      </div>

      <div className="currentWeather__airPressure">
        <h2 className="currentWeather__airPressure_title">Air Pressure</h2>

        <div className="currentWeather__airPressure_value">
          <h3>{clima.main.pressure}</h3>
          <h4>mb</h4>
        </div>
      </div>
    </div>
  );
}
