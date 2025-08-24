import "./cashbacks.css";

import { Helmet } from "react-helmet";

import { NavbarV2 } from "../../NavBar/v2";

import Cover from "./media/cover1.png"

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
            </div>
        </div>

    </div>
}