/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { DAY, WEATHER_CODES } from '../Const';

import Img from '../Utils/Img';
import TempsData from '../Utils/TempsData';
import { WeatherContext } from '../../context/WeatherContextProvider';
import WindHumData from '../Utils/WindHumData';

export default function ForecastCards({ active, setActive }) {
  const { forecast, degreeType } = useContext(WeatherContext);

  return (
    <div
      className="grid grid-cols-1 grid-rows-3 gap-3 my-3 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-1 delay-500 duration-700 transform opacity-0 transition-all translate-y-12 ease-out"
      data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" } '
    >
      {forecast?.forecastday?.map((day, index) => (
        <motion.div layout whileTap={{ scale: 0.95 }} animate={{ scale: 1 }}>
          <div
            key={day.date_epoch}
            className={`border-2 bg-[#FCFCFC] hover:bg-gray-100 rounded-3xl py-8 px-8 shadow-xl h-44 w-full grid grid-cols-4 grid-rows-2 justify-center items-center p-6 cursor-pointer ${
              active === index ? 'border-gray-200' : 'border-none'
            }`}
            onClick={() => setActive(index)}
          >
            <div className="col-span-2">
              <h3 className="text-xl text-[#333B53] font-bold tracking-wide">
                {DAY[new Date(day.date).getDay()]}
              </h3>
              <h3 className="font-bold text-black/30 text-sm capitalize tracking-wide">
                {day.day.condition.text}
              </h3>
            </div>
            <Img
              className="col-start-4 place-self-end"
              src={WEATHER_CODES[day.day.condition.code][0]}
              alt="Location"
              width={70}
              height={70}
            />

            <div className="col-span-2 gap-3">
              <WindHumData src="wind" text="km/h" data={day.day.maxwind_kph} />
              <WindHumData src="humidity" text="%" data={day.day.avghumidity} />
            </div>
            <div className="flex flex-col col-span-2 mt-4 place-items-end">
              <TempsData
                temp={
                  degreeType === 'C' ? day.day.maxtemp_c : day.day.maxtemp_f
                }
                max
              />
              <TempsData
                temp={
                  degreeType === 'C' ? day.day.mintemp_c : day.day.mintemp_f
                }
              />
            </div>
          </div>
        </motion.div>
      )) || <div>Loading...</div>}
    </div>
  );
}
