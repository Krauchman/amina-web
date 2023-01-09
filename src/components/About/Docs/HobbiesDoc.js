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

import { PhotoCard } from "./PhotoCard";

export function HobbiesDoc() {
    return (
        <div className="Doc-container">
            <div className="Doc">
                <div className="Doc-cell Doc-header-left">
                    <img src={hobbies_header} alt="balling" />
                </div>

                <div className="Doc-cell Doc-header-right">
                    <div>Hobbies 🏀 📸 🍰</div>
                </div>

                <div className="Doc-cell Doc-body">

                    <h1 className="block">I wish I was a cat with 9 lives to have time for all my hobbies 🐈‍⬛</h1>

                    <p className="block">During free time I bake beautiful cakes and take photos on my lovely Fujifilm. I’m also a basketball player of my University female team. My hobbies bring me not only satisfaction and joy but also expose me to people of different backgrounds. This is especially helping as for the UX designer to better understand how different can be people’s daily routine, their user habits and in overall to get knowledge in all these spheres.</p>

                    <div className="block Doc-photo-block">
                        <PhotoCard src={hobby1} title="Graduation Ceremony" />
                        <PhotoCard src={hobby2} title="Local Georgian Cuisine Restaurant" />
                        <PhotoCard src={hobby3} title="My friends on the beach" />
                    </div>

                    <div className="block Doc-photo-block">
                        <PhotoCard src={hobby4} title="Kazakh National Jewerly Store" />
                        <PhotoCard src={hobby5} title="Man with female shoes after Ball" />
                        <PhotoCard src={hobby6} title="Caspian Sea" />
                    </div>

                    <div className="block Doc-photo-block">
                        <PhotoCard src={hobby7} title="Birthday Cake for my Mom" />
                        <PhotoCard src={hobby8} title="Van Gogh Sunflowers Cake" />
                        <PhotoCard src={hobby9} title="8th March Cake with Tulips" />
                    </div>

                    <h1 className="block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1>

                    <p className="block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>

                </div>

            </div>
        </div >
    );
}