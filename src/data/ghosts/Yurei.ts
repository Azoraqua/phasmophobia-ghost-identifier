import {Ghost} from "./Ghost";
import {DotsProjector, FreezingTemperatures, GhostOrb} from "../evidence";

export default {
    name: 'Yurei',
    evidence: [
        DotsProjector,
        GhostOrb,
        FreezingTemperatures,
    ]
} as Ghost;