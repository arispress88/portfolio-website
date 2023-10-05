import React from "react";
import "./works.css";
import aewrpod from "../../assets/img/aewrpod.png";
import tour from "../../assets/img/tour-of-heroes.png";
import tetris from "../../assets/img/react-tetris.png";
import worldly from "../../assets/img/worldly-travel.png";

const Works = () => {
    return (
        <section id="works">
            <h2 className="projectsTitle">My Portfolio</h2>
            <span className="projectDescription">Here are some of my projects using different programming languages.</span>
            <div className="projectImgs">
                <img src={worldly} alt="" className="projectImg" />
                <img src={aewrpod}alt="" className="projectImg" />
                <img src={tetris} alt="" className="projectImg" />
                <img src={tour} alt="" className="projectImg" />
            </div>
            <button className="projectBtn">See More</button>
        </section>
    );
}

export default Works;