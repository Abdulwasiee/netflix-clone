import React, { useEffect } from "react";
import $ from "jquery";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import netflixLogo from "../../assets/image/netflixLogo.jpg";

function Header() {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        $(".leftMenu").hide();
        $(".rightMenu").hide();
        $(".menu-toggle").show();
      } else {
        $(".leftMenu").show();
        $(".rightMenu").show();
        $(".menu-toggle").hide();
        $(".dropdown-menu").removeClass("show"); 
      }
    };

    // Handle scroll event for transparent background
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 0) {
        $("#outerHeadContainer").addClass("transparentBg");
      } else {
        $("#outerHeadContainer").removeClass("transparentBg");
      }
    });

    // Handle menu toggle
    $(".menu-toggle").on("click", function () {
      $(".dropdown-menu").toggleClass("show");
    });

    // Handle window resize
    $(window).on("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      // Cleanup event listeners on component unmount
      $(window).off("scroll");
      $(window).off("resize", handleResize);
      $(".menu-toggle").off("click");
    };
  }, []);

  return (
    <div className="outerHeadContainer" id="outerHeadContainer">
      <div className="innerHeadContainer">
        <div className="headerLogo">
          <img src={netflixLogo} alt="Netflix Logo" />
        </div>
        <ul className="leftMenu">
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
        <div className="menu-toggle">
          <MenuIcon />
        </div>
        <ul className="dropdown-menu">
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>MyList</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
