import "./index.css";
import { Helmet } from "react-helmet";

import banner from "./media/aula-pro/banner.png";
import banner_low from "./media/aula-pro/banner-low.png";
import solution1 from "./media/aula-pro/solution1.png";
import solution2 from "./media/aula-pro/solution2.png";
import persona from "./media/aula-pro/persona.png";
import wireframing1 from "./media/aula-pro/wireframing1.png";
import wireframing2 from "./media/aula-pro/wireframing2.png";
import wireframing3 from "./media/aula-pro/wireframing3.png";
import finaldesign1 from "./media/aula-pro/finaldesign1.png";
import finaldesign2 from "./media/aula-pro/finaldesign2.png";

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

                <div className="Section">
                    <h1>RESEARCH</h1>

                    <h2>User Interviews</h2>

                    <p>As I dived deeper into the specifics of the tasks, I noticed 2 things that I needed to research: </p>

                    <ol>
                        <li>
                            Current design <b>didn’t take into account what information of a request property managers are usually looking for</b> on a request page;
                        </li>
                        <li>
                            There is a high chance that <b>property managers would like to have some additional functionality or don’t actually need some of the existing one.</b>
                        </li>
                    </ol>

                    <p>To get information on this I conducted <b>user interviews</b> and <b>visited property managers’ offices</b> to observe how they use and navigate on the request page.</p>

                    <h2>Journey Map & Persona</h2>

                    <img src={persona} alt="Journey Map & Persona" loading="lazy" />
                </div>

                <div className="Section">
                    <h1>WIREFRAMING</h1>

                    <h2>Sketching request page for app and desktop</h2>

                    <img src={wireframing1} alt="Wireframing" loading="lazy" />

                    <img src={wireframing2} alt="Wireframing" loading="lazy" />

                    <img src={wireframing3} alt="Wireframing" loading="lazy" />
                </div>

                <div className="Section">
                    <h1>FINAL DESIGNS</h1>

                    <h2>Final designs</h2>

                    <img src={finaldesign1} alt="Final design" loading="lazy" />

                    <img src={finaldesign2} alt="Final design" loading="lazy" />
                </div>

                <div className="Section">
                    <h1>REFLECTIONS</h1>

                    <h2>Learning and outcomes</h2>

                    <p>The second round of interviews with managers showed that they are more satisfied with the redesigned interfaces of both app and desktop versions. Both interfaces appeared more aesthetically pleasing and better adapted to their requests to faster navigate on a page. They highlighted <b>(1) export as an Excel file and (2) ability to accept a request for a service company employees were especially helpful to facilitate the overall process.</b> </p>

                    <p>This task helped to enhance my knowledge on creating efficient information hierarchy. For further steps I’d like to apply obtained knowledge for other pages of the product where data is not visualized in a usable way.</p>
                </div>

            </div>
        </div >
    );
}