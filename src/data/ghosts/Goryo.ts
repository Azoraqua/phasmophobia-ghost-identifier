import {Ghost} from "./Ghost";
import {DotsProjector, EMF5, Fingerprints} from "../evidence";

export default {
    name: 'Goryo',
    evidence: [
        DotsProjector,
        EMF5,
        Fingerprints,
    ]
} as Ghost;