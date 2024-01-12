import React from "react";
import "./CalenderTimeline.css";
interface CalendarTimelineProps {}

const CalendarTimeline: React.FC<CalendarTimelineProps> = (props) => {
  return (
    <div className="schedule-container overflow-hidden">
      <div className=" appointment p-6">
        <div className="time current top-time">9:41 AM</div>
        <div className="details">
</div>
      </div>
      <div className="appointment pb-4 ">
        <div className="time top-time">11 AM</div>
        <div className="details border-l-2 border-blue-600 bg-[#B6C6EE]">
          <div className="title pr-2">Coffee with Marisa</div>
          <div className="location">Philz Coffee</div>
        </div>
        <div className="time bottom-time">1 PM</div>
      </div>
      <div className="appointment pb-4">
        <div className="details bg-[#DADADA]">
          <div className="title pr-2">Meeting with Danny Trinh</div>
          <div className="location">Mars Landing</div>
        </div>
        <div className="time bottom-time">3 PM</div>
      </div>
    </div>
  );
};

export default CalendarTimeline;
