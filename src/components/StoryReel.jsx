import React from "react";
import Story from "./Story";
import "./Storyreel.css";

const StoryReel = () => {
  return (
    <div className="storyreel">
      <Story img="richard.jpg" profileSrc="richard.jpg" title="Richy" />
      <Story img="kemi.jpg" profileSrc="kemi.jpg" title="OLUWAKEMISOLA" />
      <Story img="iyanu.jpg" profileSrc="iyanu.jpg" title="Iyanu Jesus Girl" />
      <Story img="harjoke.jpg" profileSrc="iyanu.jpg" title="Harjoke" />
      <Story img="paul.jpg" profileSrc="paul.jpg" title="paulo" />
    </div>
  );
};

export default StoryReel;
