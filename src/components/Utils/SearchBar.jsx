/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import { useContext, useState } from 'react';

import PlacesAutocomplete from 'react-places-autocomplete/dist/PlacesAutocomplete';
import { MagnifyingGlass } from 'phosphor-react';
import { WeatherContext } from '../../context/WeatherContextProvider';

export default function SearchBar() {
  const [input, setInput] = useState('');
  const { searchWeather } = useContext(WeatherContext);
  return (
    <form className="relative z-10 ">
      <PlacesAutocomplete
        onChange={(address) => setInput(address)}
        value={input}
        onSelect={(newAddress, placeId, suggestion) => {
          searchWeather({ newAddress });
          setInput('');
        }}
        googleCallbackName="initOne"
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className=" w-full">
            <span className="col-span-3 xl:col-span-1 flex flex-row gap-2 relative">
              <input
                {...getInputProps({
                  placeholder: 'Search city',
                  className:
                    'w-full h-10 pl-10 text-sm px-4 py-2 border rounded-full place-self-end active:outline-none focus:outline-none'
                })}
              />
              <span className="absolute top-1/2 left-3 transform -translate-y-1/2 text-zinc-500">
                <MagnifyingGlass size={18} />
              </span>
              {/* <Email className="absolute top-1/2 left-3 transform -translate-y-1/2 fill-white/80" /> */}
            </span>

            <div className="absolute z-50 max-w-xs p-3 bg-white border rounded top-15 h-fit empty:hidden place-self-start">
              {loading && ''}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? 'mt-2 border-b border-solid border-cardGray'
                  : 'mt-2 border-b border-dashed border-cardGray';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                    key={suggestion.description}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </form>
  );
}
