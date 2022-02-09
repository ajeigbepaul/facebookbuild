import React from "react";
import { Avatar, Input } from "@mui/material";
import "./Messagesender.css";
import { useState } from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SendIcon from "@mui/icons-material/Send";
//import axios from "axios";
import axios from "../axios";
import { useStateValue } from "../StateProvider";
const MessageSender = () => {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();
  const [file, setFile] = useState(null);

  const submitMessage = async (e) => {
    e.preventDefault();
    const newPost = {
      message: input,
      profilepics: user?.photoavatar,
      timestamp: new Date().toLocaleString(),
      username: user?.displayName,
    };
    console.log(user);

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.imageurl = filename;

      try {
        await axios.post("/facebook/upload", data);
        setFile(null);
      } catch (err) {}
    }
    try {
      axios.post("/facebook/message", newPost);
      setInput("");
    } catch (error) {}
  };
  return (
    <div className="messagesender">
      <div className="messagesender__top">
        <Avatar src="harjoke.jpg" />
        <form method="post" enctype="multipart/form-data">
          <input
            type="text"
            placeholder="Watin you dey think?"
            className="messagesender__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Input
            type="file"
            // name="images"
            onChange={(e) => setFile(e.target.files[0])}
            className="messagesender__fileselected"
          />
          <button
            className="messagesender__btn"
            type="submit"
            onClick={submitMessage}
          >
            <SendIcon />
          </button>
        </form>
      </div>
      {file && (
        <div className="previmg">
          <img src={URL.createObjectURL(file)} alt="" />
        </div>
      )}
      <div className="messagesender__buttom">
        <div className="messagesender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messagesender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messagesender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
