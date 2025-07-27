import React from "react";

interface RatingProps {
    rating: number;
    date: string;
}

const Star = ({ filled, half, keyId }: { filled: boolean; half: boolean; keyId: number }) => {
    if (filled) {
        return (
            <svg key={keyId} className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <polygon
                    stroke="currentColor"
                    strokeWidth="1.5"
                    points="10,1 12.59,7.36 19.51,7.64 14,12.26 15.82,19.02 10,15.27 4.18,19.02 6,12.26 0.49,7.64 7.41,7.36"
                />
            </svg>
        );
    }
    if (half) {
        return (
            <svg key={keyId} className="w-5 h-5 text-purple-600" viewBox="0 0 20 20">
                <defs>
                    <linearGradient id={`half-gradient-${keyId}`}>
                        <stop offset="50%" stopColor="currentColor" />
                        <stop offset="50%" stopColor="white" stopOpacity="1" />
                    </linearGradient>
                </defs>
                <polygon
                    fill={`url(#half-gradient-${keyId})`}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    points="10,1 12.59,7.36 19.51,7.64 14,12.26 15.82,19.02 10,15.27 4.18,19.02 6,12.26 0.49,7.64 7.41,7.36"
                />
            </svg>
        );
    }
    return (
        <svg key={keyId} className="w-5 h-5 text-white stroke-purple-600" fill="white" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20">
            <polygon
                points="10,1 12.59,7.36 19.51,7.64 14,12.26 15.82,19.02 10,15.27 4.18,19.02 6,12.26 0.49,7.64 7.41,7.36"
            />
        </svg>
    );
};

const Rating: React.FC<RatingProps> = ({ rating, date }) => {
    return (
        <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => {
                    const filled = i + 1 <= rating;
                    const half = rating > i && rating < i + 1;
                    return <Star key={i} filled={filled} half={half} keyId={i} />;
                })}
            </div>
            <span className="text-gray-400 text-sm">{date}</span>
        </div>
    );
};

export default Rating;