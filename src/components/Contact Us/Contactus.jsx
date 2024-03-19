import React from "react";
import contactUsImage from "../../assets/Group 402.svg";
import insta from "../../assets/insta.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import mail from "../../assets/Mail.svg";
import discord from "../../assets/discord.svg";

function Contact() {
  return (
    <div className="contact-container">
      <img src={contactUsImage} alt="Contact Us" className="contact-image" />
      <a
        href="Instagram - https://www.instagram.com/sus_hacks_viit?igsh=OHY1cTI0dzNtNjYz"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={insta} alt="insta" id="insta" />
      </a>
      <a
        href="https://www.linkedin.com/in/sus-hacks-viit-4310542bb/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="linkedin" id="linkedin" />
      </a>
      <a
        href="https://twitter.com/sushacks"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} alt="twitter" id="twitter" />
      </a>
      <a
        href="sushacks.viit@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={mail} alt="mail" id="mail" />
      </a>

      <a
        href="https://discord.gg/sQeNpDWQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={discord} alt="discord" id="discord" />
      </a>
    </div>
  );
}

export default Contact;
