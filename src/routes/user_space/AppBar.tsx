import { AppBarButton } from "./AppBarButton";

import './AppBar.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AppBar() {
    const [menuVisible, setMenuVisible] = useState(false);
    const navigate = useNavigate();

    return (
        <section className={'app-bar ' + (menuVisible && "app-bar--extended")}>
            <AppBarButton icon="bars" onClick={() => setMenuVisible(!menuVisible)}/>
            <AppBarButton icon="calendar-week" label="Clubs" onClick={() => navigate('/u/clubs')} />
            <AppBarButton icon="calendar-week" label="Calendar" onClick={() => {}} />
            <AppBarButton icon="users" label="Members" onClick={() => {}} />
            <AppBarButton icon="bell" label="Notifications" onClick={() => {}} />
        </section>
    );
}