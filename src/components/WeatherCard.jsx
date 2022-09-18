import React from "react";

const WeatherCard = ({ data }) => {
  const { main, name, sys, weather, iconUrl } = data;
  return (
    <li className="border border-gray-400 rounded-xl bg-gray-400 max-w-[305px]">
      <h2 className="font-bold text-2xl text-center py-3 text-red-800">
        <span>{name}</span>
        <sup>{sys.country}</sup>
      </h2>
      <div className="text-center py-4 text-blue-600">
        <span className="text-8xl font-bold font-serif">{Math.round(main.temp)}</span>
        <sup className="text-6xl">°C</sup>
      </div>
      <figure className="flex items-center justify-center ">
        <img src={iconUrl} alt="city-icon" className="w-[150px] "/>
        <figcaption className="capitalize">{weather[0].description}</figcaption>
      </figure>
    </li>
  );
};

export default WeatherCard;
