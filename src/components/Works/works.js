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
            <div className="projectContainer">
                <div className="project">
                    <img src={worldly} alt="" className="projectImg" />
                    <span className="projectName">Worldly Traveler</span>
                    <p className="projectDesc">This was my front-end capstone project during my time with the NewForce coding boot camp by Generation WV. A travel app that allows users to post where they're traveling, post pictures from their travels, and complete randomly generated tasks in order to "level up".</p>
                </div>
                <div className="project">
                    <img src={aewrpod}alt="" className="projectImg" />
                    <span className="projectName">Attitude Era Wrestling Review Podcast</span>
                    <p className="projectDesc">This was my full stack project for NewForce by Generation WV. This is a podcast I started with my friend where we review old wrestling shows from the Attitude Era. In this app users are able to post in a forum like area, view clips from the podcast, comment on those clips, view our latest tweets, as well as find links to our latest episodes on Spotify.</p>
                </div>
                <div className="project">
                    <img src={tetris} alt="" className="projectImg" />
                    <span className="projectName">React Tetris</span>
                    <p className="projectDesc">This is a Tetris game I created using React. It was a fun project to work on and I learned a lot about React Hooks.</p>
                </div>
                <div className="project">
                    <img src={tour} alt="" className="projectImg" />
                    <span className="projectName">Tour of Heroes</span>
                    <p className="projectDesc">This was my first project using Angular. It's a simple app that allows users to add heroes to a list and view their details.</p>
                </div>
            </div>
            <button className="projectBtn">See More</button>
        </section>
    );
}

export default Works;