import { useEffect, useState } from "react";

import { Header } from "./Header";
import { Filters } from "./Filters";
import { Club, Results } from "./Results";
import { Modal } from "../../../shared/Modal";

import "./ClubList.css";
import { CreateModal } from "./CreateModal";


const CLUBS_MOCKS: Club[] = [
  {
    id: 1,
    image: "https://picsum.photos/200",
    name: "Triathlon Laval",
    location: "Laval - Rive nord",
    members: 42,
    price: "from 250$",
    registration: true,
    description: "Description blah blach dhwi aoincwaoinawcfopina vwspoeirnv wsokerns oksrnevrovknrwvoprkenvreokv voknver ren k n  rkv nrewkvn elrknv lkernv lkrvn lekvnrv lkrne"
  },
  {
    id: 2, 
    image: "https://picsum.photos/200",
    name: "Triathlon Gatineau",
    location: "Gatineau",
    members: 143,
    price: "from 278$",
    registration: false,
    description: "Description blah blach dhwi aoincwaoinawcfopina vwspoeirnv wsokerns oksrnevrovknrwvoprkenvreokv voknver ren k n  rkv nrewkvn elrknv lkernv lkrvn lekvnrv lkrne"
  },
  {
    id: 3,
    image: "https://picsum.photos/200",
    name: "Triomphe Triathlon",
    location: "Montreal",
    members: 26,
    price: "from 150$",
    registration: true,
    description: "Description blah blach dhwi aoincwaoinawcfopina vwspoeirnv wsokerns oksrnevrovknrwvoprkenvreokv voknver ren k n  rkv nrewkvn elrknv lkernv lkrvn lekvnrv lkrne"
  }
];


export function ClubList() {
  const [currentModal, setCurrentModal] = useState("");
  const [results, setResults] = useState<Club[]>([]); 
  const [selectedClub, setSelectedClub] = useState<Club>();

  useEffect(() => {
    setResults(CLUBS_MOCKS);
  }, []);

  return (
    <section className="club-list">
      <div className="club-list__body">
        <Header onCreateClub={() => setCurrentModal("create")} />
        <Filters />
        <Results onSelectClub={c => setSelectedClub(c)} selectedClub={selectedClub} results={results} onCreateClub={() => setCurrentModal("create")} />
      </div>
      <div className="club-list__panel"></div>

      <ModalMgr modal={currentModal} onClose={() => setCurrentModal("")} />
    </section>
  );
}

function ModalMgr(props: { modal: string, onClose: () => void }) {
  const { modal, onClose } = props;

  if (modal) {
    return <Modal onClose={onClose} open={true} title="Create a club">
        <CreateModal />
    </Modal>;
  }
    
  return null;
}
