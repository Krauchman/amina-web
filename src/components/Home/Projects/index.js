import "./index.css";

import aulakz from './media/aulakz.png';

import { Project } from "./Project.js";

export function Projects() {
    return (
        <div className="Projects-container">

            <Project
                name="AULA.KZ"
                description="Connecting property management companies with residents for faster communication"
                link_to="projects/aula"
                src={aulakz}
            />

            <Project
                name="AULA PRO"
                description="Connecting property management companies with residents for faster communication"
                link_to="projects/aula-pro"
            />

            <Project
                name="ZHULDYZ ZHORAMAL"
                description="Designed some empty state screens in kawaii style for the popular sheepify app"
                link_to="projects/zhuldyz-zhoramal"
            />

        </div>
    );
}