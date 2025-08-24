import { Helmet } from "react-helmet";

import { NavbarV2 } from "../NavBar/v2";

import LinkArrowBlack from './media/link-arrow-black.svg';

import Project1 from './media/project1.png';
import Project2 from './media/project2.png';

import HeroDecor from './media/hero-decor.png';

import FooterPhoto from './media/footer-photo.png';
import StatusDot from './media/status-dot.svg';

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
                                <br />
                                thinking in products — not just features.
                            </div>

                            <div className="situation">
                                Currently at Beeline, leading the design system and
                                <br />
                                building products in cashback and lifestyle mini apps teams
                            </div>
                        </div>
                    </div>


                    <div id="works" className="v2-block padding-2xs project project1">
                        <img src={Project1} alt="Cashbacks" />
                        <div className="text">
                            <div className="title">Cashbacks</div>
                            <div className="description">Increasing discoverability of cashbacks by 12%</div>
                        </div>
                        <div className="arrow-container">
                            <img src={LinkArrowBlack} alt="arrow" className="arrow" />
                        </div>
                    </div>
                    <div className="v2-block padding-2xs project project2">
                        <img src={Project2} alt="Cashbacks" />
                        <div className="text">
                            <div className="title">Cashbacks</div>
                            <div className="description">Increasing discoverability of cashbacks by 12%</div>
                        </div>
                        <div className="arrow-container">
                            <img src={LinkArrowBlack} alt="arrow" className="arrow" />
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


                    <div id="contact" className="v2-block footer">
                        <div className="status">
                            Open to new
                            <span className="v2-no-wrap-group">
                                opportunities <img src={StatusDot} alt="status" />
                            </span>
                        </div>
                        <div className="contacts">
                            <a className="v2-link" target="_blank" rel="noreferrer" href="mailto:alenamina1010@gmail.com">
                                alenamina1010@gmail.com
                            </a>
                            <a className="v2-link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aminaalen/">
                                LinkedIn
                            </a>
                        </div>
                        <div className="photo-container">
                            <img src={FooterPhoto} alt="me" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}