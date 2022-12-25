/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Img from './Img';

export default function WindHumData({ src, data, text, title, newLine }) {
  return (
    <div className="flex items-center gap-3">
      <Img
        className="self-center"
        src={src}
        alt="Location"
        width={25}
        height={24}
      />
      <h3 className="text-sm text-[#333B53] dark:text-[#F0E9D2] font-bold tracking-wide">
        {title} {newLine && <br />}
        {data} {text}
      </h3>
    </div>
  );
}
