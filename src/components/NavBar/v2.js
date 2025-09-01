import NavbarLogo from './media/navbar-logo.png';

export function NavbarV2() {
    return (
        <div className="v2-navbar">
            <a href="/" className="v2-link">
                <img src={NavbarLogo} alt="logo" className="v2-navbar-logo" />
            </a>
            <div className="v2-navbar-links">
                <a href="/#works" className="v2-link hoverable v2-navbar-link">
                    Works
                </a>
                <a href="/#values" className="v2-link hoverable v2-navbar-link">
                    Values
                </a>
                <a href="#contact" className="v2-link hoverable v2-navbar-link">
                    Contact
                </a>
            </div>
        </div>
    );
}