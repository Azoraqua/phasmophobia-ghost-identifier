import React, {FC} from "react";
import {Info as InfoIcon} from "@mui/icons-material";
import {EVIDENCE, Information} from "../App";

type EvidenceSectionProps = {
    updateInformation: (information: Information | undefined) => void;
};

const EvidenceSection: FC<EvidenceSectionProps> = ({ updateInformation }) => {
    return (
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
                                updateInformation({
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
    );
};

export type { EvidenceSectionProps };
export default EvidenceSection;