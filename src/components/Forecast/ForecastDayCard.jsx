/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect, useState } from 'react';
import { DAY, WEATHER_CODES } from '../Const';

import { Img } from '../Utils';
import Temp from '../../img/Temp.png';
import { WeatherContext } from '../../context/WeatherContextProvider';
import WindHumData from '../Utils/WindHumData';

export default function ForecastDayCard({ active }) {
  const { forecast, degreeType } = useContext(WeatherContext);
  const day = forecast?.forecastday?.[active];

  const [data, setData] = useState([]);

  useEffect(() => {
    setData([]);
    day?.hour?.forEach((day, index) => {
      setData((prev) => [
        ...prev,
        {
          x: index,
          y: degreeType === 'C' ? day.temp_c : day.temp_f
        }
      ]);
    });
  }, [forecast, degreeType, active]);

  return (
    <div
      className="delay-300 duration-700 transform opacity-0 transition-all translate-y-12 ease-out w-full flex justify-center"
      data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
    >
      <div className="flex flex-col gap-4 bg-[#FCFCFC] rounded-3xl p-8 shadow-xl w-full xl:w-[32em]">
        <div className="flex justify-between items-center">
          <span className="flex flex-col gap-1">
            <h3 className="text-3xl text-[#333B53] font-bold tracking-wide">
              {DAY[new Date(day?.date).getDay()]}
            </h3>
            <h2 className="text-xl xl:text-7xl font-bold text-[#333B53]">
              {degreeType === 'C'
                ? `${day?.day?.avgtemp_c}°C`
                : `${day?.day?.avgtemp_f}°F`}
            </h2>
            <h1 className="font-bold text-black/30 text-sm xl:text-md capitalize tracking-wide">
              {day?.day?.condition?.text}
            </h1>
          </span>
          <Img
            // className="mt-5 place-self-end"
            src={
              WEATHER_CODES[day?.day?.condition?.code]?.[
                (day?.day?.condition?.code === 1000 && day?.day?.is_day) === 0
                  ? 1
                  : 0
              ]
            }
            alt="Weather"
            // width={90}
            // height={90}
            className="w-20 xl:w-[100] h-20 xl:h-[100] object-contain"
          />
        </div>
        <span className="flex flex-col gap-1">
          <WindHumData
            src="wind"
            title="Max Wind: "
            text=" km/h "
            data={`${day?.day?.maxwind_kph}`}
          />

          <WindHumData
            src="humidity"
            title="Avg Humidity: "
            text="%"
            data={day?.day?.avghumidity}
          />
        </span>
      </div>
    </div>
  );
}
