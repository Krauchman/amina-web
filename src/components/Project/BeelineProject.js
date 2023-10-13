import "./index.css";
import "./BeelineProject.css";
import { Helmet } from "react-helmet";

import banner from "./media/beeline/banner.png";
import banner_low from "./media/beeline/banner-low.png";

import { LazyImage } from "../Image";
import { ActionBlock } from "./ActionBlock";

export function BeelineProject() {
    return (
        <div className="ProjectPage BeelineProject">

            <Helmet>
                <title>Beeline</title>
            </Helmet>

            <div className="Banner">
                <LazyImage src={banner} alt="Beeline" placeholder={banner_low} />
            </div >

            <div className="Content StackedCardSection">

                <div className="Section">
                    <div className="Header">
                        <div className="Title">B2B Personal Office, Beeline</div>

                        <div className="Timeline">Timeline</div>
                        <div className="Timeline-content">April 2023 - Present</div>

                        <div className="Responsabilities">Role</div>
                        <div className="Responsabilities-content">Product designer</div>

                        <div className="Tools">Tools Used</div>
                        <div className="Tools-content">Figma, Miro, Google Analytics</div>
                    </div>
                </div>

                
                <div className="Section">
                    <h1>SUMMARY</h1>

                    <h2>Context</h2>

                    <p>Beeline is one of the biggest telco companies in CIS. Apart from its sales in B2C segment, it also contracts with companies to sell business corporate telephone numbers. B2B Personal Office digitalizes operations that are carried out on business numbers to provide ease of use and efficiency in terms financial and time resources.</p>

                    <h2>Delivering design solutions for monetization</h2>

                    <p>During my time here I worked on discovering potential ways of monetization for the product and launched the final solution with my team. I began by conducting competitive analysis which helped me not only to see how competitors monetize their products but also to find out best practices and trends. I presented results of the analysis and my suggestions for monetization to my lead designer, stakeholders and product team. After our brainstorm discussions we decided to implement one of my suggested solution: cross sales of other Beeline B2B products on our main page. Within one month the click rate on promo banners achieved >1000 (with MAU 2800) and the number of successful sales was >40, although we were expecting much lower numbers. Our further plans include conducting user interviews with clients who purchased products on our main page to investigate personas and scenarios.</p>

                    <h2>Exploring usability issues</h2>

                    <p>Apart from monetization problem, I also addressed the issue of usability and intuitiveness of the interface. Via the survey sent to Beeline managers working in call center, I found out that most of the operations available to clients are performed by our internal managers in call center. This finding indicates that there are some stop factors for clients to use the product themselves. I conducted user interviews with our clients and analyzed heat maps and screen recordings to notice any common patterns. After I combined my research findings, I concluded that clients indicate navigation and some specific functionality as unintuitive to use. I demonstrated results of the research to stakeholders. For the first iteration of the solution we decided to create more comprehensive instruction manual of our interface in FAQ page.</p>
                </div>


                <div className="Section">
                    <h1>TAKEAWAYS</h1>

                    <h2>Designing experience in B2B segment</h2>

                    <p>Users behave and think differently whether it is B2B or B2C segment. The key difference is how users make decisions: in B2C the nature of decisions is mostly impulsive and short-term, meanwhile for B2B decisions have long-term implications. Keeping this in mind, I had to discover what will be the best practices for my specific B2B user group. Only after multiple research iterations I was able to see a bigger picture of how users interact with my product. The experience map which I obtained from research findings highlighted how important to closely collaborate with other departments in my company who interconnect with the user from the very beginning to the end of sales funnel (sales managers and customer service specialists). Now I always take into consideration the significance of delivering consistent experience across all stages of customer journey when exploring design decisions.</p>
                    
                    <h2>Elevating research skills </h2>

                    <ul>
                        <li>
                            Data driven design approach puts design process on another level. Design decisions I made that relied on numerical data showed the impact of design changes and further facilitated getting attention from stakeholders on critical problems.
                        </li>
                        <li>
                            Jobs to be done (JTBD) sometimes can be more effective than traditional user personas when trying to understand the patterns of user behavior.
                        </li>
                        <li>
                            Insights obtained from quantitive research should be supported (when possible in terms of time and money resources) with qualitative data to provide a better statistical significance. When I communicate with users and analyze their answers, there is always some room for misinterpretation of data or other factors involved. That’s I try to reaffirm my conclusions by conducting complementary quantitative research. 
                        </li>
                    </ul>

                    <ActionBlock 
                        texts={["Due to NDA, this project content has been protected. Interested in learning more?"]}
                        buttonText="Email me!"
                        buttonLink="mailto:alenamina1010@gmail.com"
                    />
                </div>

            </div>
        </div >
    );
}
