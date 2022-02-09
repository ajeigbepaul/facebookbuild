import React from "react";
import "./Widget.css";

const Widget = () => {
  return (
    <div className="widget">
      {/* <iframe
        src="https://web.facebook.com/CleverProgrammerr"
        width="340px"
        height="1500px"
        style={{ border: "none", overflow: "none" }}
        border="0"
        scrolling="no"
        allowTransparency="true"
        allow="encrypted-media"
      /> */}
      <iframe
        title="facebook"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fweb.facebook.com%2FCleverProgrammerr&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340px"
        height="1500px"
        style={{ border: "none", overflow: "none" }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Widget;
