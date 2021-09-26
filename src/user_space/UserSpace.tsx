import "./UserSpace.css"
import { AppBar } from "./AppBar";

export function UserSpace() {
    return (<section className="user-space">
        <AppBar />
        <h2>Coucou user</h2>
    </section>);
}