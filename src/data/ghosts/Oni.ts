import {Ghost} from "./Ghost";
import {DotsProjector, EMF5, FreezingTemperatures} from "../evidence";

export default {
    name: 'Oni',
    evidence: [
        DotsProjector,
        EMF5,
        FreezingTemperatures,
    ]
} as Ghost;