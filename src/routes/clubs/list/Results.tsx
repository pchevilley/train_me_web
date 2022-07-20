import { Button } from "../../../shared/Button";

export function Results(props: {onCreateClub: ()=>void}) {
    return (
        <section className="club-list__results">
            <p className="club-list__results__no-result">No club is matching the filters. Do you want to <Button onClick={props.onCreateClub} label="create a club" style="link" /> ?</p>
        </section>
    );
}