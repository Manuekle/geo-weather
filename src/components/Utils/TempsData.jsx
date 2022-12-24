/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react';
import DownArrow from '../../img/DownArrow.png';
import Temp from '../../img/Temp.png';
import UpArrow from '../../img/UpArrow.png';
import { WeatherContext } from '../../context/WeatherContextProvider';

export default function TempsData({ temp, max }) {
  const { degreeType } = useContext(WeatherContext);
  return (
    <div className="flex items-center gap-3">
      <h2 className="text-sm font-bold text-[#333B53] tracking-wide">
        {temp}º{degreeType}
      </h2>
      <div className="flex">
        <img className="w-5 h-5" src={Temp} alt="Max temp" />
        {max ? (
          <img className="w-5 h-5 aspect-square" src={UpArrow} alt="Max temp" />
        ) : (
          <img
            className="w-5 h-5 aspect-square"
            src={DownArrow}
            alt="min temp"
          />
        )}
      </div>
    </div>
  );
}
