import React from "react";
import "./Cards.css";
import Image from "next/image";
export default function Cards(props) {
  return (
    <li className="nextDaysWeather__items">
      <h3 className="nextDaysWeather__date">{props.date}</h3>

      <span className="nextDaysWeather__icon">
        <Image
          src={`/clima/${props.icon}`}
          width={40}
          height={40}
          alt={"props.condition"}
        />
      </span>

      <div className="nextDaysWeather__temp_container">
        <p className="nextDaysWeather__temp_a">
          {props.changeDegree ? props.temp_maxC : props.temp_maxF}
        </p>

        <p className="nextDaysWeather__temp_b">
          {props.changeDegree ? props.temp_minC : props.temp_minF}
        </p>
      </div>
    </li>
  );
}
