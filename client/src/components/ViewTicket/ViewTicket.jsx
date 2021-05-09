import React from "react";
import { useLocation } from "react-router-dom";
import "./ViewTicket.css";

const ViewTicket = ({ location }) => {
  const {
    description,
    created_at,
    status,
    subject,
    requester_id,
  } = location?.state;
  console.log(location);
  return (
    <div className="view-ticket-page">
      <div className="main-view-page">
        <div className="view-ticket-page-container">
          <div className="title-section green">
            <div className="tickets-title">{subject}</div>
            <div className="tickets-date">
              {new Intl.DateTimeFormat("en-GB").format(new Date(created_at))}
            </div>
          </div>
          <div className="desc">{description}</div>
        </div>
        <div className="right-bar">
          <div className="right-bar-items">
            <div>Requested by</div>
            <div> {requester_id}</div>
          </div>
          <div className="right-bar-items">
            <div>Status</div>
            <div> {status}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTicket;
