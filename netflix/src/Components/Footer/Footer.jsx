import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <>
      <div className="outerFooterConatainr">
        <div className="innerFooterConatainer">
          <ul className="iconsContainer">
            <li>
              <FacebookIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <YouTubeIcon />
            </li>
          </ul>
          <div className="footerData">
            <ul>
              <li>Audio Descrition</li>
              <li>Investor Relation</li>
              <li> Lega Notice</li>
            </ul>
            <ul>
              <li>Help Center</li>
              <li> Jobs</li>
              <li> Cookie Preference</li>
            </ul>
            <ul>
              <li>Gift Card</li>
              <li> Terms Of Use</li>
              <li> Corporate Information</li>
            </ul>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li> Contact Us</li>
            </ul>
          </div>
          <ul className="serviceCode ">
            <li className="service">service code</li>
            <li>&#169; 1997-2024 Netflix,Inc.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
