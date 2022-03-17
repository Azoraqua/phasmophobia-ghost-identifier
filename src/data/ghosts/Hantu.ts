import {Ghost} from "./Ghost";
import {Fingerprints, FreezingTemperatures, GhostOrb} from "../evidence";

export default {
    name: 'Hantu',
    evidence: [
        GhostOrb,
        Fingerprints,
        FreezingTemperatures,
    ]
} as Ghost;