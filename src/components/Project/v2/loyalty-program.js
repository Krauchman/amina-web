import "./loyalty-program.css";

import { Helmet } from "react-helmet";

import { NavbarV2 } from "../../NavBar/v2";
import { FooterV2 } from "../../Footer/v2";

import Cover from "./media/cover1.png"
import InfoDecor from "./media/project1-info-decor.png"
import Ach1Decor from "./media/project1-ach1-decor.png"
import Ach2Decor from "./media/project1-ach2-decor.png"
import Ach3Decor from "./media/project1-ach3-decor.png"
import PresentationCover from "./media/project1-presentation-cover.png"
import PresentationLinkEye from './media/presentation-link-eye.svg';

export function LoyaltyProgram() {
    return <div>
        <Helmet>
            <title>Loyalty program in Janymda</title>
        </Helmet>

        <div className="v2-page">
            <div className="v2-page-grid loyalty-program">
                <div className="v2-block intro">
                    <NavbarV2 />

                    <div className="main-text">
                        <div className="title">Loyalty program in Janymda</div>
                        <div className="description">
                            Most users never noticed the loyalty program in Janymda SuperApp — I redesigned it to
                            make cashback visible, contextual, and effortless to use
                        </div>
                    </div>
                    <div className="info">
                        <div className="item">
                            <div className="key">Timeline</div>
                            Jun 2024 – Dec 2024
                        </div>
                        <div className="item">
                            <div className="key">Role</div>
                            0–1 Product Designer
                        </div>
                    </div>
                    <img src={Cover} alt="cover" className="cover" />
                </div>


                <div className="v2-block info">
                    <div className="content">
                        <div className="section">
                            <div className="name">Team</div>
                            <div className="items">
                                <div className="item">PM, 4 developers, system analyst, QA</div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="name">Responsibilities</div>
                            <div className="items">
                                <div className="item">Conducted UX research to uncover friction in loyalty program flows</div>
                                <div className="item">Delivered design solutions addressing discoverability and usability gaps</div>
                                <div className="item">Facilitated cross-team syncs with major stakeholders</div>
                                <div className="item">Delivered dev-ready assets and supported rollout iterations</div>
                            </div>
                        </div>
                    </div>
                    <div className="decor">
                        <img src={InfoDecor} alt="flower" />
                    </div>
                </div>


                <div className="v2-block desc">
                    <h1>Overview</h1>
                    <p>
                        Janymda SuperApp serves 5M monthly active users and plays a key role in
                        Beeline’s ecosystem growth. A loyalty program was introduced to boost
                        Simply neobank adoption and engagement by offering cashback on telecom
                        payments. However 75% of users never used it. I led the redesign to make
                        cashback discoverable and contextual, focusing on three core solutions: enabling
                        one-click usage at checkout, clarifying how to spend cashback on the loyalty
                        page and integrating cashback into high-traffic flows of the super app.
                    </p>

                    <h1>Problems solved</h1>


                    <p>
                        The loyalty program launched quickly without validation, resulting in major usability gaps:
                    </p>
                    <ul>
                        <li><b>Hidden cashback</b> — discoverable only through a single, overlooked entry point;</li>
                        <li><b>Unclear usage</b> — the cashback page explained how users earned it but not how they can spend it;</li>
                        <li><b>High friction redemption</b> — using cashback required 5+ steps with no clear need.</li>
                    </ul>
                </div>


                <div className="v2-block win win1">
                    <img src={Ach1Decor} alt="decor" />
                    MAU of loyalty program page increased by 18%
                </div>


                <div className="v2-block win win2">
                    <img src={Ach2Decor} alt="decor" />
                    Cashback redemption rate improved by 12%
                </div>


                <div className="v2-block win win3">
                    <img src={Ach3Decor} alt="decor" />
                    10+ new entry points into loyalty program flows
                </div>


                <div className="v2-block pres">
                    <div className="text">
                        <h1>Curious to know more?</h1>
                        <p>
                            Explore the full design process in the presentation below — including early
                            concepts, key insights, and how we iterated on flows before launch
                        </p>
                    </div>

                    <a
                        href="https://pitch.com/v/loyalty-program-in-janymda-ktvwb2"
                        target="_blank"
                        rel="noreferrer"
                        className="presentation v2-link"
                    >
                        <img src={PresentationCover} className="cover-img" alt="presentation cover" />
                        <div className="container">
                            <div className="hover-content">
                                <img src={PresentationLinkEye} alt="eye" />
                                View presentation
                            </div>
                        </div>
                    </a>
                </div>


                <FooterV2 />
            </div>
        </div>

    </div>
}