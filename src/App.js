import React,{useState,useEffect} from 'react';
import './App.css';
const API ={
  key: '98abc46db0msh24d1c235fc82da8p1831d3jsnba34ca7ec11e'
}
function App() {
  //State Hooks
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  //Get Date
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  let weekDay = newDate.getDay();
  switch(weekDay){
    case 0: weekDay = 'Sunday';
      break;
    case 1: weekDay = 'Monday';
      break; 
    case 2: weekDay = 'Tuesday';
      break;
    case 3: weekDay = 'Wednesday';
      break;
    case 4: weekDay = 'Thursday';
      break;
    case 5: weekDay = 'Friday';
      break;
    case 6: weekDay = 'Saturday ';
      break;
    default: weekDay = 'Error 404';
  }
  switch(month){
    case 0: month = 'January'; break;
    case 1: month = 'February'; break;
    case 2: month = 'March'; break;
    case 3: month = 'April'; break;
    case 4: month = 'May'; break;
    case 5: month = 'June'; break;
    case 6: month = 'July'; break;
    case 7: month = 'August'; break;
    case 8: month = 'September'; break;
    case 9: month = 'October'; break;
    case 10: month = 'November'; break;
    case 11: month = 'December'; break;
    default: month = 'Eror 404';
  }

  // Search
  const search = (event) =>{
    if(event.key =='Enter') {
      fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=metric`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": `${API.key}`
        }
      })
      .then(response =>response.text())
      .then(result => {
          if(JSON.parse(result).cod == '200'){
            setWeather(JSON.parse(result)); setCity('');
          }
          else {setWeather(false); alert(`Enter Valid city or country name`); setCity('')};
      })
    }
  }
  return (
    <div className={`whole-wrapper ${weather && weather.main.temp >=25 ? 'warm': ''}`}>
        <div className="app-wrapper">
            <div className="search-bar">
                <input type="text" placeholder="Search..." onKeyPress={search} value={city} onChange={(e)=>setCity(e.target.value)}/>
            </div>
            <div className="weather-wrapper">
                <div className="location weater-box">
                  <p>{ weather? `${weather.name}, ${weather.sys.country}`: 'city, country' }</p> 
                </div>
                <div className="date weater-box">
                    <p>{weekDay + ', ' + month + ' ' +date+', '+year}</p> 
                </div>
                <div className="temperature weater-box">
                    <p>{weather? Math.round(weather.main.temp): 'NaN'} &#8451;</p> 
                </div>
                <div className="weather weater-box">
                    <p>{weather? weather.weather[0].main:'Weather'} </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
