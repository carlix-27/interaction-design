import React from "react";
import Star from "../star/Star"; // Ajustá el path si es necesario

export type StarRatingVariant = "stars" | "withText";

interface StarRatingProps {
    value: number;
    variant?: StarRatingVariant;
    votes?: number;
}

const StarRating: React.FC<StarRatingProps> = ({
    value,
    variant = "stars",
    votes,
}) => {
    const renderStars = () => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (value >= i) {
                stars.push("full");
            } else if (value >= i - 0.5) {
                stars.push("half");
            } else {
                stars.push("empty");
            }
        }

        return stars.map((variant, index) => (
            <Star key={index} variant={variant as "full" | "half" | "empty"} />
        ));
    };

    return (
        <div className="inline-flex items-center gap-[4px] px-[2px] py-[8px]">
            {variant === "withText" && (
                <div className="w-[60px] flex-shrink-0 text-center font-captionFont text-[12px] leading-[16px] text-grey-900">
                    {value}
                    {votes !== undefined && (
                        <span className="text-grey-400"> ({votes})</span>
                    )}
                </div>
            )}
            <div className="flex flex-shrink-0 items-center gap-[4px]">
                {renderStars()}
            </div>
        </div>
    );
};

export default StarRating;
