import React from "react";
import './skills.css';
import bootstrap from '../../assets/icons/icons8-bootstrap.svg';
import css from '../../assets/icons/icons8-css3.svg';
import html from '../../assets/icons/icons8-html-5.svg';
import react from '../../assets/icons/icons8-react-native.svg';
import js from '../../assets/icons/icons8-javascript.svg';
import git from '../../assets/icons/icons8-git.svg';
import csharp from '../../assets/icons/icons8-c.svg';
import angular from '../../assets/icons/icons8-angular.svg'

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">Skills</span>
            <span className="skillSubtitle">During my time in a coding boot camp, I learned how to code different apps using the following programming languages: </span>
            <div className="skillsContainer">
                <div className="skill">
                    <img src={html} alt="html" />
                    <span className="skillName">HTML</span>
                </div>
                <div className="skill">
                    <img src={css} alt="css" className="skillImg" />
                    <span className="skillName">CSS</span>
                </div>
                <div className="skill">
                    <img src={bootstrap} alt="bootstrap" className="skillImg" />
                    <span className="skillName">Bootstrap</span>
                </div>
                <div className="skill">
                    <img src={js} alt="js" className="skillImg" />
                    <span className="skillName">Javascript</span>
                </div>
                <div className="skill">
                    <img src={react} alt="react" className="skillImg" />
                    <span className="skillName">React</span>
                </div>
                <div className="skill">
                    <img src={git} alt="git" className="skillImg" />
                    <span className="skillName">Git</span>
                </div>
                <div className="skill">
                    <img src={csharp} alt="csharp" className="skillImg" />
                    <span className="skillName">C#</span>
                </div>
                <div className="skill">
                    <img src={angular} alt="angular" className="skillImg" />
                    <span className="skillName">Angular (Currently learning) </span>
                </div>
            </div>
        </section>
    );
}

export default Skills;