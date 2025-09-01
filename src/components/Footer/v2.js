import "./v2.css";

import FooterPhoto from './media/footer-photo.png';
import StatusDot from './media/status-dot.svg';

export function FooterV2() {
    return (
        <div id="contact" className="v2-block footer">
            <div className="status">
                Open to new
                <span className="v2-no-wrap-group">
                    {/* The extra space chars should on both sides to separate from the previous word and the dot*/}
                    { } opportunities <img src={StatusDot} alt="status" />
                </span>
            </div>
            <div className="contacts">
                <a className="v2-link hoverable" target="_blank" rel="noreferrer" href="mailto:alenamina1010@gmail.com">
                    alenamina1010@gmail.com
                </a>
                <a className="v2-link hoverable" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aminaalen/">
                    LinkedIn
                </a>
            </div>
            <div className="photo-container">
                <img src={FooterPhoto} alt="me" />
            </div>
        </div>
    );
}