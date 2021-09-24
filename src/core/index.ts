import './firebase';

import { Authentication } from "./authentication";

export const core = {
    authentication: new Authentication()
};