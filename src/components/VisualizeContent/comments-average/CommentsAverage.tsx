import React from "react";
import StarRating from "../star-rating/StarRating";
import RatingValue from "../rating-value/RatingValue";

interface CommentsAverageProps {
    distribution: number[]; // votos por estrella [1★, 2★, 3★, 4★, 5★]
}

const CommentsAverage: React.FC<CommentsAverageProps> = ({ distribution }) => {
    const totalVotes = distribution.reduce((sum, count) => sum + count, 0);

    const average =
        distribution.reduce(
            (sum, count, index) => sum + count * (index + 1),
            0,
        ) / (totalVotes || 1); // evita dividir por 0

    return (
        <div className="flex w-[346px] items-center bg-grey-50 px-[15px] py-[3px]">
            {/* Columna izquierda */}
            <div className="flex w-[88px] flex-shrink-0 flex-col items-center px-[2px] pr-[8px]">
                <span
                    className="font-subtitleFont text-[48px] font-bold leading-[58px] text-grey-900"
                    style={{ lineHeight: "58px" }}
                >
                    {average.toFixed(1)}
                </span>

                {/* Estrellas + cantidad de votos debajo */}
                <div className="flex flex-col items-center gap-[4px]">
                    <StarRating value={average} variant="stars" />
                    <span className="flex h-[11px] w-[56px] flex-col justify-center font-captionFont text-[10px] leading-[14px] text-grey-400">
                        {totalVotes}
                    </span>
                </div>
            </div>

            {/* Columna derecha */}
            <div className="flex h-[107px] w-[243px] flex-col items-start gap-[4px] p-[8px]">
                {[5, 4, 3, 2, 1].map(stars => {
                    const index = stars - 1;
                    const votes = distribution[index];
                    const fill =
                        totalVotes === 0 ? 0 : (votes / totalVotes) * 5;

                    return (
                        <RatingValue
                            key={stars}
                            votes={index + 1}
                            fill={fill}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CommentsAverage;
