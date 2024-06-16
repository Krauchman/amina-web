import "./index.css";
import "./ActionBlock.css"

export function ActionBlock({ texts, buttonText, buttonLink }) {
    return (
        <div className="ActionBlock">
            <div className="TextSection">
                {texts.map((text) => (
                    <p key={buttonLink}>{text}</p>
                ))}
            </div>
            <a className="link no-hover-effect ButtonsSection" target="_blank" rel="noreferrer" href={buttonLink}>
                <div className="Button">
                    {buttonText}
                </div>
            </a>
        </div >
    );
}