"use client";
import { useState } from "react";
import styled from 'styled-components';
import MailIcon from "../Icons/MailIcon";
import PlusIcon from "../Icons/PlusIcon";
import MessengerIcon from "../Icons/MessengerIcon";
import XIcon from "../Icons/XIcon";




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
          <span className="p-1 mr-2 opacity-50"><PlusIcon /></span>
          <span className=" flex items-center opacity-50">New Flow</span>
        </TabItem>
        <TabItem
          className={`${classCustom} ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          <span className="p-1 mr-2"><MailIcon /></span>
          <span className="flex items-center">Coffee?</span>{" "}
          <span className=" flex items-center opacity-50">⋅ Marisa Lu</span>
        </TabItem>
        <TabItem
          className={`${classCustom} ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          <span className="p-1 mr-2"><MailIcon /></span>
          <span className="flex items-center">Feedback</span>{" "}
          <span className=" flex items-center opacity-50">⋅ Lindsey Weiss</span>
        </TabItem>
        <TabItem
          className={`${classCustom} ${activeTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          <span className="p-1 mr-2"><MailIcon /></span>
          <span className="flex items-center">Post-grad plans</span>{" "}
          <span className=" flex items-center opacity-50">⋅ Evelyn Ma</span>
        </TabItem>
        <TabItem
          className={`${classCustom} ${activeTab === 4 ? "active" : ""}`}
          onClick={() => handleTabClick(4)}
        >
          <span className="p-1 mr-2"><MessengerIcon /></span>
          <span className="flex items-center">Victoria Wang</span>
        </TabItem>
        <TabItem
          className={`${classCustom} ${activeTab === 5 ? "active" : ""}`}
          onClick={() => handleTabClick(5)}
        >
          <span className="p-1 mr-2"><MessengerIcon /></span>
          <span className="flex items-center">Advait Kalakkad</span>
        </TabItem>
        <TabItem
          className={`${classCustom} ${activeTab === 6 ? "active" : ""}`}
          onClick={() => handleTabClick(6)}
        >
          <span className="p-1 mr-2"><XIcon /></span>
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