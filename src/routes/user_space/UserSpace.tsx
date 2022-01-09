import "./UserSpace.css"
import { AppBar } from "./AppBar";
import { Outlet } from "react-router-dom";

export function UserSpace() {
    return (<section className="user-space">
        <AppBar />
        <Outlet />
    </section>);
}