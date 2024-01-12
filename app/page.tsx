"use client";
import { useState } from "react";
import Heading from "./Components/ Heading";
import Bg from "./Components/Bg/Bg";
import Button from "./Components/Button/Button";
import CalenderTimeline from "./Components/CalenderTimeline/CalenderTimeline";
import Card from "./Components/Card/Card";
import Location from "./Components/Icons/Location";
import MailIcon from "./Components/Icons/MailIcon";
import Sidebar from "./Components/Sidebar/Sidebar";
import Send from "./Components/Icons/Send";
export default function Home() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabSelect = (index: number) => {
    setActiveTab(index);
    console.log(index);
  };

  return (
    <main className="">
      <Bg />
      <div className="container w-screen p-16">
        <Heading className="">Review Inbox</Heading>
        <div className="grid grid-flow-col w-screen ">
          <Sidebar onTabSelect={handleTabSelect} />
          <div className=" col-span-4 flex flex-col w-full">
          <div className="CardContainer w-[200%] pl-16 justify-start grid grid-flow-col gap-16 ">
            <Card
              icon={<MailIcon />}
              time="Just now"
              headText="Coffee?"
              headSpan="Mail from Marisa Lu"
              children={
                <div>
                  <div className="text-3xl py-1">Marisa Lu</div>
                  <div className="text-3xl py-1  font-semibold">Coffee?</div>
                  <div className="text-lg">
                    <br />
                    Hey Jason, <br />
                    Was wondering if you'd be interested in meeting my team at
                    Philz Coffee at 11 AM today. No pressure if you can't make
                    it, although I think you guys would really get along! <br />
                    Marisa
                  </div>
                  <div className="border my-5" />
                  <div className="buttonContainer  flex items-center">
                    <Button text={"Reply"} />
                    <Button text={"Forward"} />
                    <Button text={"Delete"} />
                  </div>
                </div>
              }
            />
            <Card
              headText="See my availability: today"
              children={
                <div>
                  <div className="text-3xl py-1  font-semibold">
                    Available until 1 PM
                  </div>
                  <div className="text-lg">
                    <br />
                    <p>Would you like to create an event for</p>
                    <p>Coffee with Marisa at 11 AM?</p>
                    <br />
                    <CalenderTimeline />
                  </div>
                  <div className="border my-5" />
                  <div className="buttonContainer  flex items-center ">
                    <Button text={"Create Event"} />
                    <Button text={"Edit Event"} />
                    <Button text={"Full Calender"} />
                    <Button text={"Dismiss"} />
                  </div>
                </div>
              }
            />
            <Card
              icon={<Location className="opacity-60" />}
              headText="Philz Coffee"
              headSpan="Location"
              children={
                <div>
                  <div className="-mx-8 -mt-8">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d793.2076586898751!2d-122.03511229244192!3d37.32283932572837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5adba96bc6f%3A0x4b1fa8f6a23445e7!2sPhilz%20Coffee!5e0!3m2!1sen!2sin!4v1705040231072!5m2!1sen!2sin" width="672" height="200" loading="lazy" ></iframe>
                  </div>
                  <div className="text-3xl py-1 mt-7 pb-3 font-semibold">
                    Philz Coffee
                  </div>
                  <div className="text-xl font-medium">
                    Custom-blended java in a casual setting.
                  </div>
                  <div className="text-lg text-gray-400">
                    <br />
                    <p>20686 Stevens Creek Blvd</p>
                    <p>Cupertino, CA 95014</p>
                    <br />
                  </div>
                  <div className="border my-5" />
                  
                  <div className="buttonContainer  flex items-center ">
                    <Button icon={<Send className="opacity-60" />} text={"Get directions"} subtext="Requires your location" />
                    <Button text={"See details"} />
                    <Button text={"Find more cafés nearby"} />
                  </div>
                </div>
              }
            />
          </div></div>
        </div>
      </div>
    </main>
  );
}
function force_scroll_sideways(element: HTMLElement) {
  element.addEventListener("wheel", (event) => {
    event.preventDefault();

    let [x, y] = [event.deltaX, event.deltaY];
    let magnitude;

    if (x === 0) {
      magnitude = y > 0 ? -30 : 30;
    } else {
      magnitude = x;
    }

    //console.log({ x, y, magnitude });
    element.scrollBy({
      left: magnitude,
    });
  });
}
