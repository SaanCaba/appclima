import React from 'react';
import Card from './Card';
import './Cards.css'
export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className='cards'>
        {cities.map((city) => (
          <Card 
          key={city.id}
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.img}
          onClose={() => onClose(city.id)}
          id={city.id}
        />
        ))}
      </div>
    )
  }else{
    return(
      <div>No hay ciudades</div>
    )
  };
};