import React, { useRef } from "react";
import About from "./About";
import Contact from "./Contact";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Project from "./Project";
function App() {
  const HomeReference = useRef(null);
  const AboutReference = useRef(null);
  const WorkReference = useRef(null);
  const contactReference = useRef(null);

  return (
    <div className="app">
      <div className="app__header">
        <Header
          ref1={HomeReference}
          ref2={AboutReference}
          ref3={WorkReference}
          ref4={contactReference}
        />
      </div>

      <div ref={HomeReference} className="app__home">
        <Home />
      </div>

      <div ref={AboutReference} className="app__about">
        <About />
      </div>
      <div ref={WorkReference} className="app__projects">
        <h2>
          Please make sure to open VPN when you deals with Telegram or Todo
          clone
        </h2>

        <Project
          image="https://www.freelogodesign.org/file/app/client/thumb/1d626996-4ec0-44ef-8356-1164949aa1e6_200x200.png?1610740223773"
          name="MERN TODO Clone"
          desc="MERN stack Todo clone made with REACT JS ,mongodb and node js"
          fun1="Add Task"
          fun2="Remove, Check and Edit Tasks"
          fun3="Search for Task"
          link="https://todo-mern-app-s.herokuapp.com/"
        />

        <Project
          image="https://www.freelogodesign.org/file/app/client/thumb/61e4742d-feb3-4b1d-b14f-5cc42b86df7c_200x200.png?1604653094462"
          name="Telegram Clone"
          desc="Telegram clone made with REACT JS and firebase firestore  "
          fun1="Make group"
          fun2="Delete group"
          fun3="Send messages to the group"
          link="https://aligram-1aade.web.app"
        />
        <Project
          image="https://www.freelogodesign.org/file/app/client/thumb/241cdc6d-3083-49a0-9d1c-d1f76ef831f2_200x200.png?1611342619578"
          name="Youtube Clone"
          desc="Youtube clone made with REACT JS and youtube api version 3 "
          fun1="Load real videos from Youtube api"
          fun2="play videos like youtube"
          fun3="search for topic on youtube"
          link="https://clone-4cc70.web.app/"
        />
        <Project
          image="https://www.freelogodesign.org/file/app/client/thumb/efe347c5-3aaa-4bb5-bd80-20b98250f1e3_200x200.png?1604920586213"
          name="Todo Clone"
          desc="Todo clone made with REACT JS and firebase firestore "
          fun1="Add new task"
          fun2="Delete tasks "
          fun3="Edit tasks"
          link="https://todoapp-9fc03.web.app/"
        />
        <Project
          image="https://www.freelogodesign.org/file/app/client/thumb/dc55c75e-3d3b-4ace-82a4-dc5f93b18fe8_200x200.png?1605456470468"
          name="Netflix Clone"
          desc="Netflix clone made with REACT JS and dbmovies api "
          fun1="load real movies from dbmovies"
          fun2="small animation effect on movies card "
          fun3="coming soon.."
          link="https://netflix-clone-6928a.web.app"
        />
      </div>

      <div ref={contactReference} className="app__contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
