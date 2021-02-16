import React from "react";
import "./About.css";
import resume from "./images/resume.pdf";
function About() {
  return (
    <div className="about">
      <div className="about__left">
        <div className="about__personalInfo">
          <div className="about__info">
            <h5>Name: </h5>
            <p>Ali Saleem Hasan</p>
          </div>
          <div className="about__info">
            <h5>Profile: </h5>
            <p>Web Developer</p>
          </div>

          <div className="about__info">
            <h5>Email: </h5>
            <p>ali1saleem1hasan@gmail.com</p>
          </div>
          <div className="about__info">
            <h5>Phone: </h5>
            <p>+963 934404992</p>
          </div>
        </div>

        <div className="about__skills">
          <h4>Skills:</h4>
          <div className="skill">
            <h5>Html &amp; Css: </h5>
            <div className="container">
              <div className="skills html">70%</div>
            </div>
          </div>
          <div className="skill">
            <h5>React: </h5>
            <div className="container">
              <div className="skills react">75%</div>
            </div>
          </div>
          <div className="skill">
            <h5>Node Js: </h5>
            <div className="container">
              <div className="skills nodejs">70%</div>
            </div>
          </div>

          <div className="skill">
            <h5>Mongo DB: </h5>
            <div className="container">
              <div className="skills mongo">60%</div>
            </div>
          </div>
          <div className="skill">
            <h5>Firebase: </h5>
            <div className="container">
              <div className="skills firebase">60%</div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__right">
        <div className="about__text">
          <h4>About</h4>
          <h4>
            Born in 1999 , Raised in suburb in Damascus , Hard Worker and
            Dreamer
          </h4>
          <p>
            I'm Ali Saleem hasan web developer from Syria , currently studying
            Information Technology at Damascus university Looking forward
            brightness future .
          </p>
          <p>
            i enjoy a good cup of coffee , watching good movies , playing
            video-games or listening to music
          </p>
          <h5>Dream more , Stay Happy</h5>
        </div>
        <div className="resume">
          <a href={resume} download>
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
