import React, {FC, useEffect, useState} from 'react';
import './App.scss';

import {Evidence, GhostDescription, nameOf} from "./ghosts/Ghost.d";
import Spirit from "./ghosts/Spirit";
import Banshee from "./ghosts/Banshee";
import Demon from "./ghosts/Demon";
import Goryo from "./ghosts/Goryo";
import Hantu from "./ghosts/Hantu";
import Jinn from "./ghosts/Jinn";
import Mare from "./ghosts/Mare";
import Myling from "./ghosts/Myling";
import Obake from "./ghosts/Obake";
import Oni from "./ghosts/Oni";
import Onryo from "./ghosts/Onryo";
import Phantom from "./ghosts/Phantom";
import Poltergeist from "./ghosts/Poltergeist";
import Raiju from "./ghosts/Raiju";
import Revenant from "./ghosts/Revenant";
import Shade from "./ghosts/Shade";
import Mimic from "./ghosts/Mimic";
import Twins from "./ghosts/Twins";
import Wraith from "./ghosts/Wraith";
import Yokai from "./ghosts/Yokai";
import Yurei from "./ghosts/Yurei";
import {useIdGenerator} from "./util/helper";
import {Alert} from "@mui/material";
import {Close, Info as InfoIcon} from "@mui/icons-material";

const GHOSTS = [
    Banshee,
    Demon,
    Goryo,
    Hantu,
    Jinn,
    Mare,
    Myling,
    Obake,
    Oni,
    Onryo,
    Phantom,
    Poltergeist,
    Raiju,
    Revenant,
    Shade,
    Spirit,
    Mimic,
    Twins,
    Wraith,
    Yokai,
    Yurei
];

const EVIDENCE: Evidence[] = [
    Evidence.EMF_LEVEL_5,
    Evidence.GHOST_ORB,
    Evidence.GHOST_WRITING,
    Evidence.SPIRIT_BOX,
    Evidence.FINGERPRINTS,
    Evidence.FREEZING_TEMPERATURES,
    Evidence.DOTS_PROJECTOR
];

function App() {
    const IdGenerator = useIdGenerator();

    const Evidence: FC<any> = ({name, description}) => {
        const id = IdGenerator.next().value;
        const [descriptionVisible, setDescriptionVisible] = useState<boolean>(false);

        return (
            <div className={'evidence'} onBlur={() => setDescriptionVisible(false)}>
                <input type={'checkbox'} id={`evidence-${id}`}/>
                <label htmlFor={`evidence-${id}`}>{name}</label>

                {description && (
                    <InfoIcon
                        onClick={() => setDescriptionVisible(prev => !prev)}
                        className={'info-icon'}
                    />
                )}

                <div className={'ghost-description'}>
                    {description && descriptionVisible && (
                        <Alert
                            severity={"info"}
                            className={descriptionVisible && 'fade'}
                            onClose={() => setDescriptionVisible(false)}
                            sx={{fontSize: '1.125em', userSelect: 'none'}}
                        >
                            {description}
                        </Alert>
                    )}
                </div>
            </div>
        );
    }

    type Information = { type: 'GHOST' | 'EVIDENCE', content: any, extra: { name?: string } };
    const [information, setInformation] = useState<Information | undefined>(undefined);
    const [evidenceSelected, setEvidenceSelected] = useState<Evidence[]>([]);
    const [possibilities, setPossibilities] = useState<string[]>([]);
    const [result, setResult] = useState<string | undefined>();

    // Currently, this effect is not needed but is there to prevent warnings (As CI's tend to error out because of them).
    useEffect(() => {
        setResult(undefined);
    }, []);

    useEffect(() => {
        // Check if selected evidence is enough to determine the ghost.
        const ghost = GHOSTS.find(ghost => ghost.evidence.every(e => evidenceSelected.includes(e)))

        if (ghost) {
            setResult(ghost.name);
        } else {
            setResult(undefined);
        }
    }, [evidenceSelected]);

    // @ts-ignore
    return (
        <main>
            <h1>Phasmophobia Ghost Identifier</h1>

            <div className={'card-container'}>
                <div className={'card card-main'}>
                    <section aria-label={'Evidence'}>
                        <h1>Evidence</h1>
                        {/*<hr />*/}

                        <div className={'list'}>
                            {EVIDENCE.map(e => (
                                <Evidence name={nameOf(e)} onClick={() => {
                                    if (evidenceSelected.includes(e)) {
                                        setEvidenceSelected(evidenceSelected.filter(e2 => e2 !== e));
                                    } else {
                                        setEvidenceSelected([...evidenceSelected, e]);
                                    }
                                }}/>
                            ))}
                        </div>
                    </section>

                    <section aria-label={'Ghosts'}>
                        <h1>Ghosts</h1>
                        {/*<hr />*/}

                        <div className={'list'}>
                            {GHOSTS.map((g, i) => (
                                <div className={'ghost'}>
                                    <input type={'checkbox'} id={`ghost-${i}`}/>
                                    <label htmlFor={`ghost-${i}`}>{g.name}</label>

                                    {g.description && (
                                        <InfoIcon className={'info-icon'} onClick={() => {
                                            setInformation({
                                                type: 'GHOST',
                                                content: g.description,
                                                extra: {
                                                    name: g.name
                                                }
                                            });
                                        }}/>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>

                    <section aria-label={'Conclusion'}>
                        <h1>Conclusion</h1>

                        <span className={'result'}>
                        <h2>{result || 'Not Yet Discovered'}</h2>
                    </span>
                    </section>
                </div>

                <div id={'card-aside'} className={`card card-aside ${information && 'show'}`}>
                    <Close className={'close'} onClick={() => setInformation(undefined)}/>

                    {information &&
                        <>
                            <h1>Information: {information.extra.name}</h1>

                            <div>
                                {typeof information.content == "string" ? information.content : (
                                    <>
                                        <section className={'ghost-strengths'}>
                                            <h3>Strengths</h3>

                                            {information && (typeof information.content.strengths == "string" ? (
                                                <p>{information.content.strengths}</p>
                                            ) : (
                                                information.content.strengths.map((s: string) => (
                                                    <span>{s}</span>
                                                ))
                                            ))}
                                        </section>

                                        <section className={'ghost-weaknesses'}>
                                            <h3>Weaknesses</h3>

                                            {information && (typeof information.content.weaknesses == "string" ? (
                                                <p>{information.content.weaknesses}</p>
                                            ) : (
                                                information.content.weaknesses.map((w: string) => (
                                                    <span>{w}</span>
                                                ))
                                            ))}
                                        </section>
                                    </>
                                )}
                            </div>

                            <div>
                                <h2>Evidence</h2>

                                {GHOSTS.find(g => g.name === information.extra.name)?.evidence && (
                                    <>
                                        { GHOSTS.find(g => g.name === information.extra.name)?.evidence.map((e: number) => (
                                            <p>{nameOf(e)}</p>
                                        ))}
                                    </>
                                )}
                            </div>
                        </>
                    }
                </div>
            </div>
        </main>
    );
}

export default App;