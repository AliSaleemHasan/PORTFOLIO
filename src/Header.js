import React, { useState } from "react";
import "./Header.css";
import LogoLight from "./images/LogoLight.png";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Facebook from "@material-ui/icons/Facebook";

function Header({ ref1, ref2, ref3, ref4 }) {
  const [toggle, setToggle] = useState(false);
  const toggleNav = (e) => {
    e.preventDefault();
    setToggle((state) => !state);
    console.log(toggle);
  };

  const goToHome = () => {
    ref1.current.scrollIntoView({
      behavior: "smooth",
    });
    setToggle(false);
  };

  const goToAbout = () => {
    ref2.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    setToggle(false);
  };

  const goToWork = () => {
    ref3.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    setToggle(false);
  };

  const goToContact = () => {
    ref4.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
    setToggle(false);
  };

  return (
    <div className="header">
      <div className="header__left">
        <img className="header__logo" src={LogoLight} alt="logo" />
      </div>

      <div className={`header__right ${toggle && "header__rightActive"}`}>
        <ul>
          <li onClick={goToHome}>Home</li>
          <li onClick={goToAbout}>About</li>
          <li onClick={goToWork}>Works</li>
          <li onClick={goToContact}>Contact</li>
        </ul>
        <div className="header__rightReferences">
          <a href="https://www.facebook.com/ali.s.hasan.792/" target="_blank">
            <Facebook className="icon" />
          </a>
          <a>
            <LinkedIn className="icon" />
          </a>
          <a href="https://github.com/AliSHasan" target="_blank">
            <GitHub className="icon" />
          </a>
        </div>
      </div>
      <div onClick={toggleNav} className="header__humburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default Header;
