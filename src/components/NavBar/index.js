import "./index.css";
import Meow from './logo_meow.svg';

import { Link } from "react-router-dom";

const navbar_links = [
    { to: '/about', name: "About" },
    { to: '/', name: "Work" },
]

function NavBarLink(props) {
    return (
        <div className="NavBar-link">
            <Link to={props.to} className="link">
                {props.name}
            </Link>
        </div>
    )
}

export function NavBar() {
    return (
        <nav className="NavBar">

            <div className="NavBar-logo-container">
                <Link to="/" className="link">
                    <img src={Meow} alt="meow" className="NavBar-logo" />
                </Link>
            </div>

            <div className="NavBar-links">
                {navbar_links.map((link) => (
                    <NavBarLink key={link.name} to={link.to} name={link.name} />
                ))}
            </div>
        </nav>
    )
}