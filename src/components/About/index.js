import { Helmet } from "react-helmet";

import { ProfileBlock } from "./ProfileBlock";
import { ACMDoc, HobbiesDoc } from "./Docs";

export function About() {
    return (
        <div>
            <Helmet>
                <title>About me</title>
            </Helmet>

            <ProfileBlock />
            <ACMDoc />
            <HobbiesDoc />
        </div>
    );
}