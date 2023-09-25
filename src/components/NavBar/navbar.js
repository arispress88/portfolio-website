import React from "react";
import "./navbar.css";
import android from "../../assets/icons/android-chrome-192x192.png";
import phone from "../../assets/icons/icons8-phone-50.png"
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={android} alt="android" className="logo" />
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={phone} alt="" className="desktopMenuImg" />Contact Me
            </button>
        </nav>
    )
}

export default Navbar;