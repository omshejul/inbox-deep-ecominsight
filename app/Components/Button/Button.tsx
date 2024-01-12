"use client";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  subtext?: string;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, subtext, icon }) => {
  return (
    <button
      className=" mr-3 mt-3 bg-[#EFEFEF] text-[#6B6B6B] hover:shadow-lg transition-shadow ease-in-out duration-200 font-semibold px-6 py-4 rounded-3xl"
      onClick={onClick}
    >
      <div className="flex justify-center items-center">
        {icon && <div className="pr-2">{icon}</div>}
        <div className="flex items-start flex-col">
          <div className="">{text}</div>
          <div className="text-xs font-normal">{subtext}</div>
        </div>
      </div>
    </button>
  );
};

export default Button;
