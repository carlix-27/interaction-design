import React from "react";
import User from "../user/User";
import clsx from "clsx";

interface CommentProps {
    name: string;
    image: string;
    rating: number;
    date: string;
    comment: string;
    variant?: "default" | "expanded";
}

const Comment: React.FC<CommentProps> = ({
    name,
    image,
    rating,
    date,
    comment,
    variant = "default",
}) => {
    return (
        <div
            className={clsx(
                "border-grey-300 flex w-[340px] flex-col items-start gap-[8px] rounded-[8px] border bg-grey-50 p-[8px]",
                variant === "default" ? "h-[102px]" : "h-[128px]",
            )}
        >
            <User name={name} image={image} rating={rating} date={date} />

            <p
                className={clsx(
                    "font-captionFont text-[10px] leading-[14px] text-grey-400",
                    variant === "default" ? "line-clamp-3" : "line-clamp-none",
                )}
            >
                {comment}
            </p>
        </div>
    );
};

export default Comment;
