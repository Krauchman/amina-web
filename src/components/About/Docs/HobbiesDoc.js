import "./index.css";
import hobbies_header from "./photos/hobbies_header.png"

import hobby1 from "./photos/hobby1.png";
import hobby2 from "./photos/hobby2.png";
import hobby3 from "./photos/hobby3.png";
import hobby4 from "./photos/hobby4.png";
import hobby5 from "./photos/hobby5.png";
import hobby6 from "./photos/hobby6.png";
import hobby7 from "./photos/hobby7.png";
import hobby8 from "./photos/hobby8.png";
import hobby9 from "./photos/hobby9.png";

import hobbies_header_low from "./photos/hobbies_header_low.png"

import hobby1_low from "./photos/hobby1_low.png";
import hobby2_low from "./photos/hobby2_low.png";
import hobby3_low from "./photos/hobby3_low.png";
import hobby4_low from "./photos/hobby4_low.png";
import hobby5_low from "./photos/hobby5_low.png";
import hobby6_low from "./photos/hobby6_low.png";
import hobby7_low from "./photos/hobby7_low.png";
import hobby8_low from "./photos/hobby8_low.png";
import hobby9_low from "./photos/hobby9_low.png";

import { PhotoCard } from "./PhotoCard";
import { LazyImage } from "../../Image";

export function HobbiesDoc() {
    return (
        <div className="Doc-container">
            <div className="Doc">
                <div className="Doc-cell Doc-header-left">
                    <LazyImage src={hobbies_header} alt="balling" placeholder={hobbies_header_low} />
                </div>

                <div className="Doc-cell Doc-header-right">
                    <div>Hobbies 🏀 📸 🍰</div>
                </div>

                <div className="Doc-cell Doc-body">

                    <h1 className="block">I wish I was a cat with 9 lives to have time for all my hobbies 🐈‍⬛</h1>

                    <p className="block">During free time I bake beautiful cakes and take photos on my lovely Fujifilm. I’m also a basketball player of my University female team. My hobbies bring me not only satisfaction and joy but also expose me to people of different backgrounds. This is especially helping as for the UX designer to better understand how different can be people’s daily routine, their user habits and in overall to get knowledge in all these spheres.</p>

                    <div className="block Doc-photo-block">
                        <PhotoCard src={hobby1} title="Graduation Ceremony" placeholder={hobby1_low} />
                        <PhotoCard src={hobby2} title="Local Georgian Cuisine Restaurant" placeholder={hobby2_low} />
                        <PhotoCard src={hobby3} title="My friends on the beach" placeholder={hobby3_low} />
                        <PhotoCard src={hobby4} title="Kazakh National Jewerly Store" placeholder={hobby4_low} />
                        <PhotoCard src={hobby5} title="Man with female shoes after Ball" placeholder={hobby5_low} />
                        <PhotoCard src={hobby6} title="Caspian Sea" placeholder={hobby6_low} />
                        <PhotoCard src={hobby7} title="Birthday Cake for my Mom" placeholder={hobby7_low} />
                        <PhotoCard src={hobby8} title="Van Gogh Sunflowers Cake" placeholder={hobby8_low} />
                        <PhotoCard src={hobby9} title="8th March Cake with Tulips" placeholder={hobby9_low} />
                    </div>

                </div>

            </div>
        </div >
    );
}