import React, {FC} from "react";
import EvidenceSection from "./EvidenceSection";
import GhostSection from "./GhostSection";
import ConclusionSection from "./ConclusionSection";
import {Information} from "../App";

type MainCardProps = {
    result: string | undefined;

    updateInformation: (information: Information | undefined) => void;
};

const MainCard: FC<MainCardProps> = ({ result, updateInformation }) => {
    return (
        <div className={'card card-main'}>
            <EvidenceSection  updateInformation={updateInformation}/>
            <GhostSection  updateInformation={updateInformation} />
            <ConclusionSection result={result} />
        </div>
    );
};

export type { MainCardProps};
export default MainCard;