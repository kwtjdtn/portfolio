import React from 'react';
import './Project.css';
import timetable from "../img/timetable.png";
import concat from "../img/concat.png";
import capstone from "../img/capstone.png";
import IKIK from "../img/IKIK.png";

const Project = () => {
  return (
    <div className = "project-container">
      <div className="project-main-text"> Project </div>
      <div className="project-border "></div>
      <div className = "project-li">
          <div className = "project-con">
              <a href = "https://github.com/kwtjdtn/Team1"><img src = {timetable} alt ='timetable' className="project-img"/></a>
              <div className = "project-text">공강시간 찾기 Project (HTML)</div>
              <div></div>
          </div>
          <div className = "project-space" />
          <div className = "project-con">
              <a href = "https://github.com/kwtjdtn/concat"><img src = {concat} alt='concat' className = "project-img"/></a>
              <div className = "project-text">Concat Web Publishing (React.js)</div>
          </div>
          <div className = "project-space" />
          <div className = "project-con">
              <a href = "https://github.com/kookmin-sw/capstone-2020-4"><img src = {capstone} alt='capstone' className= "project-img"/></a>
              <div className = "project-text">Capstone project (React.js) </div>
          </div>
          <div className = "project-space" />
          <div className = "project-con">
              <a href = "#"><img src={IKIK} alt ='IKIK' className = "project-img"/></a>
              <div className = "project-text">IKIK project (R/N 진행중)</div>
          </div>
      </div>
    </div>
  );
};

export default Project;
