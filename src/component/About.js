import React from 'react';
import './About.css';
import auth from '../img/about.png';
const About = () => {
  return (
    <div className="about-container">
      <div className="about-main-text"> About Me </div>
      <div className="text-border"></div>
      <div className="about-text">
        <img src={auth} className="auth-img" />
        <div className="auth-text">
          <div className="about-text2">2015년 국민대학교 컴퓨터공학과 입학</div>
          <div className="about-text2">2019.12 ~ 2020.02 Concat 인턴 </div>
          <div className="about-sub-text"> 디자인 도안에 따라 웹 페이지 퍼블리싱 작업 수행 (React.js 사용) </div>
          <div className="about-text3"> Cell Phone : 010-9276-3641</div>
          <div className="about-text3"> E-mail : kwtjdtn@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default About;
