import { Button } from "../../../shared/Button";
import "./Results.scss";

export interface Club {
    id: number;
    image: string;
    name: string;
    location: string;
    members: number;
    price: string;
    registration: boolean;
    description: string;
}
interface ResultsProps {
    onCreateClub: () => void;
    onSelectClub: (c?: Club) => void;
    selectedClub?: Club;
    results: Club[];
}

export function Results(props: ResultsProps) {
    const { results, selectedClub, onSelectClub } = props;

    if (!results.length) {
        return <NoResults {...props} />;
    }

    return (
        <table className="club-list__results">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th className="club-list__results__location-header">Area</th>
                    <th className="club-list__results__members-header">Members</th>
                    <th className="club-list__results__price-header">Annual cost</th>
                    <th className="club-list__results__registrations-header">Registrations</th>
                </tr>
            </thead>
            <tbody>
                {results.map((c) => (
                    <ResultItem onClick={onSelectClub} key={c.id} club={c} isSelected={c.id === selectedClub?.id} />
                ))}
            </tbody>
        </table>
    );
}

function ResultItem(props: { club: Club , isSelected: boolean, onClick: (c?:Club)=>void}) {
    const { club, isSelected, onClick } = props;
    return (
        <tr onClick={() => onClick(isSelected ? undefined : club)} className={"club-list__results__item " + (isSelected ? "club-list__results__item--selected" : "")}>
            <td className="club-list__results__item__image-td">
                <img src={club.image} alt="" className="club-list__results__item__image"/>
            </td>
            <td className="club-list__results__item__name">{club.name}</td>
            <td className="club-list__results__item__location">{club.location}</td>
            <td className="club-list__results__item__members">{club.members}</td>
            <td className="club-list__results__item__price">{club.price}</td>
            <td className="club-list__results__item__registrations">{club.registration ? "opened" : "closed"}</td>
        </tr>
    );
}

function NoResults(props: ResultsProps) {
    return (
        <section className="club-list__results">
            <p className="club-list__results__no-result">
                No club is matching the filters. Do you want to{" "}
                <Button
                    onClick={props.onCreateClub}
                    label="create a club"
                    btnStyle="link"
                />{" "}
                ?
            </p>
        </section>
    );
}
