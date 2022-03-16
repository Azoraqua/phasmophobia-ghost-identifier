import {Evidence, Ghost} from "./Ghost.d";

export default {
    name: 'Banshee',
    description: {
        strengths:  'Targets only one player at a time.',
        weaknesses: 'Less aggressive when near a crucifix.',
    },
    evidence: [
        Evidence.DOTS_PROJECTOR,
        Evidence.GHOST_ORB,
        Evidence.FINGERPRINTS
    ]
} as Ghost;