import React from "react";
import Avatar from "@mui/material/Avatar";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import "./post.css";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Post() {
  const user = useSelector(selectUser);

  return (
    <div className="post-container">
      <div className="post-info">
        <Avatar 
          src= {user.photo}
        />
        <h5>{user.displayName} </h5>
        <small>Timestamp</small>
      </div>

      <div className="post-body">
        <div className="post-question">
          <p>Question</p>
          {/* <button className="post-btn">Answer</button> */}
          <Button
            sx={{
              "@media screen and (min-width: 200px)": {
                ml: 15,
              },
              "@media screen and (min-width: 600px)": {
                ml: 40,
              },
              "@media screen and (min-width: 700px)": {
                ml: 60,
              },
              "@media screen and (min-width: 1156px)": {
                ml: 90,
              },
              "@media screen and (min-width: 1237px)": {
                ml: 100,
              },
            }}
            style={{
              height: "52px",
              width: "96px",
              backgroundColor: "#779ecb",
            }}
            variant="contained"
            color="success"
          >
            Add Answer
          </Button>
        </div>
        <div className="post-answer">
          <p></p>
        </div>
        <img src="" alt=" " />
      </div>

      <div className="post-footer">
        <div className="post-footer-content-left">
          <ArrowCircleUpIcon />
          <ArrowCircleDownIcon />
        </div>
        <ChatIcon sx={{ ml: 3, mt: 1 }} />
        <div className="post-footer-content-right">
          <ShareIcon />
          <MoreVertIcon />
        </div>
      </div>
    </div>
  );
}

export default Post;
