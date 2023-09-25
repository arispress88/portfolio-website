import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import suitcase from "../../assets/icons/icons8-suitcase-64.png";
import bg from "../../assets/img/DSC_0201.png";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Arnold Rispress</span> <br />Full Stack Software Developer</span>
                <p className="introPara"> I am a skilled coding boot camp graduate looking to create <br /> visually appealing and user friendly websites.</p>
                <Link><button className="btn"><img src={suitcase} alt="" className="btnImg" />Hire Me</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;