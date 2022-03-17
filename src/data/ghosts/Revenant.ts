import {Ghost} from "./Ghost";
import {FreezingTemperatures, GhostOrb, GhostWriting} from "../evidence";

export default {
    name: 'Revenant',
    evidence: [
        GhostWriting,
        GhostOrb,
        FreezingTemperatures,
    ]
} as Ghost;