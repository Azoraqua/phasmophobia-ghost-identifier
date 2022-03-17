import {Ghost} from "./Ghost";
import {Fingerprints, FreezingTemperatures, GhostWriting} from "../evidence";

export default {
    name: 'Demon',
    description: {
        strengths: 'Attacks more often',
        weaknesses: 'Successful Ouija board attempt does not lower sanity'
    },
    evidence: [
        GhostWriting,
        Fingerprints,
        FreezingTemperatures
    ]
} as Ghost;