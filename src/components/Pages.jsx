/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import { useContext, useEffect } from 'react';

import Loading from './Loading';
import MainPanel from './MainPanel';
import Header from './Header';
import Footer from './Footer';
import { WeatherContext } from '../context/WeatherContextProvider';
import { geolocationOptions } from './Const';
import useCurrentLocation from '../hooks/useCurrentLocation';

export default function Pages() {
  const { location, error } = useCurrentLocation(geolocationOptions);
  const { getWeather } = useContext(WeatherContext);

  useEffect(() => {
    if (location !== undefined) {
      getWeather(location);
    }
  }, [location]);
  return location ? (
    <>
      <Header />
      <MainPanel />
      <Footer />
    </>
  ) : (
    <Loading error={error} />
  );
}
