import { Intro } from "./Intro";
import { Projects } from "./Projects";

import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";

import NavbarLogo from './media/navbar-logo.png';
import LinkArrowWhite from './media/link-arrow.svg';
import LinkArrowBlack from './media/link-arrow-black.svg';

import Project1 from './media/project1.png';
import Project2 from './media/project2.png';

export function Home() {
    return (
        <div>
            <Helmet>
                <title>Amina Alen portfolio</title>
            </Helmet>

            <div className="v2-page">
                <div className="v2-page-grid home">
                    <div className="v2-block padding-m intro">
                        <div className="v2-navbar">
                            <img src={NavbarLogo} alt="logo" className="v2-navbar-logo" />
                            <div className="v2-navbar-links">
                                <Link to="/works" className="v2-link v2-navbar-link">
                                    Works
                                </Link>
                                <Link to="/values" className="v2-link v2-navbar-link">
                                    Values
                                </Link>
                                <Link to="/contact" className="v2-link v2-navbar-link">
                                    Contact
                                </Link>
                                <Link to="/get-in-touch" className="v2-link v2-navbar-link out">
                                    Get in touch
                                    <img src={LinkArrowWhite} alt="link-arrow" className="arrow" />
                                </Link>
                            </div>
                        </div>

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


                    <div className="v2-block padding-2xs project project1">
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

                    <div className="v2-block hero">1</div>
                    <div className="v2-block footer">1</div>

                </div>
            </div>
        </div>
    );
}