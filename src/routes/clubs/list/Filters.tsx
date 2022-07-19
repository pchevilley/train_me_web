import { useState } from "react";
import { Input, InputType } from "../../../shared/Input";

import "./Filters.scss";


export function Filters() {
  const sports = ["Triathlon", "Running", "Swimming", "Cycling", "Musculation"];
  const areas = ["Triathlon", "Running", "Swimming", "Cycling", "Musculation"];
  const orders = ["Price asc", "Price desc"];

  const [searchTerms, setSearchTerms] = useState("");
  const [sport, setSport] = useState(sports[0]);
  const [area, setArea] = useState(areas[0]);
  const [order, setOrder] = useState(orders[0]);

  return (
    <section className="club-list__filters">
      <Input
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
        type={InputType.Text}
        placeholder="Search..."
        className="club-list__filters__search-field"
      />
      <Input
        value={sport}
        options={sports}
        onChange={(e) => setSport(e.target.value)}
        type={InputType.Select}
        className="club-list__filters__sports"
      />
      <Input
        value={area}
        options={areas}
        onChange={(e) => setArea(e.target.value)}
        type={InputType.Select}
        className="club-list__filters__area"
      />
      <span className="flex-filler"></span>
      <Input
        value={order}
        options={orders}
        onChange={(e) => setOrder(e.target.value)}
        type={InputType.Select}
        className="club-list__filters__order"
      />
    </section>
  );
}
