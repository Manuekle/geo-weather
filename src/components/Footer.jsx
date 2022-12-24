import React from 'react';

function Footer() {
  return (
    <footer className="bg-zinc-900 py-8 flex justify-center">
      <span className="flex flex-col gap-2 items-center text-sm">
        <h1 className="text-white">© Todos los derechos reservados</h1>
        <h1 className="text-white">
          Hecho con mucho <span className="text-red-500">❤</span> y moviendo las
          manitas
        </h1>
      </span>
    </footer>
  );
}

export default Footer;
