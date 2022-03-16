import {Evidence, Ghost} from "./Ghost.d";

export default {
    name: 'Demon',
    description: {
        strengths: [ 'Attacks more often' ],
        weaknesses: [ 'Successful Ouija board attempt does not lower sanity' ]
    },
    evidence: [
        Evidence.GHOST_WRITING,
        Evidence.FINGERPRINTS,
        Evidence.FREEZING_TEMPERATURES
    ]
} as Ghost;