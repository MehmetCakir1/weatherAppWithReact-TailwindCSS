import axios from "axios"
import { useEffect, useState } from "react";
import Footer from "./Footer";
import WeatherCard from "./WeatherCard"
import Header from "./Header";

const Main = () => {
  const [searchText,setSearchText]=useState("")
  const [info,setInfo]=useState([...JSON.parse(localStorage.getItem("info"))])
  const [error,setError]=useState()


// const apiKey = process.env.REACT_APP_API_KEY;
const apiKey = "7f804c16a5eb328e48579b8216c62e7b";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=metric`;

  const getWeatherData=async()=>{
    try {
      const {data} = await axios.get(url);
      //   console.log(data);
      const { main, name, sys, weather, id } = data;
      const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

      const isExist = info?.some((card) => card.id === id);
      if (isExist) {
        setError(
          `There is already city called "${name}". Please search for another city 😉`
        );
        setTimeout(() => {
          setError("");
        }, 3000);
      } else {
        setInfo([{ main, name, sys, weather, iconUrl, id }, ...info]);
      }
    } catch (err) {
      // console.log(err);
      setError(err.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    }
};

const handleChange = (e) => {
  setSearchText(e.target.value);
};
const handleSubmit = (e) => {
  e.preventDefault();
  getWeatherData();
  setSearchText("");
  localStorage.setItem("info",JSON.stringify(info))
};
useEffect(() => {
  localStorage.setItem("info", JSON.stringify(info));
}, [info]);


  return (
    <main>
    <Header/>
        <section className="flex flex-col justify-center items-center">
    <form onSubmit={handleSubmit} className="w-full max-w-[35rem] flex flex-col justify-between">
      <div className="flex items-center">
        <input
        onChange={handleChange}
        type="text"
        placeholder="Search for a city"
        value={searchText}
        // autoFocus
        className="w-9/12 p-2 border border-gray-500 text-xl mx-3"
      />
      <button type="submit" className="w-3/12 bg-red-400 text-xl font-bold font-mono text-white hover:bg-green-400 transition-colors 0.3s ease-in py-2 rounded-lg">SUBMIT</button>
      </div>
      <p className="min-h-[35px] text-center flex items-center justify-center font-serif font-bold">{error}</p>
    </form>
      <ul className="container mt-9 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {info?.map((item) => (
          <WeatherCard key={item.id} data={item} info={info} setInfo={setInfo}/>
        ))}
      </ul>
  </section>
  <Footer info={info}/>
    </main>

  )
        }
export default Main