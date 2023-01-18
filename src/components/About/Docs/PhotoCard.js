import "./index.css";

import { LazyImage } from "../../Image";

export function PhotoCard(props) {
    return (
        <div className="Photo-Card">
            <div className="Photo-Card-img-container">
                <LazyImage alt="example" src={props.src} className="Photo-Card-img" placeholder={props?.placeholder} />
            </div>
            <div className="Photo-Card-title">
                {props.title}
            </div>
        </div>
    );
}