import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChatIcon from "@mui/icons-material/Chat";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import StorefrontIcon from "@mui/icons-material/Storefront";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { useStateValue } from "../StateProvider";

const Sidebar = () => {
  const [{ user }] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoavatar} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="Covid 19 information center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messanger" />
      <SidebarRow Icon={StorefrontIcon} title="MarketPlace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Video" />
      <SidebarRow Icon={ExpandMoreIcon} title="More" />
    </div>
  );
};

export default Sidebar;
