import "./index.css";

import hand_left from "./hand_left.png";
import hand_right from "./hand_right.png"

import hand_left_low from "./hand_left_low.png";
import hand_right_low from "./hand_right_low.png"

import { useState, useEffect } from "react";

import { LazyImage } from "../../Image";

function useScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.pageYOffset);
        }
        window.addEventListener("scroll", updatePosition);
        updatePosition();
        return () => window.removeEventListener("scroll", updatePosition);
    }, []);

    return scrollPosition;
};

function HandSeparator() {
    const scrollPosition = useScrollPosition();

    let minWidth = 100 - (scrollPosition / 2);
    minWidth = Math.max(minWidth, 0);

    return (
        <div style={{ minWidth: minWidth }} />
    )
}

export function Intro() {
    return (
        <div className="Intro-container">

            <div className="Intro-back-container">
                <LazyImage src={hand_left} alt="Left hand" className="Hand Hand-Left" placeholder={hand_left_low} />
                <HandSeparator />
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