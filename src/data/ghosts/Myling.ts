import {Ghost} from "./Ghost";
import {EMF5, Fingerprints, GhostWriting} from "../evidence";

export default {
    name: 'Myling',
    evidence: [
        GhostWriting,
        EMF5,
        Fingerprints,
    ]
} as Ghost;