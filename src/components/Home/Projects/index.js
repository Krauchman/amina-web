import "./index.css";

import { Project } from "./Project.js";

export function Projects() {
    return (
        <div className="Projects-container">

            <Project
                name="AULA"
                description="Designed some empty state screens in kawaii style for the popular sheepify app"
            />

            <Project
                name="ZHULDYZ ZHORAMAL"
                description="Designed some empty state screens in kawaii style for the popular sheepify app"
            />

            <Project
                name="QAZAQ REPUBLIC"
                description="Designed some empty state screens in kawaii style for the popular sheepify app "
            />

        </div>
    );
}