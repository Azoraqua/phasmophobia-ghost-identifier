export enum Evidence {
    EMF_LEVEL_5,
    FINGERPRINTS,
    GHOST_WRITING,
    FREEZING_TEMPERATURES,
    DOTS_PROJECTOR,
    GHOST_ORB,
    SPIRIT_BOX
}

export type GhostDescription = string | { strengths: string | string[], weaknesses: string | string[] };

export type Ghost = {

    readonly name: string;

    readonly description: GhostDescription;

    readonly evidence: Evidence[];
}

export function nameOf(e: Evidence): string {
    switch (e) {
        case Evidence.EMF_LEVEL_5:
            return 'EMF Level 5';
        case Evidence.FINGERPRINTS:
            return 'Fingerprints';
        case Evidence.GHOST_WRITING:
            return 'Ghost Writing';
        case Evidence.FREEZING_TEMPERATURES:
            return 'Freezing Temperatures';
        case Evidence.DOTS_PROJECTOR:
            return 'D.O.T.S Projector';
        case Evidence.GHOST_ORB:
            return 'Ghost Orb';
        case Evidence.SPIRIT_BOX:
            return 'Spirit Box';
        default:
            throw Error('Unknown evidence type.');
    }
}