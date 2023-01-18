import "./index.css";
import EmailIcon from './email.svg';
import LinkedInIcon from './linkedin.svg';
import FooterLogo from './Footer_logo.svg';

import { Link } from "react-router-dom";

export function Footer() {
    return (
        <div className="Footer-container">

            <div className="Contacts-container">
                <div className="Contact-me">Contact me!</div>
                <div className="Contact-icons">
                    <a target="_blank" rel="noopener noreferrer" href="mailto:alenamina1010@gmail.com">
                        <img src={EmailIcon} alt="alenamina1010@gmail.com" className="Contact-icon" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aminaalen/">
                        <img src={LinkedInIcon} alt="My LinkedIn: aminaalen" className="Contact-icon" />
                    </a>
                </div>
            </div>

            <div className="Footer-logo-container">
                <Link to="/">
                    <img src={FooterLogo} alt="meow" className="Footer-logo" />
                </Link>
            </div>

            <div className="Footer-links">
                <Link to="/about" className="link">About</Link>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://amina-alen.com/resume"
                    className="link"
                >
                    Resume
                </a>
            </div>

        </div >
    );
}