import "./index.css";
import "./ActionBlock.css"

export function ActionBlock({texts, buttonText, buttonLink}) {
    return (
        <div className="ActionBlock">
            <div className="TextSection">
                {texts.map((text) => (
                    <p>{text}</p>
                ))}
            </div>
            <a className="link no-hover-effect ButtonsSection" target="_blank" href={buttonLink}>
                <div className="Button">
                    {buttonText}
                </div>
            </a>
        </div >
    );
}