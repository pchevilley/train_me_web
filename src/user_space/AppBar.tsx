import { AppBarButton } from "./AppBarButton";

import './AppBar.css';
import { useState } from "react";

export function AppBar() {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <section className={'app-bar ' + (menuVisible && "app-bar--extended")}>
            <AppBarButton icon="bars" onClick={() => setMenuVisible(!menuVisible)}/>
            <AppBarButton icon="calendar-week" label="Clubs" onClick={() => {}} />
            <AppBarButton icon="calendar-week" label="Calendar" onClick={() => {}} />
            <AppBarButton icon="users" label="Members" onClick={() => {}} />
            <AppBarButton icon="bell" label="Notifications" onClick={() => {}} />
        </section>
    );
}