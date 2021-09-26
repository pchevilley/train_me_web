import { AppBarButton } from "./AppBarButton";

import './AppBar.css';
import { useState } from "react";

export function AppBar() {
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <section className="app-bar">
            <AppBarButton icon="bars" onClick={() => setMenuVisible(!menuVisible)}/>
            <AppBarButton icon="calendar-week"  onClick={() => {}} />
            <AppBarButton icon="users" onClick={() => {}} />
            <AppBarButton icon="bell" onClick={() => {}} />

            <div className={'app-bar__extension ' +  (menuVisible ? 'app-bar__extension--visible' : null) }>
                <div></div>
                <div>Calendar</div>
                <div>Members</div>
                <div>Notifications</div>
            </div>
        </section>
    );
}