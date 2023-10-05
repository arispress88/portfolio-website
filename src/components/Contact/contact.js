import React from "react";
import "./contact.css";
import github from "../../assets/icons/icons8-github.gif";
import linkedin from "../../assets/icons/icons8-linkedin-circled.gif";

const Contact = () => {
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientsDesc">Coming soon...</p>
                <div className="clientImgs">
                    <img src="https://via.placeholder.com/150" alt="client" className="clientImg" />
                    <img src="https://via.placeholder.com/150" alt="client" className="clientImg" />
                    <img src="https://via.placeholder.com/150" alt="client" className="clientImg" />
                    <img src="https://via.placeholder.com/150" alt="client" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">I'm currently available for freelance work or job opportunities. Please fill out the form below</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea className="msg" name="message" rows="5" placeholder="Your message" />
                    <button className="submitBtn" type="submit" value="Send">Submit</button>
                    <div className="links">
                        <img src={linkedin} alt="LinkedIn" className="link" />
                        <img src={github} alt="Github" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;