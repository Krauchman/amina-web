import "./index.css";
import ACMHeader from "./photos/acm_header.png"

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
                    <h1>ACM & ACM-W Student Chapters: from designer to hackathon organizer</h1>

                    <p>ACM & ACM-W Student Chapters are academic clubs intended to create opportunities for young IT community at our University. We organize all kinds of events that motivate students interested in programming, ranging from coding marathons, hackathons to networking sessions and movie nights. We were honored “Best Academic Club” status several times among 200 student clubs at our university. Apart from this, we encourage female students in tech by organizing coding competitions and guest talks solely for them. As such, number of female participants in our events is increasing each year by almost 30%!</p>

                    <p>I joined ACM & ACM-W Student Chapter in 2020 as a graphic designer who produced visuals for social media and design for merchandise. There were no design guidelines so I set up my own by choosing color palette, fonts and style which is still being polished. This helped a lot for me and other designers to maintain consistency among visuals we created (this is especially noticeable in our Instagram page). Our event posters and social media posts became more recognizable by other students (they keep asking us if we hired graphic designer who’s creating all these designs).</p>
                </div>

            </div>
        </div >
    );
}