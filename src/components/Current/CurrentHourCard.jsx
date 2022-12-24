/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react';
import { motion } from 'framer-motion';
import Img from '../Utils/Img';
import { WEATHER_CODES } from '../Const';
import { WeatherContext } from '../../context/WeatherContextProvider';

export default function CurrentHourCard({ element }) {
  const { degreeType } = useContext(WeatherContext);
  // console.log(element.time);
  const time = element.time.slice(11, 16);
  // convert 24 hour to 12 hour
  const convertTime = (t) => {
    const hours = t.split(':')[0];
    const minutes = t.split(':')[1];
    const suffix = hours >= 12 ? 'PM' : 'AM';
    const hour = hours % 12 || 12;
    return `${hour}:${minutes} ${suffix}`;
  };
  return (
    <div className="flex flex-col gap-1 items-center">
      <p className="text-[#333B53] font-bold text-xs">
        {degreeType === 'C' ? `${element.temp_c}ºC` : `${element.temp_f}ºF`}
      </p>
      <div className="grid place-content-center place-items-center h-full ">
        <motion.div layout whileTap={{ scale: 1.1 }} animate={{ scale: 1 }}>
          <Img
            className="my-1 cursor-pointer"
            src={
              WEATHER_CODES[element.condition?.code]?.[
                (element?.condition?.code === 1000 && element?.is_day) === 0
                  ? 1
                  : 0
              ]
            }
            alt="Weather"
            width={48}
          />
        </motion.div>
        <span className="flex flex-col gap-1 items-center">
          <p className="text-[#333B53] font-bold text-xs">
            {/* {element.time.slice(11, 16)} */}
            {convertTime(time)}
          </p>
          <p className="text-[#333B53] font-bold text-xs whitespace-pre-line text-center">
            {element.condition?.text}
          </p>
        </span>
      </div>
    </div>
  );
}
