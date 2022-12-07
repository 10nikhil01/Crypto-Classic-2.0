import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import { RWebShare } from "react-web-share";

function Footer() {
  return (
    <div className="footer">
      <a href="/">
        <h2 style={{ color: "#fff" }}>CryptoTracker.</h2>
      </a>

      <div className="socials-flex">
        <a href="/">
          <FacebookIcon className="socials-icon" />
        </a>
        <a href="/">
          <InstagramIcon className="socials-icon" />
        </a>
        <a href="mailto:nikhilcreationshere@gmail.com">
          <EmailIcon className="socials-icon" />
        </a>
        <RWebShare
          data={{
            text: "Crypto Classic 2.0 made by NIKHIL using React JS",
            url: "https://crypto-classic-2.netlify.app/",
            title: "Crypto Classic 2.0",
          }}
          onClick={() => {
                           if(window.matchMedia("(min-width: 400px)").matches)
                                {return console.log("Thankyou for sharing our application!")}
                           else {return alert("Thankyou for sharing our application!")}}}
        >
          <SendIcon className="socials-icon" />
        </RWebShare>
      </div>
    </div>
  );
}

export default Footer;
