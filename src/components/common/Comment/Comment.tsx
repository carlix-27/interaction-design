import React from "react";
import { UserVersionFinal } from "../UserVersionFinal/UserVersionFinal";

interface CommentProps {
    avatarUrl: string;
    name: string;
    rating: number;
    date: string;
    comment: string;
}

export const Comment: React.FC<CommentProps> = ({
    avatarUrl,
    name,
    rating,
    date,
    comment,
}) => {
    return (
        <div className="w-full max-w-xl space-y-3 rounded-xl bg-gray-50 p-5 shadow-md">
            <UserVersionFinal
                imageUrl={avatarUrl}
                name={name}
                rating={rating}
                date={date}
            />
            <p className="text-sm leading-relaxed text-gray-600">{comment}</p>
        </div>
    );
};
