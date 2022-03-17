import {Ghost} from "./Ghost";
import {Fingerprints, GhostWriting, SpiritBox} from "../evidence";

export default {
    name: 'Poltergeist',
    evidence: [
        GhostWriting,
        Fingerprints,
        SpiritBox,
    ]
} as Ghost;