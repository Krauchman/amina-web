import "./Project.css";
import placeholder from './placeholder.png';
import Cat from './cat.svg';

import { Link } from "react-router-dom";

export function Project(props) {
    const name = props.name
    const description = props.description

    return (
        <div className="Project-container">
            <div className="Project">
                <div className="Project-text-container">
                    <div className="Project-name">
                        {name}
                    </div>
                    <div className="Project-description">
                        {description}
                    </div>
                </div>
                <div className="Project-image-container">
                    <img className="Project-image" alt={name} src={placeholder} />
                </div>
                <Link to={props.link_to} className="Project-link link no-hover-underline">
                    View Full Project
                </Link>

                {/* ON HOVER */}
                <div className="Hover">
                    <div className="Hover-name">
                        {name}
                    </div>
                    <Link to={props.link_to} className="Hover-link link no-hover-underline">
                        View Full Project
                    </Link>
                    <img src={Cat} className="Hover-cat" alt="meow" />
                </div>

            </div>
        </div>
    );
}