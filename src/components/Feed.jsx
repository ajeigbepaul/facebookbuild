import React, { useEffect, useState } from "react";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import "./Feed.css";
import axios from "../axios";
import Pusher from "pusher-js";

const pusher = new Pusher("3f051a7ceb2f7560b481", {
  cluster: "eu",
});

const Feed = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/facebook/message");
      setPost(req.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const channel = pusher.subscribe("messages");
    channel.bind("newMessage", function (data) {
      // sync();
      async function fetchData() {
        const req = await axios.get("/facebook/message");
        setPost(req.data);
      }
      fetchData();
    });
  }, [post]);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {post.map(
        ({ message, imageurl, timestamp, username, profilepics, _id }) => (
          <Post
            key={_id}
            profilepics={profilepics}
            imageurl={imageurl}
            username={username}
            timestamp={timestamp}
            message={message}
          />
        )
      )}
      {
        /* {post.map(({ message, imageurl }) => (
        <Post
          key={user.uid}
          profilePic={user.photoavatar}
          imgUrl={imageurl}
          username={user.userName}
          timestamp={timestamp}
          message={message}
        />
      ))} */
        // console.log(post)
      }

      {/* <h2>hello</h2> */}
    </div>
  );
};

export default Feed;
