import "./index.css";
import "./BeelineProject.css";
import { Helmet } from "react-helmet";

import banner from "./media/beeline/banner.png";
import progress from "./media/beeline/progress.png";
import beeline_logo from "./media/beeline/beeline_logo.png";
import double_diamond from "./media/beeline/double_diamond.png";
import graph from "./media/beeline/graph.png";
import problem_statement from "./media/beeline/problem_statement.png";
import activities_and_deliverables from "./media/beeline/activities_and_deliverables.png";
import monkey_meme from "./media/beeline/monkey_meme.png";
import interview_photos from "./media/beeline/interview_photos.png";
import interview_responses from "./media/beeline/interview_responses.png";
import response_table_template from "./media/beeline/response_table_template.png";
import jtbd from "./media/beeline/jtbd.png";
import unremarkable_bonus_tag from "./media/beeline/unremarkable_bonus_tag.png";
import poor_communication_of_value from "./media/beeline/poor_communication_of_value.png";
import analytics_result_1 from "./media/beeline/analytics_result_1.png";
import analytics_result_2 from "./media/beeline/analytics_result_2.png";
import final_jtbd from "./media/beeline/final_jtbd.png";
import main_insight from "./media/beeline/main_insight.png";

import { LazyImage } from "../Image";

export function BeelineProject() {
    return (
        <div className="ProjectPage BeelineProject">

            <Helmet>
                <title>Beeline</title>
            </Helmet>

            <div className="Banner BannerSingleImage">
                <LazyImage src={banner} alt="Beeline" />
            </div >

            <div className="Content StackedCardSection">

                <div className="Section">
                    <div className="Header">
                        <div className="Title">
                            <div>Increasing discoverability</div>
                            <div>of bonuses in MyBeeline</div>
                        </div>
                    </div>

                    <p>Have you ever randomly discovered that you've received cashback in an app, only to forget about it moments later? If your answer is "yes," you're not alone — this is exactly what happened to our users.</p>

                    <p>This story is about how a newly launched feature was poorly communicated and ended up hidden within the product. It's also a story about recognizing when research has explored the wrong problem and still using those insights to uncover a more impactful, actionable one.</p>

                    <img src={progress} alt="Case progress" loading="lazy" />
                </div>


                <div className="Section">
                    <h1>INTRO</h1>

                    <h2>What is MyBeeline?</h2>

                    <div className="Columns">
                        <p className="col-xs-12 col-10">Beeline is a telecommunication company with 10 million mobile customers. I’m part of the team working on one of its core digital products, MyBeeline – SuperApp, with MAU of 5 million users. MyBeeline offers quick access to telecom service management, along with lifestyle mini-apps.</p>
                        <img className="col-xs-5 col-2" src={beeline_logo} alt="Beeline logo" loading="lazy" />
                    </div>

                    <h2>Context</h2>

                    <p>Beeline's strategic growth plan aims to increase the engagement of users in our super app’s ecosystem, positively impacting LTV and GMV 📈. A key initiative is integrating Beeline’s neobank 🏦, Simply, into the MyBeeline SuperApp. This integration offers a new entry point to become Simply customer and allows 5 million MyBeeline users to perform basic banking operations within a single app 📲. In its first three months of launch, this initiative has increased the number of Simply customers 👥 and Simply card issuances 💳  averaging in +500 per day.</p>
                    <p>The bonus system was introduced to stimulate MyBeeline users to become Simply customers, offering cash back 💸 on paying their monthly mobile plans. Users need to issue a Simply wallet to start receiving bonuses, with more cash backs for those who issue a Simply card.</p>

                    <h2>Role</h2>

                    <p>As a product designer I participated in the whole design process from the problem discovery to delivery. This included stakeholder interviews, UX research, prototypes preparation, research post-analysis, collaboration with product managers, developers, data analysts and leadership team.</p>
                </div>


                <div className="Section">
                    <h1>DESIGN PROCESS</h1>

                    <h2>Tailoring double diamond to non-linear process</h2>

                    <p>To ensure we were solving the right problem — one that met user needs and aligned with our business goals — I used the Double Diamond Framework. However, there were times when I felt overwhelmed by the need to strictly follow the framework. This led to research artifacts that didn’t help in making actionable decisions. I became even more frustrated when I realized the problem I was researching wasn’t one my team could actually solve.</p>
                    <p>Instead of pushing forward, I found the courage to take a few steps back and discovered a bigger, more obvious problem. It was something we could solve with far fewer resources.  In the end, my process looked like this:</p>

                    <img src={double_diamond} alt="Double Diamond Framework" loading="lazy" />
                </div>

                <div className="Section">
                    <h2>Exploring wrong problem</h2>

                    <p>Context: I had only been with the Bonus program team for three weeks when my product manager asked me to conduct research. He wanted to figure out why Simply credit card issuances through MyBeeline spiked in the first few days of each month. The goal was to use this data on user motivations to increase the daily issuance rate of Simply cards.</p>

                    <img src={graph} alt="Graph" loading="lazy" />

                    <p>As I was still familiarizing myself with the product, its functionality, business processes, and other specifics, I lacked a deeper understanding of the context and the bigger picture. Given this, my product manager's request seemed reasonable, so I immediately began planning the design activities and deliverables. I chose user interviews as my research method to learn about users’ highlights of their experience issuing a Simply card and mental models of using a Simply card.</p>

                    <img src={activities_and_deliverables} alt="Activities and deliverables" loading="lazy" />

                    <h2>Research-question–generation workshop</h2>

                    <div className="Columns">
                        <p className="col-xs-12 col-8">To ensure our visions were aligned on the research problem, I held a couple of kick-off meetings with my product manager. In the second meeting that we dedicated to research question generation, we defined the key questions we wanted the research to address:</p>
                        <img className="col-xs-5 col-4" src={monkey_meme} alt="Monkey meme" loading="lazy" />
                    </div>

                    <ol>
                        <b>
                            <li>What circumstances led users to issue a Simply card?</li>
                            <li>How many were motivated by the higher bonus rate?</li>
                            <li>How do they use the Simply card? What do they like about it? What frustrates them?</li>
                        </b>
                    </ol>

                    <p>Gathering this information was intended to help me better understand our user profiles and identify their job stories.</p>

                    <h2>User Interviews: Struggles to Find Key Insights</h2>

                    <p>For user interviews, I targeted users who:</p>

                    <ol>
                        <li>issued a Simply card during the early days of December and January when issuance rates spiked.</li>
                        <li>Came from diverse backgrounds to ensure equal representation of our client base.</li>
                    </ol>

                    <p>In total, I interviewed 10 respondents from various regions across Kazakhstan, each working in different professions and having their own unique journey and Jobs to Be Done (JBTD) for using Simply card.</p>

                    <img src={interview_photos} alt="Interview photos" loading="lazy" />

                    <p>After lovely conversations with respondents, I gained valuable insights into our users — their routines, daily habits, and motivations to use Simply card. I’m always fascinated by how uniquely individuals can adapt a product to meet their specific needs. By the end of the interviews, I got the following Google Sheet with their responses:</p>

                    <img src={interview_responses} alt="Google Sheet with interview responses" loading="lazy" />

                    <p>To make the respondents' answers more readable and ease the extraction of meaningful information, I created the following table and filled it in with their responses.</p>

                    <ol>
                        <li><b>The 1st column</b> provides background on respondents’ usage pattern and their attitudes towards Simply and bonus program;</li>
                        <li><b>The 2nd column</b> describes their JTBD statement to understand the circumstances when they use Simply card;</li>
                        <li><b>The 3rd column</b> outlines the key steps of their journey of issuing the card for the first time and the communication channel they came from.</li>
                    </ol>

                    <img src={response_table_template} alt="Readable response table skeleton" loading="lazy" />  

                    <h2>Job stories</h2>

                    <p>After organizing the respondents' answers using the template, I identified the top two job stories for the Simply card. However, these job stories didn’t provoke actionable insights. I couldn't suggest specific solutions to improve the user experience that would involve my team. Most of the suggestions pointed to improvements in business processes by the Simply team.</p>

                    <img src={jtbd} alt="JTBD" loading="lazy" />  

                    <p>Our team has a biweekly Discovery meetings where we present new ideas/research results to our business stakeholders and collaborate on brainstorming solutions. When I presented the research results (job stories) on one of such meetings, their first question was, “What solutions do these job stories suggest for improving our product?” Honestly, I couldn’t think of any at that moment. I was so absorbed in the research that I overlooked actionable insights. After considering their feedback, I decided to shift the focus of the research.</p>

                    <h2>Searching overlooked insights</h2>

                    <p>After reviewing the respondents' answers and re-listening to the interview recordings, I found interface problems that were causing major frictions in users’ journey not only to issue Simply card but also to use bonuses for the first time:</p>

                    <div className="Columns">
                        <img className="col-xs-12 col-6" src={unremarkable_bonus_tag} alt="Unremarkable bonus tag" loading="lazy" />
                        <img className="col-xs-12 col-6" src={poor_communication_of_value} alt="Poor communication of value" loading="lazy" />
                    </div>

                    <h2>When release of new feature went unnoticed</h2>

                    <p>Clear communication of the new features and their value proposition was crucial to properly onboard a user into our bonus program and attract him from first touchpoint. However there was one major problem. The bonus program was implemented in a relatively short timeframe. That limited the time available for research and validation of the final designs with real end users. With insights from user interviews I had a hypothesis that the launch of our new features went unnoticed by users. I further confirmed it through analytics revealing that:</p>

                    <div className="Columns">
                        <img className="col-xs-12 col-6" src={analytics_result_1} alt="Unremarkable bonus tag" loading="lazy" />
                        <img className="col-xs-12 col-6" src={analytics_result_2} alt="Poor communication of value" loading="lazy" />
                    </div>

                    <h2>Problem statement and metrics</h2>

                    <p>After the kick-off meeting with the product manager, we outlined the business goals and the key metrics we intended to increase:</p>
                    
                    <ol>
                        <li><b>MAU of bonus page.</b> Introduce new entry points to the bonus page to enhance the visibility of bonuses throughout MyBeeline.</li>
                        <li><b>Bonus utilization rate.</b> Drive discoverability of bonuses by providing frictionless bonus usage within existing workflows in MyBeeline.</li>
                    </ol>

                    <p>These metrics were further used to formulate the problem statement to define our research scope:</p>

                    <img src={problem_statement} alt="Problem statement" loading="lazy" />

                    <p>This issue needs addressing because, as a new product, the bonus program hasn't yet demonstrated the expected value to justify ongoing investment. As its functionality expands, it continues to consume resources while risking becoming hidden and poorly communicated. This could have insignificant impact on user engagement in the MyBeeline ecosystem, which is the primary goal of the bonus program.</p>

                    <h2>Revised job stories</h2>

                    <p>I reanalyzed respondents' answers and reviewed past research on bonus usage to create job stories for bonuses. This led to identifying the top two job stories for bonuses:</p>

                    <img src={final_jtbd} alt="Final JTBD" loading="lazy" />
                    
                    <p>There were 2 important notes that helped me to deeper understand what’s behind these JTBD.</p>

                    <p><b>Firstly,</b> we had 2 types of respondents:</p>

                    <ul>
                        <li>Those <b>who actively used Simply cards (5 respondents)</b> and thus received bonuses from multiple payments from the credit cards. On average, they got minimum <b>1000+ tenge of cash back per week.</b> 4/5 of these respondents had a job of buying snack/coffee using bonuses;</li>
                        <li>And <b>those who rarely used Simply card (5 respondents)</b> and received bonuses mostly from monthly mobile payment. That’s around <b>120-200 tenge per month.</b> All of them used their bonuses for the first time on average on 4th month of receiving bonuses. By that time they had around 500-800 tenge of bonuses.</li>
                    </ul>

                    <p><b>Secondly,</b> “importance” for both jobs is low indicating that the user don’t find his/her job urgent.</p>

                    <p>Taking these 2 facts into consideration, I had the following main insight:</p>

                    <img src={main_insight} alt="Main insight" loading="lazy" />

                </div>

            </div>
        </div >
    );
}
