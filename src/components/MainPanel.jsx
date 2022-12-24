/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-restricted-globals */
import { useContext, useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/css';
import { CurrentDayCard, CurrentHourCard } from './Current';
import { ForecastCards, ForecastDayCard } from './Forecast';

import { SearchBar } from './Utils';
import { WeatherContext } from '../context/WeatherContextProvider';
import locationImage from '../img/location.png';
import useDate from '../hooks/useDate';

export default function MainPanel() {
  const [active, setActive] = useState(0);
  const { time, date } = useDate();
  const { address, forecast } = useContext(WeatherContext);
  useEffect(() => {
    const transition = () => {
      setTimeout(() => {
        const replacers = document.querySelectorAll('[data-replace]');
        for (let i = 0; i < replacers.length; i++) {
          const replaceClasses = JSON.parse(
            replacers[i].dataset.replace.replace(/'/g, '"')
          );
          Object.keys(replaceClasses).forEach((key) => {
            replacers[i].classList.remove(key);
            replacers[i].classList.add(replaceClasses[key]);
          });
        }
      }, 100);
    };
    transition();
  }, []);

  // convert 24 hour to 12 hour
  const convertTime = (t) => {
    const hours = t.split(':')[0];
    const minutes = t.split(':')[1];
    const suffix = hours >= 12 ? 'PM' : 'AM';
    const hour = hours % 12 || 12;
    return `${hour}:${minutes} ${suffix}`;
  };

  return (
    <div className="relative z-0 grid justify-center min-h-screen gap-3 p-8 bg-[#F6F6F6]">
      {location ? (
        <div className="container min-w-5xl">
          <div
            className="flex flex-col items-center gap-2 delay-150 duration-700 transform opacity-0 transition-all -translate-y-12 ease-out"
            data-replace='{ "-translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
          >
            <div className="w-full flex flex-col gap-3 xl:w-[32em] justify-center">
              <span className="flex flex-col gap-0 justify-start">
                <h2 className="font-bold text-xl text-[#333B53]">
                  {convertTime(time) || ''}
                </h2>
                <h2 className="font-bold text-sm text-[#333B53]">
                  {date || ''}{' '}
                </h2>
              </span>
              <SearchBar />
              <div className="flex items-center justify-end w-full">
                <img
                  src={locationImage}
                  alt="Location"
                  width={25}
                  height={25}
                />
                <h2 className="text-base font-bold text-[#333B53]">
                  {address}
                </h2>
              </div>
            </div>
          </div>
          {/* current day */}
          <div className="relative flex flex-col gap-12 justify-center items-center py-14">
            <span className="flex flex-col gap-2 xl:w-[32em] w-full">
              {/* <h1 className="text-justify text-[#333B53] font-bold text-xl tracking-wide xl:text-2xl bg-[#FCFCFC] rounded-3xl px-8 py-2 shadow-xl">
                Current Day
              </h1> */}
              <CurrentDayCard />
            </span>
            {/* desktop */}
            <div className="bg-[#FCFCFC] rounded-3xl py-4 px-0 shadow-xl w-full xl:w-[32em] hidden xl:block relative cursor-move">
              <Splide
                options={{
                  perPage: 3,
                  arrows: false,
                  pagination: false,
                  drag: true,
                  focus: 'center',
                  perMove: 1,
                  gap: '2px',
                  autoScroll: {
                    speed: 1
                  }
                }}
              >
                {forecast?.forecastday?.[0].hour.map((element, index) => (
                  <SplideSlide key={index} className="cursor-move">
                    <CurrentHourCard key={index} element={element} />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            {/* mobile */}
            <div className="bg-[#FCFCFC] rounded-3xl py-4 px-8 shadow-xl w-80 xl:hidden block relative cursor-move">
              <Splide
                options={{
                  perPage: 1,
                  arrows: false,
                  pagination: false,
                  drag: true,
                  focus: 'center',
                  perMove: 1,
                  gap: '2px',
                  autoScroll: {
                    speed: 1
                  }
                }}
              >
                {forecast?.forecastday?.[0].hour.map((element, index) => (
                  <SplideSlide key={index} className="cursor-move">
                    <CurrentHourCard key={index} element={element} />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
          {/* forecast */}
          <div className="relative flex flex-col gap-12 justify-center items-center">
            <span className="flex flex-col gap-2 w-full">
              {/* <h1 className="text-justify text-[#333B53] font-bold text-xl tracking-wide xl:text-2xl bg-[#FCFCFC] rounded-3xl px-8 py-2 shadow-xl">
                Forecast
              </h1> */}
              <ForecastCards active={active} setActive={setActive} />
            </span>
            <span className="w-full flex justify-center">
              <ForecastDayCard active={active} />
            </span>
            {/* mobile */}
            <div className="bg-[#FCFCFC] rounded-3xl py-4 px-0 shadow-xl w-full xl:w-[32em] hidden xl:block relative cursor-move">
              <Splide
                options={{
                  perPage: 3,
                  arrows: false,
                  pagination: false,
                  drag: true,
                  focus: 'center',
                  perMove: 1,
                  gap: '2px',
                  autoScroll: {
                    speed: 1
                  }
                }}
              >
                {forecast?.forecastday?.[active].hour.map((element, index) => (
                  <SplideSlide key={index} className="cursor-move">
                    <CurrentHourCard key={index} element={element} />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            {/* desktop */}
            <div className="bg-[#FCFCFC] rounded-3xl py-4 px-8 shadow-xl w-80 xl:hidden block relative cursor-move">
              <Splide
                options={{
                  perPage: 1,
                  arrows: false,
                  pagination: false,
                  drag: true,
                  focus: 'center',
                  perMove: 1,
                  gap: '2px',
                  autoScroll: {
                    speed: 1
                  }
                }}
              >
                {forecast?.forecastday?.[active].hour.map((element, index) => (
                  <SplideSlide key={index} className="cursor-move">
                    <CurrentHourCard key={index} element={element} />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}
