import "./index.css";
import ProfilePic from './profile_pic.png';
import ProfilePicLow from './profile_pic_low.png';

import { LazyImage } from "../../Image";

export function ProfileBlock() {
    return (
        <div className="Profile-container">
            <div className="Profile">
                <div className="Profile-title">
                    <LazyImage src={ProfilePic} alt="me :3" className="Profile-pic" placeholder={ProfilePicLow} />
                    <div className="Profile-title-text">
                        <div>
                            <u><b>Amina Alen</b></u>
                        </div>
                        <div>
                            UX/UI designer
                        </div>
                        <div>
                            Cat & croissant lover
                        </div>
                    </div>
                </div>
                <div className="Profile-bio">
                    <b>Bio:</b>
                    <br />
                    In 5th grade I came up with a clear career choice of a designer. But finding out which one wasn’t an easy task which took me 8 years. I was considering interior design and even tried myself as a visual designer...
                </div>
            </div>
        </div >
    );
}