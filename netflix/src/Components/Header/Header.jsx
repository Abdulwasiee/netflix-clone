import React, { useEffect } from "react";
import $ from "jquery"; // Import jQuery
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import netflixLogo from "../../assets/image/netflixLogo.jpg";

function Header() {
  useEffect(() => {
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 0) {
        $("#outerHeadContainer").addClass("transparentBg");
      } else {
        $("#outerHeadContainer").removeClass("transparentBg");
      }
    });

    // Clean up the scroll event listener
    return () => {
      $(window).off("scroll");
    };
  }, []);

  return (
    <div className="outerHeadContainer" id="outerHeadContainer">
      <div className="innerHeadContainer">
        <ul className="leftMenu">
          <li className="headerLogo">
            <img src={netflixLogo} alt="Netflix Logo" />
          </li>
          <li>Home</li>
          <li>Tv Shows</li>
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
