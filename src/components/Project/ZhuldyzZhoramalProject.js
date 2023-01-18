import "./index.css";
import "./ZhuldyzZhoramalProject.css"
import { Helmet } from "react-helmet";

import banner from "./media/zhuldyz-zhoramal/banner.png";
import banner_low from "./media/zhuldyz-zhoramal/banner_low.webp";
import solution from "./media/zhuldyz-zhoramal/solution.png";
import myapproach from "./media/zhuldyz-zhoramal/myapproach.png";
import finalprototypes from "./media/zhuldyz-zhoramal/finalprototypes.png";
import analysis from "./media/zhuldyz-zhoramal/analysis.png";
import sitemap from "./media/zhuldyz-zhoramal/sitemap.png";
import wireframes from "./media/zhuldyz-zhoramal/wireframes.png";

import { LazyImage } from "../Image";

export function ZhuldyzZhoramalProject() {
    return (
        <div className="ProjectPage ZhuldyzZhoramalProject">

            <Helmet>
                <title>Zhuldyz Zhoramal</title>
            </Helmet>

            <div className="Banner">
                <LazyImage src={banner} alt="Zhuldyz Zhoramal" placeholder={banner_low} />
            </div >

            <div className="Content">

                <div className="Section">
                    <div className="Header">
                        <div className="Title">ZHULDYZ ZHORAMAL</div>

                        <div className="Timeline">Timeline</div>
                        <div className="Timeline-content">June 2021 - September 2021</div>

                        <div className="Responsabilities">Responsabilities</div>
                        <div className="Responsabilities-content">UX Research, Wireframing</div>

                        <div className="Tools">Tools Used</div>
                        <div className="Tools-content">Figma</div>
                    </div>
                </div>

                <div className="Section">
                    <h1>CONTEXT</h1>

                    <h2>Creating first Kazakh horoscope app for Kazakh speaking users</h2>

                    <p>
                        Horoscope was always one of the popular entertainment among various age and social groups. It’s moving from newspaper corners to apps in a new and engaging format. However there are no apps that offer content in Kazakh language in Kazakhstan since the most used language is Russian. Zhuldyz Zhoramal will be the first app to entertain Kazakh speaking users with horoscope in Kazakh.
                    </p>

                    <p>
                        This project was part of my UX/UI mentorship program. Me and my fellow designer were given an idea of the project and we had to create from it a viable MVP product. During the process I was responsible for conducting UX research, create UX artifacts and sketch out wireframes.
                    </p>
                </div>

                <div className="Section">
                    <h1>PROBLEM STATEMENT</h1>

                    <div
                        className="Special-h2"
                        style={{ color: "#714CE2" }}
                    >
                        <div className="background-text">?</div>
                        <h2>How might we create a horoscope that will be interesting for Kazakh speaking user?</h2>
                    </div>

                    <p>I had to investigate what is interesting for the Kazakh user regarding horoscope, what are the user habits and how I can incorporate these insight in further design process.</p>
                </div>

                <div className="Section">
                    <h1>SOLUTION</h1>

                    <img src={solution} alt="Solution" loading="lazy" />
                </div>

                <div className="Section">
                    <h1>MY APPROACH</h1>

                    <img src={myapproach} alt="My approach" loading="lazy" />
                </div>

                <div className="Section">
                    <h1>COMPETITIVE ANALYSIS</h1>

                    <h2>None of the competitors provided content in Kazakh</h2>

                    <p>
                        I analyzed 4 most popular horoscope apps shown below. I found that none of them provided content in Kazakh which served as a main opportunity for Zhyudyz Zhoramal. The apps have interesting functionalities that adds uniqueness to each of them.
                        <br />
                        Overall, competitors analysis gave me substantial information on current trends in horoscope apps which I further decided to add to my future designs. This includes (1) everyday horoscope, (2) natal map, (3) compatibility check.
                    </p>

                    <img src={analysis} alt="Competitors" loading="lazy" />

                    <h2>Site map</h2>

                    <img src={sitemap} alt="Site map" loading="lazy" />
                </div>

                <div className="Section">
                    <h2>Wireframes</h2>

                    <img src={wireframes} alt="Wireframes" loading="lazy" />
                </div>

                <div className="Section">
                    <h1>END PRODUCT</h1>

                    <h2>Final prototypes</h2>

                    <img src={finalprototypes} alt="Final prototypes" loading="lazy" />
                </div>

                <div className="Section">
                    <h1>REFLECTIONS</h1>

                    <h2>Learning</h2>

                    <p>This was my first UI/UX project that allowed me to apply my design skills. I was able to attain multiple research artifacts and incorporate insights from them into my wireframes. Every step of the design process and the research was mentored by my mentor.</p>
                </div>

            </div>
        </div >
    );
}