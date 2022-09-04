import classNames from "classnames";
import { Button } from "../../../../shared/Button";
import { Club } from "../Results";

import "./SelectedPanel.scss";

export function SelectedPanel({club}: {club?: Club}) {
    const classes = classNames("selected-panel", club && "selected-panel--visible");

    return (
        <section className={classes}>
            {club && (
                <>
                    <img src={club.image} alt="" className="selected-panel__img" />
                    <div className="selected-panel__content">
                        <h2 className="selected-panel__title">{club.name}</h2>
                        <p className="selected-panel__description">{club.description}</p>
                        <Button className="selected-panel__join" btnStyle="primary" label="Join the club"/>
                    </div>
                </>
            )}
        </section>
    );
}