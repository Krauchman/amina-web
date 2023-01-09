import "./index.css";
import ACMHeader from "./photos/acm_header.png"
import { PhotoCard } from "./PhotoCard";

import inst_before from "./photos/inst_before.png";
import inst_after1 from "./photos/inst_after1.png";
import inst_after2 from "./photos/inst_after2.png";

import acm_members from "./photos/acm_members.png";
import nuopen from "./photos/nuopen.png";
import acm_hub from "./photos/acm_hub.png";

export function ACMDoc() {
    return (
        <div className="Doc-container">
            <div className="Doc">
                <div className="Doc-cell Doc-header-left">
                    <img src={ACMHeader} alt="ACM <3" />
                </div>

                <div className="Doc-cell Doc-header-right">
                    <div>Creating Opportunities for Student IT Community in Kazakhstan</div>
                </div>

                <div className="Doc-cell Doc-body">

                    <h1 className="block">ACM & ACM-W Student Chapters: from designer to hackathon organizer</h1>

                    <p className="block">ACM & ACM-W Student Chapters are academic clubs intended to create opportunities for young IT community at our University. We organize all kinds of events that motivate students interested in programming, ranging from coding marathons, hackathons to networking sessions and movie nights. We were honored “Best Academic Club” status several times among 200 student clubs at our university. Apart from this, we encourage female students in tech by organizing coding competitions and guest talks solely for them. As such, number of female participants in our events is increasing each year by almost 30%!</p>

                    <p className="block">I joined ACM & ACM-W Student Chapter in 2020 as a graphic designer who produced visuals for social media and design for merchandise. There were no design guidelines so I set up my own by choosing color palette, fonts and style which is still being polished. This helped a lot for me and other designers to maintain consistency among visuals we created (this is especially noticeable in our Instagram page). Our event posters and social media posts became more recognizable by other students (they keep asking us if we hired graphic designer who’s creating all these designs).</p>

                    <div className="block Doc-photo-block">
                        <PhotoCard src={inst_before} title="ACM Instagram page before me" />
                        <PhotoCard src={inst_after1} title="ACM Instagram page after me" />
                        <PhotoCard src={inst_after2} title="ACM Instagram page after me" />
                    </div>

                    <p className="block highlights">My contribution as a designer facilitated our internal processes and the quality of visuals increased. However I wanted to make a more profound impact on the delivery of our events... so I got the honor to be elected as a vice-president of ACM Student Chapter for the 2021-2022 period 🥳</p>

                    <p className="block">As a person with no IT background and barely interested in programming, I had to figure out many many technical details about the organization of coding competitions, ICPC style marathons and so on. I asked previous presidents and vice-presidents to clarify some moments and collaboratively worked A LOT with my beloved president and 30 club members. Step by step I learnt how to lead organization of events and what is to be a true leader. For me now leader is person who motivates all team members and creates environment for them to nourish and achieve their full potential to achieve a common goal.</p>

                    <p className="block">Since my University is research centered, we don’t have that much artsy students. Despite this fact I do believe there are some people who are interested in design but simply don’t have the right environment to expose their skills. That’s why I recruited potential designers or already talented ones to base department of designers where we can learn and improve our design skills. Time for good stats: our number increased from 3 in 2020 to 10 in 2022 🥳</p>

                    <div className="block Doc-photo-block">
                        <PhotoCard src={acm_members} title="ACM & ACM-W members, 2022" />
                        <PhotoCard src={nuopen} title="NUopen, ICPC style coding contest" />
                        <PhotoCard src={acm_hub} title="ACM Hub, networking session" />
                    </div>

                    <h1 className="block">Hackathon with Google as a main sponsor and over 600 applications</h1>

                    <p className="block">The main annual event of ACM-SC is the Hackathon, HackNU. This HackNU was 5th in a row and always gathered over 300 participants each year since 2017. HackNU/2022 was no exception, we even beat the last year’s record of 450 applications. Students from other Kazakhstan cities flew to our University to participate in our Hackathon. It was no surprise because the main sponsor was Google. I took the role of main organizer who managed the whole organization process.</p>

                </div>

            </div>
        </div >
    );
}