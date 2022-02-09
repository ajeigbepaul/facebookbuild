import React from "react";
import { Avatar } from "@mui/material";
import "./SidebarRow.css";
function SidebarRow({ src, title, Icon }) {
  return (
    <div className="sidebarrow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  );
}

export default SidebarRow;
