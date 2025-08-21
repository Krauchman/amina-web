import { Intro } from "./Intro";
import { Projects } from "./Projects";

import { Helmet } from "react-helmet";

export function Home() {
    return (
        <div>
            <Helmet>
                <title>Amina Alen portfolio</title>
            </Helmet>

            <div className="v2-page">
                <div className="v2-page-grid home">
                    <div className="v2-block intro">
                        <div className="v2-navbar">navbar</div>
                        <div className="hello">hello</div>
                    </div>
                    <div className="v2-block project1">1</div>
                    <div className="v2-block project2">1</div>
                    <div className="v2-block project3">1</div>
                    <div className="v2-block project4">1</div>
                    <div className="v2-block hero">1</div>
                    <div className="v2-block footer">1</div>

                </div>
            </div>
        </div>
    );
}