import './Navbar.css';
import appLogo from '../assets/app-logo.svg';

import { NavLink } from './NavLink';
import { Button } from '../shared/Button';

export function Navbar() {
    return (
        <nav className="navbar">
            <img src={appLogo} alt="" />
            <ul className="navbar__links">
                <NavLink name="Features" path="/features" />
                <NavLink name="Pricing" path="/pricing" />
                <NavLink name="About" path="/about" />
            </ul>
            <div className="flex-filler"></div>
            <NavLink name="Log in" path="" />
            <Button className="navbar__login" label="Register" style="primary" />
        </nav>
    );
}