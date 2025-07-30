import React from "react";
import RatingBar from "../rating-bar/RatingBar";

interface RatingValueProps {
    votes: number; // número entero mostrado a la izquierda
    fill: number; // valor de 0 a 5 usado para la barra
}

const RatingValue: React.FC<RatingValueProps> = ({ votes, fill }) => {
    return (
        <div className="inline-flex items-center gap-[8px] px-[4px]">
            <span className="font-captionFont text-[10px] leading-[14px] text-grey-900">
                {votes}
            </span>
            <RatingBar value={fill} />
        </div>
    );
};

export default RatingValue;
