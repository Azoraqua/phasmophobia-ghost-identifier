import React, {FC, useEffect, useState} from 'react';
import './App.scss';

import {Evidence, nameOf} from "./ghosts/Ghost.d";
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
import {Info as InfoIcon} from "@mui/icons-material";

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
                            sx={{ fontSize: '1.125em', userSelect: 'none' }}
                        >
                            {description}
                        </Alert>
                    )}
                </div>
            </div>
        );
    }

    const Ghost: FC<any> = ({name, description, evidence}) => {
        const id = IdGenerator.next().value;
        const [descriptionVisible, setDescriptionVisible] = useState<boolean>(false);

        return (
            <div className={'ghost'} onBlur={() => setDescriptionVisible(false)}>
                <input type={'checkbox'} id={`ghost-${id}`}/>
                <label htmlFor={`ghost-${id}`}>{name}</label>

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
                            sx={{ fontSize: '1.125em', userSelect: 'none' }}
                        >
                            {description}
                        </Alert>
                    )}
                </div>
            </div>
        );
    }

    const [result, setResult] = useState<string | undefined>(undefined);

    return (
        <main className={'card'}>
            <h1>Phasmophobia Ghost Identifier</h1>

            <section aria-label={'Evidence'}>
                <h2>Evidence</h2>
                {/*<hr />*/}

                <div className={'list'}>
                    {EVIDENCE.map(e => (
                        <Evidence name={nameOf(e)}/>
                    ))}
                </div>
            </section>

            <section aria-label={'Ghosts'}>
                <h2>Ghosts</h2>
                {/*<hr />*/}

                <div className={'list'}>
                    {GHOSTS.map((g, i) => (
                        <Ghost {...g} />
                    ))}
                </div>
            </section>

            <section aria-label={'Conclusion'}>
                <h2>Conclusion</h2>

                <span className={'result'}>
                    <h3>{result || 'Not Yet Discovered'}</h3>
                </span>
            </section>
        </main>
    );
}

export default App;
