"use client";
import { useState } from "react";
import styled from 'styled-components'
const MainIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-287q5 0 10.5-1.5T501-453l283-177q8-5 12-12.5t4-16.5q0-20-17-30t-35 1L480-520 212-688q-18-11-35-.5T160-659q0 10 4 17.5t12 11.5l283 177q5 3 10.5 4.5T480-447Z" />
  </svg>
);
const PlusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 -960 960 960"
    width="24"
  >
    <path d="M440-440H240q-17 0-28.5-11.5T200-480q0-17 11.5-28.5T240-520h200v-200q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v200h200q17 0 28.5 11.5T760-480q0 17-11.5 28.5T720-440H520v200q0 17-11.5 28.5T480-200q-17 0-28.5-11.5T440-240v-200Z" />
  </svg>
);
const MessengerIcon = (
  <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient
        id="prefix__a"
        y1="15.2"
        x2="112.429"
        x1="112.429"
        y2="214.965"
        gradientTransform="matrix(.10592 0 0 .10673 .091 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#00C6FF" offset="0" />
        <stop stop-color="#0068FF" offset="1" />
      </linearGradient>
    </defs>
    <path
      fill="url(#prefix__a)"
      d="M4.478 19.726V24l3.997-2.272a12.72 12.72 0 003.525.494c6.577 0 11.909-4.975 11.909-11.11C23.909 4.974 18.577 0 12 0 5.423 0 .091 4.975.091 11.111c0 3.475 1.71 6.577 4.387 8.615z"
    />
    <path
      fill="#fff"
      d="M10.78 8.068l-6.422 6.8 5.844-3.207 3.054 3.207 6.386-6.8-5.78 3.15z"
    />
  </svg>
);
const XIcon = (
  <svg
    shape-rendering="geometricPrecision"
    text-rendering="geometricPrecision"
    image-rendering="optimizeQuality"
    fill-rule="evenodd"
    clip-rule="evenodd"
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="nonzero"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.829L0 1.153h7.594l5.243 6.932zM17.61 20.644h2.039L6.486 3.24H4.298z"
    />
  </svg>
);

type SidebarProps = {
    onTabSelect: (index: number) => void; // Callback function to handle tab selection
  };
  
  const Sidebar = ({ onTabSelect }: SidebarProps) => {
    const [activeTab, setActiveTab] = useState(1);
  
    const handleTabClick = (index: number) => {
      setActiveTab(index);
      onTabSelect(index); // Call the callback function when a tab is clicked
    };
  const classCustom =
    " cursor-pointer flex p-3 border border-opacity-0 hover:border-opacity-100 border-white hover:bg-white transition-all hover:bg-opacity-50 rounded-2xl text-black";

  return (
    <div className="sidebar w-full max-w-72">
      <ul className="tab-list flex flex-col gap-1 w-full">
        <TabItem
          className={`${classCustom} ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          <span className="p-1 mr-2 opacity-50">{PlusIcon}</span>
          <span className=" flex items-center opacity-50">New Flow</span>
        </TabItem>
        <TabItem
          className={`${classCustom} ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          <span className="p-1 mr-2">{MainIcon}</span>
          <span className="flex items-center">Coffee?</span>{" "}
          <span className=" flex items-center opacity-50">⋅ Marisa Lu</span>
        </TabItem>
        <TabItem
          className={`${classCustom} ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          <span className="p-1 mr-2">{MainIcon}</span>
          <span className="flex items-center">Feedback</span>{" "}
          <span className=" flex items-center opacity-50">⋅ Lindsey Weiss</span>
        </TabItem>
        <TabItem
          className={`${classCustom} ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          <span className="p-1 mr-2">{MainIcon}</span>
          <span className="flex items-center">Post-grad plans</span>{" "}
          <span className=" flex items-center opacity-50">⋅ Evelyn Ma</span>
        </TabItem>
        <TabItem
          className={`${classCustom} ${activeTab === 4 ? "active" : ""}`}
          onClick={() => handleTabClick(4)}
        >
          <span className="p-1 mr-2">{MessengerIcon}</span>
          <span className="flex items-center">Victoria Wang</span>
        </TabItem>
        <TabItem
          className={`${classCustom} ${activeTab === 5 ? "active" : ""}`}
          onClick={() => handleTabClick(5)}
        >
          <span className="p-1 mr-2">{MessengerIcon}</span>
          <span className="flex items-center">Advait Kalakkad</span>
        </TabItem>
        <TabItem
          className={`${classCustom} ${activeTab === 6 ? "active" : ""}`}
          onClick={() => handleTabClick(6)}
        >
          <span className="p-1 mr-2">{XIcon}</span>
          <span className="flex items-center">Danny Trinh</span>
        </TabItem>
      </ul>
      <div className="tab-content">
        {activeTab === 0 && <p>Content for Tab 1</p>}
        {activeTab === 1 && <p>Content for Tab 2</p>}
        {activeTab === 2 && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
};

export default Sidebar;

const TabItem = styled.li`
  &.active {
    background-color: #ffffff59;
    border: 1px solid #fff;

  }`