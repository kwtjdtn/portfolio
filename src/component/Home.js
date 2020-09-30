import React from 'react';
import './Home.css';
import home_img from '../img/home-img.png';

const Home = () => {
    return (
        <div className = "home-container" id="Home">
            <img src={home_img} alt = ''/>
            <div className = "home-img-text">Front-end 개발자를 꿈꾸는, </div>
            <div className = "home-img-text2">김성수입니다</div>
        </div>
    )
}

export default Home;