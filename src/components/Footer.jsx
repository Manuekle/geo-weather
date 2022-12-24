/* eslint-disable no-unused-vars */
import React from 'react';
import Github from '../assets/Github';

function Footer() {
  return (
    <footer className="bg-zinc-900 py-8 flex xl:flex-row flex-col gap-2 xl:justify-between justify-center items-center px-8">
      <span />
      <span className="flex flex-col gap-2 items-center text-sm">
        <h1 className="text-white">© Todos los derechos reservados</h1>
        <h1 className="text-white">
          Hecho con mucho <span className="text-red-500">❤</span> por Manuel
        </h1>
      </span>
      <a
        href="https://github.com/Manuekle/GeoWeather"
        target="_blank"
        rel="noreferrer"
      >
        <Github className="w-5 h-5 fill-white hover:fill-zinc-300" />
      </a>
    </footer>
  );
}

export default Footer;
