import React from "react";
import Profile from "../profile/Profile";

interface FriendProps {
    name: string;
    image: string;
    description: string;
}

const Friend: React.FC<FriendProps> = ({ name, image, description }) => {
    return (
        <div className="border-grey-300 flex h-[132px] w-[120px] flex-col items-center justify-center gap-[2px] rounded-[4px] border bg-grey-50 px-[8px] pb-[16px] pt-[8px]">
            <Profile image={image} size="md" />
            <div className="flex w-full flex-col items-center justify-center gap-[2px]">
                <p className="font-captionFont text-[10px] leading-[14px] text-black">
                    {name}
                </p>
                <p className="w-[107px] py-[2px] text-center font-captionFont text-[10px] leading-[14px] text-grey-400">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Friend;
