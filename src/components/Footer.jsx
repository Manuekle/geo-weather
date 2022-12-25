/* eslint-disable no-unused-vars */
import React from 'react';
import Github from '../assets/Github';

function Footer() {
  return (
    <footer className="bg-[#FAF8F1] dark:bg-[#474E68] py-8 flex xl:flex-row flex-col gap-2 xl:justify-between justify-center items-center px-8">
      <span />
      <span className="flex flex-col gap-2 items-center text-sm tracking-wide">
        <h1 className="text-[#333B53] dark:text-[#F0E9D2] font-bold">
          © Todos los derechos reservados
        </h1>
        <h1 className="text-[#333B53] dark:text-[#F0E9D2] font-bold tracking-wide">
          Hecho con mucho <span className="text-red-500">❤</span> por Manuel
        </h1>
      </span>
      <a
        href="https://github.com/Manuekle/GeoWeather"
        target="_blank"
        rel="noreferrer"
      >
        <Github className="w-5 h-5 fill-[#333B53] dark:fill-[#F0E9D2] hover:fill-[#6B728E]/80 dark:hover:fill-gray-400" />
      </a>
    </footer>
  );
}

export default Footer;
