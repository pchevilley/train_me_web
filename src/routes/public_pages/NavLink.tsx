import './NavLink.css';

import { Link } from 'react-router-dom';

type NavLinkProps = {
    name: string
    path: string
};

export function NavLink(props: NavLinkProps) {
    return (
        <li className="navlink">
            <Link className="navlink__link" to={props.path}>{props.name}</Link>
        </li>
    );
}