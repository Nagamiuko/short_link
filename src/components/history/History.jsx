import React from "react";
import "./story.css";
import moment from "moment-timezone";
const History = ({ dataitem , view}) => {
   
  return (
    <>
      <div className="box-container-list">
        <div className="box-content">
          <div className="title-list">
             <div className="title-text">Short Link History</div>
             <div className="title-view-count">Number Visitor : {view}</div>
          </div>
          <div className="border-mb"></div>
          <div className="item-history mb-2">
            <div className="time-date">Time</div>

            <div className="date-link">Original Link</div>
            <div className="date-link">Short Link</div>
          </div>
          {dataitem &&
            dataitem.map((item, keys) => (
              <div className="item-history" key={keys}>
                <div className="time-date">
                  {moment(item?.createdAt).format("YYYY / MMM / DD , h:mm A")}
                </div>

                <div className="date-link w-h"><a href={item?.original_link} target="_blank">{item?.original_link}</a></div>
                <div className="date-link"><a href={item?.short_link} target="_blank" >{item?.short_link}</a></div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default History;
