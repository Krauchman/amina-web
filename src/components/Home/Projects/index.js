import "./index.css";

import { Project } from "./Project.js";

export function Projects() {
    return (
        <div className="Projects-container">

            <Project
                name="AULA"
                description="Designed some empty state screens in kawaii style for the popular sheepify app"
                link_to="projects/aula"
            />

            <Project
                name="ZHULDYZ ZHORAMAL"
                description="Designed some empty state screens in kawaii style for the popular sheepify app"
                link_to="projects/zhuldyz-zhoramal"
            />

            <Project
                name="QAZAQ REPUBLIC"
                description="Designed some empty state screens in kawaii style for the popular sheepify app "
                link_to="projects/qazaq-republic"
            />

        </div>
    );
}