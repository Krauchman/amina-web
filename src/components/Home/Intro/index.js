import "./index.css";

import hand_left from "./hand_left.png";
import hand_right from "./hand_right.png"

import hand_left_low from "./hand_left_low.webp";
import hand_right_low from "./hand_right_low.webp"

import { LazyImage } from "../../Image";

export function Intro() {
    return (
        <div className="Intro-container">

            <div className="Intro-back-container">
                <LazyImage src={hand_left} alt="Left hand" className="Hand Hand-Left" placeholder={hand_left_low} />
                <LazyImage src={hand_right} alt="Right hand" className="Hand Hand-Right" placeholder={hand_right_low} />
            </div>

            <div className="Intro-front-container">
                <div className="Hello">
                    Hello, I’m Amina!
                </div>
                <div className="UX-Designer">
                    <span className="Blue">UX designer</span> crafting products that <br />
                    connect <span className="Blue">people</span> together with <br />
                    emerging <span className="Blue">technologies</span>
                </div>
                <div className="Why">
                    The "why" and "how" of UX design is where I thrive.
                    <br />
                    Let's make amazing products with flexibility, speed, and quality!
                </div>
            </div>

        </div>
    );
}