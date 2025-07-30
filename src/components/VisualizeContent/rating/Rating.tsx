import React from "react";
import Icon from "../../../assets/icons/Icon";
import StarRating from "../star-rating/StarRating";

interface RatingProps {
    value: number;
    date: string;
}

const Rating: React.FC<RatingProps> = ({ value, date }) => {
    return (
        <div className="flex items-center gap-[4px]">
            <div className="flex items-center gap-[4px] p-[8px_2px]">
                <StarRating value={value} />
            </div>
            <span className="font-captionFont text-[10px] leading-none text-grey-400">
                {date}
            </span>
        </div>
    );
};

export default Rating;
