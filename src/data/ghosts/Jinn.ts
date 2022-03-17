import {Ghost} from "./Ghost";
import {EMF5, Fingerprints, FreezingTemperatures} from "../evidence";

export default {
    name: 'Jinn',
    evidence: [
        EMF5,
        Fingerprints,
        FreezingTemperatures,
    ]
} as Ghost;