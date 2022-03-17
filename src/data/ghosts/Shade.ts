import {Ghost} from "./Ghost";
import {EMF5, FreezingTemperatures, GhostWriting} from "../evidence";

export default {
    name: 'Shade',
    evidence: [
        GhostWriting,
        EMF5,
        FreezingTemperatures,
    ]
} as Ghost;