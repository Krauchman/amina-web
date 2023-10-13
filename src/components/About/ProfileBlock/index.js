import "./index.css";
import ProfilePic from './profile_pic.png';
import ProfilePicLow from './profile_pic_low.png';

import { LazyImage } from "../../Image";

export function ProfileBlock() {
    return (
        <div className="Profile-container">
            <div className="Profile">
                <div className="Profile-title">
                    <div className="Profile-pic-container">
                        <LazyImage src={ProfilePic} alt="me :3" className="Profile-pic" placeholder={ProfilePicLow} />
                    </div>
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
                    Making world a better place by moving pixels and observing people
                </div>
            </div>
        </div >
    );
}