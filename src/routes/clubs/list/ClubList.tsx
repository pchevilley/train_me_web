import { useState } from "react";

import { Header } from "./Header";
import { Filters } from "./Filters";
import { Results } from "./Results";
import { Modal } from "../../../shared/Modal";

import "./ClubList.css";
import { CreateModal } from "./CreateModal";

export function ClubList() {
  const [currentModal, setCurrentModal] = useState("");

  return (
    <section className="club-list">
      <div className="club-list__body">
        <Header onCreateClub={() => setCurrentModal("create")} />
        <Filters />
        <Results />
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
