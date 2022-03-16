import {Evidence, Ghost} from "./Ghost.d";
import {AlertTitle} from "@mui/material";

export default {
    name: 'Banshee',
    description: <>
        <section className={'ghost-strengths'}>
            <AlertTitle sx={{ fontSize: '1.2em', fontFamily: 'Lazy Dog' }}>Strengths</AlertTitle>
            <p>
                Only targets one person at a time.
            </p>
        </section>

        <section className={'ghost-weaknesses'}>
            <AlertTitle sx={{ fontSize: '1.2em', fontFamily: 'Lazy Dog'}}>Weaknesses</AlertTitle>
            <p>
                Less aggressive when near a crucifix.
            </p>
        </section>
    </>,
    evidence: [
        Evidence.DOTS_PROJECTOR,
        Evidence.GHOST_ORB,
        Evidence.FINGERPRINTS
    ]
} as Ghost;