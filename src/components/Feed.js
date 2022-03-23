// All the things are responsive here
import React from "react";
import Avatar from "@mui/material/Avatar";
import "./feed.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";


function Feed() {
  const user = useSelector(selectUser);

  return (
    <div className="feed-container">
      <div className="feedUser-info">
        <Avatar 
          src = {user.photo}
        />
        <h5>{user.displayName}</h5>
      </div>

      <div className="feed-ques">
        <p>What is your question or link?</p>
      </div>
    </div>
  );
}

export default Feed;
