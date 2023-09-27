import React from "react";
import "./story.css";
import moment from "moment-timezone";
const History = ({ dataitem }) => {
  console.log(dataitem);
  return (
    <>
      <div className="box-container-list">
        <div className="box-content">
          <div className="title-list">Short Link History</div>
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
                  {moment(item?.createdAt).format("h:mm A")}
                </div>

                <div className="date-link"><a href={item?.full_link} target="_blank">{item?.full_link}</a></div>
                <div className="date-link"><a href={item?.short_link} target="_blank" >{item?.short_link}</a></div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default History;
