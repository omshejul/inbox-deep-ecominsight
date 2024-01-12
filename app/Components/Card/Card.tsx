import React from "react";
import Microphone from "../Icons/Microphone";
interface CardProps {
  children: React.ReactNode;
  className?: string;
  headText?: string;
  headSpan?: string;
  icon?: React.ReactNode;
  time?: string;
}
const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="flex flex-col shadow-2xl shadow-grey max-w-2xl overflow-hidden h-max rounded-xl bg-white text-gray-800">
      <div className="head flex justify-between px-8 p-4 bg-[#F2F2F3]">
        <div className="right flex items-center font-semibold ">
          {props.icon && <div className=" icon p-1">{props.icon}</div>}
          <span className="p-1 pr-0">{props.headText}</span>
          {props.headSpan && (
            <span className="p-1 opacity-50">⋅ {props.headSpan}</span>
          )}
        </div>
        <div className="left px-1 opacity-40">
          <Microphone />
        </div>
      </div>
      <div className={`flex flex-col relative h-max bg-[#F9F9F9] p-8 text-gray-800 ${props.className}`}>
        {props.time && (
          <span className=" absolute right-0 top-0 p-10 opacity-50">
            {props.time}
          </span>
        )}

        {props.children}
        <br />
        <div className="more text-gray-400 p-2">⌘ More actions</div>
      </div>
    </div>
  );
};

export default Card;
