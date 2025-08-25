import "./cashbacks.css";

import { Helmet } from "react-helmet";

import { NavbarV2 } from "../../NavBar/v2";

import Cover from "./media/cover1.png"
import InfoDecor from "./media/project1-info-decor.png"
import Ach1Decor from "./media/project1-ach1-decor.png"
import Ach2Decor from "./media/project1-ach2-decor.png"
import Ach3Decor from "./media/project1-ach3-decor.png"

export function Cashbacks() {
    return <div>
        <Helmet>
            <title>Cashbacks</title>
        </Helmet>

        <div className="v2-page">
            <div className="v2-page-grid cashbacks">
                <div className="v2-block intro">
                    <NavbarV2 />

                    <div className="main-text">
                        <div className="title">Lifestyle Mini Apps</div>
                        <div className="description">
                            Launching a new vertical for everyday services
                            while protecting e-commerce revenue and proving ROI fast.
                        </div>
                    </div>
                    <div className="info">
                        <div className="item">
                            <div className="key">Timeline</div>
                            Dec 2024 – Aug 2025
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
                                <div className="item">2 PMs, 3 developers, system analyst, QA</div>
                            </div>
                        </div>
                        <div className="section">
                            <div className="name">Responsibilities</div>
                            <div className="items">
                                <div className="item">Conducted discovery research and formed the initial concept</div>
                                <div className="item">Co-developed the roadmap and MVP scope with PMs</div>
                                <div className="item">Designed core user flows and final UI</div>
                                <div className="item">Facilitated cross-team syncs and usability testing</div>
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
                        Janymda SuperApp started as a telecom utility app but
                        quickly grew into a broader ecosystem with news, games,
                        and an AI assistant. To stay competitive in Kazakhstan’s market,
                        where other super apps were buying or integrating niche services
                        like grocery delivery and cinema tickets, we needed to move into Lifestyle.
                        The goal was to bring everyday services like pharmacy delivery and
                        ticket booking directly into Janymda — helping us grow ARPU and keep
                        users inside the app for more of their daily needs.
                    </p>

                    <h1>Challenges</h1>
                    <p>
                        Given the context in the overview, we faced 3 key challenges:
                        <ul>
                            <li>MVP focus — Designing features attractive enough for users but simple enough to ship fast with minimal dev effort.</li>
                            <li>User experience — Building seamless flows that felt intuitive and competitive with standalone lifestyle apps.</li>
                            <li>Internal alignment — Replacing a high-revenue tab required aligning stakeholder visions, preserving KPIs and integrating both directions into a shared interface.</li>
                        </ul>
                    </p>
                </div>


                <div className="v2-block win win1">
                    <img src={Ach1Decor} alt="decor" />
                    MAU hit 10,000+ during the staged rollout
                </div>


                <div className="v2-block win win2">
                    <img src={Ach2Decor} alt="decor" />
                    Average order reached 12,000₸ in just 3 months
                </div>


                <div className="v2-block win win3">
                    <img src={Ach3Decor} alt="decor" />
                    MVP shipped in 5 months with a focused roadmap
                </div>
            </div>
        </div>

    </div>
}