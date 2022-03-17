import {Ghost} from "./Ghost";
import {DotsProjector, Fingerprints, SpiritBox} from "../evidence";

export default {
    name: 'Phantom',
    evidence: [
        DotsProjector,
        Fingerprints,
        SpiritBox,
    ]
} as Ghost;