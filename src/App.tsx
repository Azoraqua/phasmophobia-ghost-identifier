import React, {FC, FormEvent, useEffect, useState} from 'react';
import './App.scss';

import {
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
    Yurei,
} from "./data/ghosts";
import {Close, Info as InfoIcon} from "@mui/icons-material";
import $ from 'jquery';
import {
    DotsProjector,
    EMF5,
    Fingerprints,
    FreezingTemperatures,
    GhostOrb,
    GhostWriting,
    SpiritBox
} from "./data/evidence";
import {Evidence} from "./data/evidence";

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

const EVIDENCE = [
    EMF5,
    GhostOrb,
    GhostWriting,
    SpiritBox,
    Fingerprints,
    FreezingTemperatures,
    DotsProjector,
];

function App() {
    type Information = { type: 'GHOST' | 'EVIDENCE', content: any, extra?: { name?: string } };
    const [information, setInformation] = useState<Information | undefined>(undefined);
    const [evidenceSelected, setEvidenceSelected] = useState<Evidence[]>([]);
    const [possibilities, setPossibilities] = useState<string[]>([]);
    const [result, setResult] = useState<string | undefined>();

    // Currently, this effect is not needed but is there to prevent warnings (As CI's tend to error out because of them).
    useEffect(() => {
        setResult(undefined);
        $('input[type="text"]').focus();
    }, []);

    setInterval(() => {
        const search = $('input[type="text"]')

        // if search is not focused, focus it
        if (!search.is(':focus')) {
            search.focus();
        }
    }, 100);

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
        <>
            <main>
                <h1 style={{textTransform: 'capitalize'}}>{process.env.REACT_APP_NAME?.replaceAll('-', ' ')}</h1>

                <div className={'card-container'}>
                    <div className={'card card-main'}>
                        <section aria-label={'Evidence'}>
                            <h1>Evidence</h1>
                            {/*<hr />*/}

                            <div className={'list'}>
                                {EVIDENCE.map(e => (
                                    <div className={'evidence'} key={e.name}>
                                        <input type={'checkbox'} id={`evidence-${e.name.replaceAll(' ', '-')}`}/>
                                        <label htmlFor={`ghost-${e.name.replaceAll(' ', '-')}`}>{e.name}</label>

                                        {e.description && (
                                            <InfoIcon className={'info-icon'} onClick={() => {
                                                setInformation({
                                                    type: 'EVIDENCE',
                                                    content: e.description,
                                                    extra: {
                                                        name: e.name
                                                    }
                                                });
                                            }}/>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section aria-label={'Ghosts'}>
                            <h1>Ghosts</h1>
                            {/*<hr />*/}

                            <div className={'list'}>
                                {GHOSTS.map((g, i) => (
                                    <div className={'ghost'} key={g.name}>
                                        <input type={'checkbox'} id={`ghost-${g.name.toLowerCase()}`}/>
                                        <label htmlFor={`ghost-${g.name.toLowerCase()}`}>{g.name}</label>

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
                        <>
                            <Close className={'close'} onClick={() => setInformation(undefined)}/>

                            <h1>Information: {information?.extra?.name}</h1>

                            <div>
                                {typeof information?.content == "string" ? information.content : (
                                    <>
                                        <section className={'ghost-strengths'}>
                                            <h3>Strengths</h3>

                                            {information && (typeof information.content.strengths == "string" ? (
                                                <p>{information.content.strengths}</p>
                                            ) : (
                                                information.content.strengths.map((s: string) => (
                                                    <span key={s}>{s}</span>
                                                ))
                                            )) || 'None'}
                                        </section>

                                        <section className={'ghost-weaknesses'}>
                                            <h3>Weaknesses</h3>


                                            {information && (typeof information.content.weaknesses == "string" ? (
                                                <p>{information.content.weaknesses}</p>
                                            ) : (
                                                information.content.weaknesses.map((w: string) => (
                                                    <span key={w}>{w}</span>
                                                ))
                                            )) || 'None'}
                                        </section>
                                    </>
                                )}
                            </div>

                            <div>
                                <h2>Evidence</h2>

                                {GHOSTS.find(g => g.name === information?.extra?.name)?.evidence?.map(e => (
                                    <p key={e.name}>{e.name}</p>
                                ))}
                            </div>
                        </>
                    </div>
                </div>
            </main>

            <footer>
                <span>Made by <a href={'https://github.com/Azoraqua'}>Azoraqua</a></span>
                <span>Version {process.env.REACT_APP_VERSION}</span>
            </footer>
        </>
    );
}

export default App;
