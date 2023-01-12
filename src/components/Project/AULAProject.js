import "./index.css";
import { Helmet } from "react-helmet";

import aula_banner from "./media/aula/banner.png";

import solution1 from "./media/aula/solution1.png"
import solution2 from "./media/aula/solution2.png"
import solution3 from "./media/aula/solution3.png"

export function AULAProject() {
    return (
        <div className="ProjectPage">

            <Helmet>
                <title>AULA</title>
            </Helmet>

            <div className="Banner">
                <img src={aula_banner} alt="AULA" />
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

                    <h2>Digitalizing bureaucratic processes for property management companies through a centralized CRM system</h2>

                    <p>Processing and storing large amount of data on occupants, interaction between them and property management companies requires powerful software to effectively perform these tasks. And the same can be said about the user experience of such CRM system. My mission was to reconstruct existing user scenarios to align them to real user needs</p>
                </div>

                <div className="Section">
                    <h1>PROBLEM STATEMENT</h1>

                    <div
                        className="Special-h2"
                        style={{ color: "#3BA276" }}
                    >
                        <div className="background-text">?</div>
                        <h2>How might we improve existing UX & UI to create a more unified digital ecosystem around house?</h2>
                    </div>

                    <p>AULA has 2 products: AULA.KZ for occupants and AULA PRO for property managers. Both of them had unique and usable functionality but they didn’t take into account which of their features are mostly and barely used by the customers. Also, they didn’t consider which information on the particular page had more importance that another. These issues </p>
                </div>

                <div className="Section">
                    <h1>SOLUTION</h1>

                    <img src={solution1} alt="Tracking service requests" />

                    <img src={solution2} alt="Database on occupants at a glance" />

                    <img src={solution3} alt="Track and manage service requests" />
                </div>

            </div>
        </div >
    );
}