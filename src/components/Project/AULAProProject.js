import "./index.css";
import { Helmet } from "react-helmet";

import banner from "./media/aula-pro/banner.png";
import banner_low from "./media/aula-pro/banner-low.png";
import solution1 from "./media/aula-pro/solution1.png";
import solution2 from "./media/aula-pro/solution2.png";

import { LazyImage } from "../Image";

export function AULAProProject() {
    return (
        <div className="ProjectPage AULAProProject">

            <Helmet>
                <title>AULA PRO</title>
            </Helmet>

            <div className="Banner">
                <LazyImage src={banner} alt="AULA PRO" placeholder={banner_low} />
            </div >

            <div className="Content">

                <div className="Section">
                    <div className="Header">
                        <div className="Title">AULA PRO</div>

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

                    <h2>Digitalizing bureaucratic processes for property management companies</h2>

                    <p>
                        Processing and storing large amount of data on residents, interaction between them and property management companies requires powerful software to effectively perform these tasks. AULA PRO came up with a solution to create a centralized CRM system to facilitate all internal processes of property management companies.
                        <br />
                        I had different task such as redesign of existing pages, updating design system, conducting user research, prototyping and designing new pages. Here I will showcase the most recent task.
                    </p>
                </div>

                <div className="Section">
                    <h1>PROBLEM STATEMENT</h1>

                    <div
                        className="Special-h2"
                        style={{ color: "#3BA276" }}
                    >
                        <div className="background-text">?</div>
                        <h2>How might we redesign interface for faster navigation on the page of service requests?</h2>
                    </div>

                    <p>AULA PRO is established on 2 platforms: Web and an App. Its most commonly used feature is tracking and managing service requests submitted by residents. Old interface had poor representation of request information since it was unclear which data is important for property managers. My main task was to conduct UX research and incorporate research results into the new design.</p>
                </div>

                <div className="Section">
                    <h1>SOLUTION</h1>

                    <img src={solution1} alt="Tracking service requests" loading="lazy" />

                    <img src={solution2} alt="Database on requests" loading="lazy" />
                </div>

            </div>
        </div >
    );
}