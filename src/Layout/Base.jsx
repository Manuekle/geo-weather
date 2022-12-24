/* eslint-disable no-unused-vars */
import React from 'react';
import WeatherContextProvider from '../context/WeatherContextProvider';
import Pages from '../components/Pages';

function Base() {
  return (
    <WeatherContextProvider>
      <Pages />
    </WeatherContextProvider>
  );
}

export default Base;
