import {Evidence} from "../evidence";

export type Ghost = {

    readonly name: string;

    readonly description: string | { strengths: string | string[], weaknesses: string | string[] };

    readonly evidence: Evidence[];
}