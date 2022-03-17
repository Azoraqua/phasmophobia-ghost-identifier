import {Ghost} from "./Ghost";
import {Fingerprints, FreezingTemperatures, SpiritBox} from "../evidence";

export default {
    name: 'The Mimic',
    evidence: [
        Fingerprints,
        FreezingTemperatures,
        SpiritBox,
    ]
} as Ghost;