/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
// import Moon from '../assets/svg/moon';
// import Sun from '../assets/svg/sun';
import Img from './Img';

function DarkMode() {
  const [theme, setTheme] = useState(null);

  const sun = 'Sunny';
  const moon = 'Moon';

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      console.log('🎉 Dark mode is supported');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };

  const toggleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <>
      <div className="flex justify-center items-center" onClick={toggleSwitch}>
        <button
          type="button"
          onClick={toggleSwitch}
          className={
            theme === 'dark'
              ? 'border border-slate-400 text-slate-800 text-sm rounded-md px-2 py-1 flex flex-row gap-2 items-center justify-center bg-slate-500/50 shadow-sm'
              : 'border border-yellow-400 text-yellow-600 text-sm rounded-md px-2 py-1 flex flex-row gap-2 items-center justify-center bg-yellow-500/50'
          }
        >
          <motion.div layout transition={spring}>
            <motion.div whileTap={{ rotate: 360 }}>
              {theme === 'dark' ? (
                <Img
                  className="self-center"
                  src={moon}
                  alt="Location"
                  width={25}
                  height={24}
                />
              ) : (
                <Img
                  className="self-center"
                  src={sun}
                  alt="Location"
                  width={25}
                  height={24}
                />
              )}
            </motion.div>
          </motion.div>
        </button>
      </div>
    </>
  );
}

export default DarkMode;
