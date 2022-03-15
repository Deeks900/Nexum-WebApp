// All the things are responsive here
import React from "react";
import Avatar from "@mui/material/Avatar";
import "./feed.css";

function Feed() {
  return (
    <div className="feed-container">
      <div className="feedUser-info">
        <Avatar />
        <h5>Username</h5>
      </div>

      <div className="feed-ques">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}

export default Feed;
