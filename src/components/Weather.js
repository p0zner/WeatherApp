import React, { Component } from 'react'

const Weather = (props) => {
   return (
      <div className='infoWeath'>
         {props.city &&
            <div>
               <p>Город: {props.city}, {props.country}</p>
               <p>Температура: {props.temp_c}°C</p>
               <p>Ощущается как: {props.feelslike_c}°C</p>
               <p>Скорость ветра: {props.wind_mph} м/с</p>
            </div>
         }
         <p className='error'>{props.error}</p>
      </div>
   )
}

export default Weather