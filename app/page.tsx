"use client";
import LadoIz from "../components/LadoIz";
import LadoD from "../components/LadoD";
import React, { useEffect, useState } from "react";

function formatoDeFecha() {
  let hoy = new Date();

  let diaSemana = hoy.toLocaleString("en-US", { weekday: "short" });

  let diaMes = hoy.getDate();

  let mes = hoy.toLocaleString("en-US", { month: "short" });

  return `${diaSemana}, ${diaMes} ${mes}`;
}

export default function Home() {
  const [clima, setClima] = useState<any>();
  const [pronostico, setPronostico] = useState<any>();
  const [changeDegree, setChangeDegree] = useState(true);

  const getClima = async (cityName: string = "Aguascalientes", url?: string) => { 
    url
      ? url
      : (url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4ad565930b09016071d3b0ba0747ae13&units=metric`);

    const response = await fetch(url);

    const jsonResponse = await response.json();

    setClima(jsonResponse);
  };

  const getData = async (cityName: string = "Aguascalientes", url?: string) => {
    url
      ? url
      : (url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=4ad565930b09016071d3b0ba0747ae13&units=metric`);

    const response = await fetch(url);

    const jsonResponse = await response.json();

    const today = new Date();
    let date;
    const weather = [];

    for (let i = 0; i < jsonResponse.list.length; i += 1) {
      date = new Date(jsonResponse.list[i].dt_txt);

      if (date.getDate() !== today.getDate()) {
        weather.push(jsonResponse.list[i]);

        i = i + 8;
      }
    }

    setPronostico(weather);
  };

  const degreeConvertion = (temperature: number) => {
    let temp_f = (temperature * 9) / 5 + 32;

    return temp_f;
  };

  const fecha = formatoDeFecha();

  useEffect(() => {
    getClima();
    getData();
  }, []);

  return (
    <div className="container">
      {clima && (
        <LadoIz
          icon={parseInt(clima.weather[0].icon) + ".png"}
          tempC={Math.round(clima.main.temp) + "°C"}
          tempF={Math.round(degreeConvertion(clima.main.temp)) + "°F"}
          city={clima.name}
          condition={clima.weather[0].description}
          date={fecha}
          getClima={getClima}
          getData={getData}
          degreeConvertion={degreeConvertion}
          changeDegree={changeDegree}
        />
      )}

      {pronostico && (
        <LadoD
          clima={clima}
          pronostico={pronostico}
          degreeConvertion={degreeConvertion}
          changeDegree={changeDegree}
          setChangeDegree={setChangeDegree}
        />
      )}
    </div>
  );
}
