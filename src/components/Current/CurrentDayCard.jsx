/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react';
import { Sun } from 'phosphor-react';
import { DAY, WEATHER_CODES } from '../Const';

import Img from '../Utils/Img';
import Temp from '../../img/Temp.png';
import { WeatherContext } from '../../context/WeatherContextProvider';
import WindHumData from '../Utils/WindHumData';

export default function CurrentDayCard() {
  const { current, degreeType, forecast } = useContext(WeatherContext);

  return (
    <div
      className="relative z-0 delay-200 duration-700 transform opacity-0 transition-all translate-y-12 ease-out w-full flex justify-center"
      data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
    >
      <div className="flex flex-col gap-4 bg-[#FCFCFC] rounded-3xl p-8 shadow-xl w-full xl:w-[32em]">
        <div className="flex justify-between items-center">
          <span className="flex flex-col gap-1">
            <h3 className="text-3xl text-[#333B53] font-bold tracking-wide">
              {DAY[new Date(current.last_updated).getDay()] || 'Today'}
            </h3>
            <h2 className="text-xl xl:text-7xl font-bold text-[#333B53]">
              {degreeType === 'C'
                ? `${current.temp_c}ºC`
                : `${current.temp_f}ºF`}
            </h2>
            <h1 className="font-bold text-black/30 text-sm xl:text-md capitalize tracking-wide">
              {current.condition?.text}
            </h1>
          </span>
          <Img
            src={
              WEATHER_CODES[current.condition?.code]?.[
                (current?.condition?.code === 1000 && current?.is_day) === 0
                  ? 1
                  : 0
              ]
            }
            alt="Weather"
            // width={100}
            // height={100}
            className="w-20 xl:w-[100] h-20 xl:h-[100] object-contain"
          />
        </div>
        <span className="flex flex-col xl:flex-row justify-between">
          <div className="flex flex-col gap-1">
            <WindHumData
              src="wind"
              text={` km/h `}
              data={`${current.wind_kph}`}
            />
            <WindHumData
              src="humidity"
              title="Humidity: "
              text="%"
              data={current.humidity}
            />
            <WindHumData
              src="WindDegree"
              title="Wind Degree: "
              text="º"
              data={current.wind_degree}
            />
            <WindHumData
              src="Temp"
              title="Feels like: "
              text="º"
              data={
                degreeType === 'C' ? current.feelslike_c : current.feelslike_f
              }
            />
          </div>
          <div>
            <WindHumData
              src="sunrise"
              title="Sunrise: "
              text=""
              data={forecast?.forecastday?.[0].astro.sunrise}
              newLine
            />
            <WindHumData
              src="sunset"
              title="Sunset: "
              text=""
              data={forecast?.forecastday?.[0].astro.sunset}
              newLine
            />
          </div>
        </span>
      </div>
    </div>
  );
}
