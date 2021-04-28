import React, { useEffect, useState } from "react";
import { Container, ContainerPage } from "./../Components/Containers";
import { Text } from "./../Components/TextElements";

export default function Weather() {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    fetch("https://goweather.herokuapp.com/weather/Rotterdam")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeather(data);
      });
  }, []);
  return (
    <ContainerPage place="center start">
      <Text>
        The weather today in Rotterdam is {weather.temperature}{" "}
        {weather.description}.
      </Text>
    </ContainerPage>
  );
}
