import React from "react";

interface RatingBarProps {
    value: number; // de 0 a 5
}

const RatingBar: React.FC<RatingBarProps> = ({ value }) => {
    const percentage = Math.max(0, Math.min(100, (value / 5) * 100));

    return (
        <div
            className="flex h-[8px] w-[192px] overflow-hidden rounded-[8px] bg-primary-50"
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={5}
        >
            <div
                className="bg-primary-500 transition-all duration-300"
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
};

export default RatingBar;
