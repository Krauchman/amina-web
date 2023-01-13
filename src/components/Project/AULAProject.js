import "./index.css";
import "./AULAProject.css";
import { Helmet } from "react-helmet";

import aula_banner1 from "./media/aula/banner1.png";
import aula_banner2 from "./media/aula/banner2.png";
import aula_banner3 from "./media/aula/banner3.png";
import aula_banner4 from "./media/aula/banner4.png";

import solution1 from "./media/aula/solution1.png"
import solution2 from "./media/aula/solution2.png"
import solution3 from "./media/aula/solution3.png"

export function AULAProject() {
    return (
        <div className="ProjectPage AULAProject">

            <Helmet>
                <title>AULA</title>
            </Helmet>

            <div className="Banner">
                <img src={aula_banner1} alt="AULA" className="shift-down" />
                <img src={aula_banner2} alt="AULA" className="shift-up" />
                <img src={aula_banner3} alt="AULA" className="shift-down" />
                <img src={aula_banner4} alt="AULA" className="shift-up" />
            </div >

            <div className="Content">

                <div className="Section">
                    <div className="Header">
                        <div className="Title">AULA.KZ</div>

                        <div className="Timeline">Timeline</div>
                        <div className="Timeline-content">September 2021 - Present</div>

                        <div className="Responsabilities">Responsabilities</div>
                        <div className="Responsabilities-content">Research, UX/UI Design, Prototyping</div>

                        <div className="Tools">Tools Used</div>
                        <div className="Tools-content">Figma, Photoshop</div>
                    </div>
                </div>

                <div className="Section">
                    <h1>CONTEXT</h1>

                    <h2>Creation of digital ecosystem around house </h2>

                    <p>Modern residential buildings locate on average {'>'}2000 families which makes it challenging and almost impossible to control all service-communal processes. AULA KZ provides solution to this problem through a centralized CRM system which connects residents with each other and with property management companies for effective and fast communication on various questions.</p>
                </div>

                <div className="Section">
                    <h1>PROBLEM STATEMENT</h1>

                    <div
                        className="Special-h2"
                        style={{ color: "#3BA276" }}
                    >
                        <div className="background-text">?</div>
                        <h2>How might we improve UX for better user onboarding and higher retention? </h2>
                    </div>

                    <p>I was given two main goals for redesign of the app: (1) to make faster onboarding for new users who are massively downloading our app and (2) to increase the retention of existing and new users. Previous app was used only for 1-2 features once or twice a week. I hypothesized it was caused by poor onboarding and the lack of additional features that would require everyday use.</p>
                </div>

                <div className="Section">
                    <h1>SOLUTION</h1>

                    <img src={solution1} alt="Main page instead of news feed" loading="lazy" />

                    <img src={solution2} alt="QR scan to open door" loading="lazy" />

                    <img src={solution3} alt="Bottom navigation" loading="lazy" />
                </div>

            </div>
        </div >
    );
}