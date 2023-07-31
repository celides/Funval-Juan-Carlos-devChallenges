import React, { use } from "react";
import "./LadoD.css";
import BotonesGrados from "../BotonesGrados";
import PronosticoT from "../PronosticoT";
import Cards from "../Cards";
import Footer from "../Footer";
import Otros from "../Otros";

function formatoDeFecha(date) {
  let hoy = new Date(date);

  let diaSemana = hoy.toLocaleString("en-US", { weekday: "short" });

  let diaMes = hoy.getDate();

  let mes = hoy.toLocaleString("en-US", { month: "short" });

  return `${diaSemana}, ${diaMes} ${mes}`;
}

/* const promPronostico = getData(); */

export default function LadoD(props) {
  const pronostico = props.pronostico;

  return (
    <div className="rightSide">
      <BotonesGrados setChangeDegree={props.setChangeDegree} />
      <PronosticoT>
        {pronostico.map((pron, i) => (
          <Cards
            key={i}
            temp_minC={Math.round(pron.main.temp_min) + "°C"}
            temp_maxC={Math.round(pron.main.temp_max) + "°C"}
            temp_minF={
              Math.round(props.degreeConvertion(pron.main.temp_min)) + "°F"
            }
            temp_maxF={
              Math.round(props.degreeConvertion(pron.main.temp_max)) + "°F"
            }
            icon={parseInt(pron.weather[0].icon) + ".png"}
            date={formatoDeFecha(pron.dt_txt)}
            changeDegree = {props.changeDegree}
          />
        ))}
      </PronosticoT>
      <Otros clima={props.clima} />
      <Footer />
    </div>
  );
}
