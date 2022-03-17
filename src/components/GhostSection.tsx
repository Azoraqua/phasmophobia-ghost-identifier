import React, {FC} from "react";
import {Info as InfoIcon} from "@mui/icons-material";
import {GHOSTS, Information} from "../App";

type GhostSectionProps = {
    updateInformation: (information: Information | undefined) => void;
};

const GhostSection: FC<GhostSectionProps> = ({ updateInformation }) => {
    return (
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
                                updateInformation({
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
    );
};

export type { GhostSectionProps };
export default GhostSection;