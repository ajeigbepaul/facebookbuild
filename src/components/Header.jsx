import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import FlagIcon from "@mui/icons-material/Flag";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupervisedUserCircleOutlinedIcon from "@mui/icons-material/SupervisedUserCircleOutlined";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import "./Header.css";
import { Avatar, IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="facebooklogo.png" alt="logo" />
        <div className="header__search">
          <input placeholder="search" />
          <SearchIcon />
        </div>
      </div>
      <div className="header__center">
        <HomeIcon className="header__icons header__icons__active" />
        <FlagIcon className="header__icons" />
        <SubscriptionsOutlinedIcon className="header__icons" />
        <StorefrontOutlinedIcon className="header__icons" />
        <SupervisedUserCircleOutlinedIcon className="header__icons" />
      </div>
      <div className="header__right">
        <Avatar />
        <h4>Harjoke</h4>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
