import React, {FC} from "react";
import {Close} from "@mui/icons-material";
import {GHOSTS, Information} from "../App";

type InformationCardProps = {
    information: Information | undefined;
    onClose: () => void;
};

const InformationCard: FC<InformationCardProps> = ({ information, onClose }) => {
    return (
        <div id={'card-information'} className={`card card-information ${information && 'show'}`}>
            <>
                <Close className={'close'} onClick={onClose}/>

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
    );
};

export type { InformationCardProps};
export default InformationCard;