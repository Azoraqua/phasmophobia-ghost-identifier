import {Ghost} from "./Ghost";
import {FreezingTemperatures, GhostOrb, SpiritBox} from "../evidence";

export default {
    name: 'Onryo',
    evidence: [
        GhostOrb,
        FreezingTemperatures,
        SpiritBox,
    ]
} as Ghost;