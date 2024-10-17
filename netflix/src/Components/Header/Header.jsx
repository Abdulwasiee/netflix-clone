import React, { useEffect, useState } from "react";
import $ from "jquery";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon
import netflixLogo from "../../assets/image/netflixLogo.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu toggle

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
        setIsMenuOpen(false); // Reset menu state when resizing to larger screens
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

    // Handle window resize
    $(window).on("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      // Cleanup event listeners on component unmount
      $(window).off("scroll");
      $(window).off("resize", handleResize);
    };
  }, []);

  // Toggle menu and icon
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    $(".dropdown-menu").toggleClass("show");
  };

  return (
    <div className="outerHeadContainer" id="outerHeadContainer">
      <div className="innerHeadContainer">
        <div className="headerLogo">
          <img src={netflixLogo} alt="Netflix Logo" />
        </div>
        <ul className="leftMenu">
          <li>Home</li>
          <li>Tv</li>
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
        <div className="menu-toggle" onClick={handleMenuToggle}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}{" "}
          {/* Toggle between Menu and Close icons */}
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
