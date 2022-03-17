import React, {FC} from "react";

type ConclusionSectionProps = {
    result: string | undefined;
};

const ConclusionSection: FC<ConclusionSectionProps> = (props) => {
    return (
        <section aria-label={'Conclusion'}>
            <h1>Conclusion</h1>

            <span className={'result'}>
                <h2>{props.result || 'Not Yet Discovered'}</h2>
            </span>
        </section>
    );
};

export type {ConclusionSectionProps};
export default ConclusionSection;