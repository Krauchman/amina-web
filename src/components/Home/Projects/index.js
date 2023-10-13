import "./index.css";

import beeline from './media/beeline.png';
import aulakz from './media/aulakz.png';
import aulapro from './media/aulapro.png';
import zhuldyzzhoramal from './media/zhuldyzzhoramal.png';

import beeline_low from './media/beeline_low.png';
import aulakz_low from './media/aulakz_low.png';
import aulapro_low from './media/aulapro_low.png';
import zhuldyzzhoramal_low from './media/zhuldyzzhoramal_low.png';

import { Project } from "./Project.js";

export function Projects() {
    return (
        <div className="Projects-container">

            <Project
                name="B2B PERSONAL OFFICE, BEELINE"
                hover_name="BEELINE"
                description="Digitalizing operations on business numbers for efficient management"
                link_to="projects/beeline"
                src={beeline}
                placeholder={beeline_low}
            />

            <Project
                name="AULA.KZ"
                description="Connecting property management companies with residents for faster communication"
                link_to="projects/aula"
                src={aulakz}
                placeholder={aulakz_low}
            />

            <Project
                name="AULA PRO"
                description="Сentralized CRM system to facilitate all internal processes of property management companies"
                link_to="projects/aula-pro"
                src={aulapro}
                placeholder={aulapro_low}
            />

            <Project
                name="ZHULDYZ ZHORAMAL"
                description="Creating first horoscope app for Kazakh speaking users"
                link_to="projects/zhuldyz-zhoramal"
                src={zhuldyzzhoramal}
                placeholder={zhuldyzzhoramal_low}
            />

        </div>
    );
}