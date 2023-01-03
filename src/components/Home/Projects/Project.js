import "./Project.css";

export function Project(props) {
    const name = props.name
    const description = props.description

    return (
        <div className="Project-container">
            <div className="Project">
                {name}
                {description}
            </div>
        </div>
    );
}