export function Filters() {
    return (
        <section className="club-list__filters">
            <input type="text" className="club-list__filters__search-field" />
            <select name="" id="" className="club-list__filters__sports">
                <option value="">Triathlon</option>
                <option value="">Running</option>
                <option value="">Swimming</option>
                <option value="">Cycling</option>
                <option value="">Musculation</option>
            </select>
            <select name="" id="" className="club-list__filters__area">
                <option value="">Greater Montreal</option>
                <option value="">Lanaudiere</option>
                <option value="">Laurentides</option>
                <option value="">Quebec</option>
            </select>
            <select name="" id="" className="club-list__filters__order">
                <option value="">Price asc</option>
                <option value="">Price desc</option>
            </select>
        </section>
    );
}