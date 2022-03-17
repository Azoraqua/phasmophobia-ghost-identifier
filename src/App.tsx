import React, {useState} from 'react';
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
import {
    DotsProjector,
    EMF5,
    Fingerprints,
    FreezingTemperatures,
    GhostOrb,
    GhostWriting,
    SpiritBox
} from "./data/evidence";
import MainCard from "./components/MainCard";
import InformationCard from "./components/InformationCard";

export const GHOSTS = [
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

export const EVIDENCE = [
    EMF5,
    GhostOrb,
    GhostWriting,
    SpiritBox,
    Fingerprints,
    FreezingTemperatures,
    DotsProjector,
];

export type Information = { type: 'GHOST' | 'EVIDENCE', content: any, extra?: { name?: string } };

function App() {
    const [information, setInformation] = useState<Information | undefined>(undefined);
    const [result, setResult] = useState<string | undefined>();

    return (
        <>
            <main>
                <h1 style={{textTransform: 'capitalize'}}>{process.env.REACT_APP_NAME?.replaceAll('-', ' ')}</h1>

                <div className={'card-container'}>
                    <MainCard result={result} updateInformation={(info) => setInformation(info)}/>
                    <InformationCard information={information} onClose={() => setInformation(undefined)} />
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
