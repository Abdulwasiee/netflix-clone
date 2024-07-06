import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import netflixLogo from "../../assets/image/netflixLogo.jpg"
function Header() {
  return (
    <div className="outerHeadContainer">
      <div className="innerHeadContainer">
        <ul className="leftMenu">
          <li className="headerLogo">
            <img src={netflixLogo} alt="" />
          </li>
          <li>Home</li>
          <li>TvShows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>MyList</li>
        </ul>
        <ul className="rightMenu">
          <li>
            <SearchIcon />
          </li>
          <li>
            <NotificationsNoneIcon />
          </li>
          <li>
            <AccountBoxIcon />
          </li>
          <li>
            <ArrowDropDownIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
