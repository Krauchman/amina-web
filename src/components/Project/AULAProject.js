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

import myapproach from "./media/aula/myapproach.png"

import affinitymap from "./media/aula/affinitymap.png"

import wireframingmainmenu from "./media/aula/wireframingmainmenu.png"

import finaldesign1 from "./media/aula/finaldesign1.png"
import finaldesign2 from "./media/aula/finaldesign2.png"
import finaldesign3 from "./media/aula/finaldesign3.png"

import { PhoneScreen } from "./PhoneScreen";

export function AULAProject() {
    return (
        <div className="ProjectPage AULAProject">

            <Helmet>
                <title>AULA</title>
            </Helmet>

            <div className="Banner">
                <PhoneScreen src={aula_banner1} alt="AULA" className="shift-down" />
                <PhoneScreen src={aula_banner2} alt="AULA" className="shift-up" />
                <PhoneScreen src={aula_banner3} alt="AULA" className="shift-down" />
                <PhoneScreen src={aula_banner4} alt="AULA" className="shift-up" />
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

                    <img src={solution1} alt="Main page menu as a secondary navigation" loading="lazy" />

                    <img src={solution2} alt="QR scan to open door" loading="lazy" />

                    <img src={solution3} alt="Bottom navigation" loading="lazy" />
                </div>

                <div className="Section">
                    <h1>MY APPROACH</h1>

                    <img src={myapproach} alt="My Approach" loading="lazy" />
                </div>

                <div className="Section">
                    <h1>01 DEFINE</h1>

                    <h2>Main Page vs News feed</h2>

                    <p>
                        When the AULA.KZ just launched it introduced itself as a <b>“social media”</b> for residents where they can post announcements, advertisement, ask questions and etc. That’s why the main page was designed as a news feed where all posts were allocated. <b>However this concept wasn’t viable since almost none of the residents ever posted something.</b> This situation left me with 2 hypotheses which I needed to check:
                    </p>

                    <ol>
                        <b>
                            <li>
                                Residents don’t post anything because they have another platform for this with better experience;
                            </li>
                            <li>
                                New users get confused and unwelcomed when they first open the app since the news feed page is always empty which leaves the feeling that “nobody is using this app”
                            </li>
                        </b>
                    </ol>

                    <p>To check my hypotheses I interviewed existing users and new ones.</p>
                    <br />
                    <br />

                    <h1>02 RESEARCH</h1>

                    <h2>Affinity Map based on User Interview</h2>

                    <img src={affinitymap} alt="Affinity Map based on User Interview" loading="lazy" />

                    <h2>Research Results Analysis</h2>

                    <p>
                        My two hypotheses were verified:
                    </p>

                    <ol>
                        <b>
                            <li>
                                Residents don’t post anything because they have another platform for this with better experience;
                            </li>
                            <li>
                                New users get confused and unwelcomed when they first open the app since the news feed page is always empty which leaves the feeling that “nobody is using this app”
                            </li>
                        </b>
                    </ol>

                    <p>
                        User interviews brought valuable insights on how some parts of the app can be redesigned. Now I had possible directions I can follow while sketching draft wireframes:
                    </p>

                    <ul className="highlight">
                        <li>
                            <b>Introduction of primary and secondary navigation to highlight important pages.</b> This could be done by switching to bottom navigation bar (previously it was hamburger menu with all pages) where important pages will be shown, and redesigning news feed to main menu page which will locate navigation to other pages;
                        </li>
                    </ul>
                    <ul className="highlight">
                        <li>
                            <b>Main menu page can be designed in the form of a messaging apps with “chats view”.</b> By doing so new users will be get familiar with the interface which will ensure faster and more effective onboarding.
                        </li>
                    </ul>

                    <h2>Increasing retention rate</h2>

                    <p>
                        Mentioned above ideas can help for better onboarding and faster navigation in app. However, one more goal has to be covered: <b>increasing the retention rate.</b> To achieve this goal we brainstormed with the stakeholder and came up with 2 ideas:
                    </p>

                    <ol>
                        <li>
                            Incorporating messaging feature. Residents can chat on various question via AULA.KZ instead of WhatsApp;
                        </li>
                        <li>
                            Adding QR scanning system to open entrance doors and access parking zone. This idea was supported with property management companies and now all of them are using this system
                        </li>
                    </ol>
                </div>

                <div className="Section">
                    <h1>03 DESIGN</h1>

                    <h2>Different versions of main page</h2>

                    <img src={wireframingmainmenu} alt="Wireframing main menu page" loading="lazy" />
                </div>

                <div className="Section">
                    <h1>FINAL DESIGNS</h1>

                    <h2>3 major improvements in design</h2>

                    <img src={finaldesign1} alt="Main menu instead of News feed" loading="lazy" />

                    <img src={finaldesign2} alt="QR code to open door" loading="lazy" />

                    <img src={finaldesign3} alt="Switching to bottom navigation" loading="lazy" />
                </div>

                <div className="Section">
                    <h1>REFLECTIONS</h1>

                    <h2>Moment of truth</h2>

                    <p>
                        This was my first real-world commercial project which allowed me to test my UI and especially UX skills. My main discoveries include:
                    </p>

                    <ol>
                        <li>
                            <b>Despite from being usable, design should also be accessible.</b> Our users constituted of a diverse group of people some of which have small, low quality sensor screens. They might be using AULA.KZ in cases when only one hand is free or outside in the bright lightning. I had to consider such cases so that external factors wouldn’t lower the quality of user experience;
                        </li>
                        <li>
                            <b>Final designs are actually never final.</b> They are final only for some amount of time because user needs might have slight changes or new technologies arise, that should be adapted into a design. Design process is iterative, and the more insights are gotten, the more polished user experience will be;
                        </li>
                        <li>
                            <b>Not to build design based on assumptions of a stakeholder or a design team.</b> Only users can provide genuine insight on what they actually need. And my mission as a UX designer is too extract this information in the most effective way and apply it in design process.
                        </li>
                    </ol>
                </div>

            </div>
        </div >
    );
}
