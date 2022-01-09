import { Header } from "./Header";
import { Filters } from "./Filters";
import { Results } from "./Results";

import './ClubList.css';

export function ClubList() {
    return (
        <section className="club-list">
            <div className="club-list__body">
                <Header />
                <Filters />
                <Results />
            </div>
            <div className="club-list__panel"></div>
        </section>
    );
}