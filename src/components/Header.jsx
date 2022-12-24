import React, { useContext, useState } from 'react';

import { motion } from 'framer-motion';
import { Thermometer } from 'phosphor-react';
import { WeatherContext } from '../context/WeatherContextProvider';

function Header() {
  const { degreeType, changeDegreeType } = useContext(WeatherContext);
  const [degree, setDegree] = useState('C');

  const changeDegree = () => {
    if (degreeType === 'C') {
      setDegree('F');
      changeDegreeType('F');
    } else {
      setDegree('C');
      changeDegreeType('C');
    }
  };
  return (
    <div>
      <div className="fixed z-20 top-0 left-0 justify-end items-end right-0 flex p-4 flex-col gap-2">
        <motion.div layout whileTap={{ scale: 0.95 }} animate={{ scale: 1 }}>
          <button
            type="button"
            onClick={() => changeDegree()}
            className={
              degree === 'C'
                ? 'border border-sky-400 text-sky-600 text-sm rounded-md px-2 py-1 flex flex-row gap-2 items-center justify-center bg-sky-500/50 shadow-sm'
                : 'border border-amber-400 text-amber-600 text-sm rounded-md px-2 py-1 flex flex-row gap-2 items-center justify-center bg-amber-500/50'
            }
          >
            <span>
              <Thermometer size={20} />
            </span>
            {degree === 'C' ? <h1>C</h1> : <h1>F</h1>}
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Header;
