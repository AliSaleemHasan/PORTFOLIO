import React, { useEffect } from "react";

import "./Project.css";
function Project({ image, desc, name, fun1, fun2, fun3, link }) {
  return (
    <div className="project">
      <div className="project__card">
        <div className="project__cardLeft">
          <h1 className="project__name">{name}</h1>
          <p className="project__desc">{desc}</p>
          <div className="project__func">
            <h3>functionality</h3>
            <ul>
              <li>{fun1}</li>
              <li>{fun2}</li>
              <li>{fun3}</li>
            </ul>
          </div>
          <a className="project__link" href={link} target="_blank">
            Try {name}
          </a>
        </div>

        <div className="project__cardRight">
          <img className="project__image" src={image} alt="project logo" />
        </div>
      </div>
    </div>
  );
}

export default Project;
