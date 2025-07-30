import React from "react";
import Profile from "../profile/Profile";
import Rating from "../rating/Rating";

interface User {
    name: string;
    image: string;
    rating: number;
    date: string;
}

const UserRatingCard: React.FC<User> = ({ name, image, rating, date }) => {
    return (
        <div className="flex h-[35px] w-[328px] items-center justify-between px-[4px]">
            <div className="flex items-center gap-[8px]">
                <Profile image={image} size="sm" />
                <span className="text-grey-700 font-captionFont text-[10px] leading-[14px]">
                    {name}
                </span>
            </div>
            <Rating value={rating} date={date} />
        </div>
    );
};

export default UserRatingCard;
