import { Intro } from "./Intro";
import { Projects } from "./Projects";

import { Helmet } from "react-helmet";

export function Home() {
    return (
        <div>
            <Helmet>
                <title>Amina Alen portfolio</title>
            </Helmet>

            <Intro />
            <Projects />
        </div>
    );
}