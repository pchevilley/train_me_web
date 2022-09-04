import './firebase';

import { Authentication } from "./authentication";
import { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

export const core = {
    authentication: new Authentication(),
    clubs: {
        getClubs: async () => {
            const col = collection(db, "clubs");
            const docs = await getDocs(col);
            const clubs: any = [];

            docs.forEach(doc => clubs.push(doc.data()));

            return clubs;
        }
    }
};

//@ts-ignore
window.core = core;