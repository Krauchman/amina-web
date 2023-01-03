import "./index.css";
import Meow from './logo_meow.svg';

import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <nav className="NavBar">

            <div className="NavBar-logo-container">
                <Link to="/" className="link">
                    <img src={Meow} alt="meow" className="NavBar-logo" />
                </Link>
            </div>

            <div className="NavBar-links">
                <div className="NavBar-link">
                    <Link to="/about" className="link">
                        About
                    </Link>
                </div>
                <div className="NavBar-link">
                    <Link to="/work" className="link">
                        Work
                    </Link>
                </div>
            </div>
        </nav>
    )
}