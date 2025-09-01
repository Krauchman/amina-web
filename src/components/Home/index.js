import "./index.css"

import { Helmet } from "react-helmet";

import { NavbarV2 } from "../NavBar/v2";
import { FooterV2 } from "../Footer/v2";

import Project1 from './media/project1.png';
import Project2 from './media/project2.png';

import HeroDecor from './media/hero-decor.png';

import ProjectLinkEye from './media/project-link-eye.svg';

export function Home() {
    return (
        <div>
            <Helmet>
                <title>Amina Alen portfolio</title>
            </Helmet>

            <div className="v2-page">
                <div className="v2-page-grid home">
                    <div className="v2-block padding-m intro">
                        <NavbarV2 />

                        <div className="hello">
                            <div className="greeting">hey, I’m Amina, a product designer</div>

                            <div className="message">
                                Driven by impact, grounded in structure,
                                thinking in products — not just features.
                            </div>

                            <div className="situation">
                                Currently at Beeline, leading the design system and
                                building products in cashback and lifestyle mini apps teams
                            </div>
                        </div>
                    </div>


                    <a href="/mini-apps" id="works" className="v2-block v2-link padding-2xs project project1">
                        <div className="cover-container">
                            <img src={Project1} alt="Lifestyle Mini Apps" className="cover" />
                            <div className="hover-container">
                                <div className="hover-content">
                                    <img src={ProjectLinkEye} alt="eye" />
                                    View case
                                </div>
                            </div>
                        </div>

                        <div className="text">
                            <div className="title">Lifestyle Mini Apps</div>
                            <div className="description">Launching MVP in 5 month and increasing ARPU by 5%</div>
                        </div>
                    </a>
                    <div className="v2-block v2-link padding-2xs project project2">
                        <div className="cover-container">
                            <img src={Project2} alt="Cashbacks" className="cover" />
                            <div className="hover-container">
                                <div className="hover-content">
                                    <img src={ProjectLinkEye} alt="eye" />
                                    View case
                                </div>
                            </div>
                        </div>

                        <div className="text">
                            <div className="title">Cashbacks</div>
                            <div className="description">Increasing discoverability of cashbacks by 12%</div>
                        </div>
                    </div>


                    <div id="values" className="v2-block hero">
                        <div className="summary">
                            Alongside the core values I believe every product
                            designer should strive for—<b>craft</b>, <b>clarity</b>, and
                            <b> collaboration</b>—I also try to bring qualities that I’ve
                            seen elevate good design into great products
                        </div>
                        <div className="decor-conatiner">
                            <img src={HeroDecor} alt="decor" className="decor" />
                        </div>
                        <div className="skills">
                            <div className="skill">
                                <div className="name">Ownership</div>
                                <div className="description">
                                    I take initiative and stay accountable
                                    from discovery to delivery
                                </div>
                            </div>
                            <div className="skill">
                                <div className="name">Impact</div>
                                <div className="description">
                                    I design with purpose, always tying
                                    decisions to business value
                                </div>
                            </div>
                            <div className="skill">
                                <div className="name">Systems</div>
                                <div className="description">
                                    I think in patterns, not pages,
                                    creating consistent experiences
                                </div>
                            </div>
                            <div className="skill">
                                <div className="name">Transparency</div>
                                <div className="description">
                                    I communicate openly and bring
                                    clarity to every stage of the process
                                </div>
                            </div>
                        </div>
                    </div>


                    <FooterV2 />

                </div>
            </div>
        </div>
    );
}