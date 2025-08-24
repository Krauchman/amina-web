import { HashLink as Link } from 'react-router-hash-link';

import NavbarLogo from './media/navbar-logo.png';
import LinkArrowWhite from './media/link-arrow.svg';

export function NavbarV2() {
    return (
        <div className="v2-navbar">
            <img src={NavbarLogo} alt="logo" className="v2-navbar-logo" />
            <div className="v2-navbar-links">
                <Link smooth to="/#works" className="v2-link v2-navbar-link">
                    Works
                </Link>
                <Link smooth to="/#values" className="v2-link v2-navbar-link">
                    Values
                </Link>
                <Link smooth to="/#contact" className="v2-link v2-navbar-link">
                    Contact
                </Link>
                <Link to="/get-in-touch" className="v2-link v2-navbar-link out">
                    Get in touch
                    <img src={LinkArrowWhite} alt="link-arrow" className="arrow" />
                </Link>
            </div>
        </div>
    );
}