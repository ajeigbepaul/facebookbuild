import { Avatar } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NearMeIcon from "@mui/icons-material/NearMe";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreOutlined from "@mui/icons-material/ExpandMoreOutlined";
//new Date(parseInt(timestamp)).toLocaleString()

import React from "react";
import "./Post.css";
const PF = "http://localhost:8001/images/";
const Post = ({ profilepics, message, timestamp, username, imageurl }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilepics} className="post__avatar" />
        <div className="post__info">
          <h3>{username}</h3>
          <p>{timestamp}</p>
        </div>
      </div>

      <div className="post__message">
        <p>{message}</p>
        <div className="post__messageimg">
          <img
            src={PF + imageurl}
            alt="postedimage"
            className="post__messageimage"
          />
        </div>
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div>
      </div>
    </div>
  );
};

export default Post;
