import { ProfileBlock } from "./ProfileBlock";
import { ACMDoc, HobbiesDoc } from "./Docs";

export function About() {
    return (
        <div>
            <ProfileBlock />
            <ACMDoc />
            <HobbiesDoc />
        </div>
    );
}