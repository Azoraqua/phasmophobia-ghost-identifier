import {Ghost} from "./Ghost";
import { DotsProjector, GhostOrb, Fingerprints } from "../evidence";

export default {
    name: 'Banshee',
    description: {
        strengths:  'Targets only one player at a time.',
        weaknesses: 'Less aggressive when near a crucifix.',
    },
    evidence: [
        DotsProjector,
        GhostOrb,
        Fingerprints,
    ]
} as Ghost;