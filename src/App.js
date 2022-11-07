import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'


export default function App() {
  const apiKey = '4ae2636d8dfbdc3044bede63951a019b'
    const [cities, setCities] = useState([]);
    const [ciudadRepetida, setCiudadRepetida] = useState('')
    console.log(cities)
    function onSearch(ciudad) {
      let findCity = cities.find(e => e.name.toLowerCase().includes(ciudad))
      if(findCity){
        setCiudadRepetida(`La ciudad ${ciudad} ya existe`)
        return;
      }else{
        setCiudadRepetida('')
      }
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
        .then(r => r.json())
        .then((recurso) => {
          if(recurso.main !== undefined){
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
            setCities(oldCities => [...oldCities, ciudad]);
          } else {
            alert("Ciudad no encontrada");
          }
        });
  
      }
      function onClose(id) {
        setCities(oldCities => oldCities.filter(c => c.id !== id));
      }
  
  return (
    <div className="App">
        <Nav onSearch={onSearch}/>
        {ciudadRepetida && (
          <div>
            <label>{ciudadRepetida}</label>
          </div>
        )}
        { !cities.length && <h1 className='busca'>Busca tus lugares!</h1>}
        <Cards
          cities={cities}
          onClose={onClose}
        />
    </div>
  );
}
