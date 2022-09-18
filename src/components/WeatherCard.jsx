import React from "react";

const WeatherCard = ({ data,info,setInfo }) => {
  const { main, name, sys, weather, iconUrl,id} = data;

  const removeItem = (id)=>{
    setInfo(info?.filter((item)=>item.id !==id))
  }
  return (
    <li className="border border-gray-400 rounded-xl bg-emerald-300 max-w-[305px] pb-3">
      <h2 className="font-bold text-2xl text-center py-3 text-red-800">
        <span>{name}</span>
        <sup>{sys.country}</sup>
      </h2>
      <div className="text-center py-4 text-blue-600">
        <span className="text-8xl font-bold font-serif">{Math.round(main.temp)}</span>
        <sup className="text-6xl">°C</sup>
      </div>
      <figure className="flex items-center justify-center ">
        <img src={iconUrl} alt="city-icon" className="w-[130px] "/>
        <figcaption className="capitalize">{weather[0].description}</figcaption>
      </figure>
      <button className="m-auto block text-xl font-bold text-white bg-red-400 rounded-md px-3 py-1 mt-3" onClick={()=>removeItem(id)}>DELETE</button>
    </li>
  );
};

export default WeatherCard;
