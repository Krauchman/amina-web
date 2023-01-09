import "./index.css";

export function PhotoCard(props) {
    return (
        <div className="Photo-Card">
            <div className="Photo-Card-img-container">
                <img alt="example" src={props.src} className="Photo-Card-img" />
            </div>
            <div className="Photo-Card-title">
                {props.title}
            </div>
        </div>
    );
}