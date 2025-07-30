import React, { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import Icon from "../../../assets/icons/Icon";

const userGameProfileVariant = cva([
    "rounded-[20px]",
    "p-6",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "shadow-[0_4px_4px_rgba(0,0,0,0.25)]",
    "bg-gradient-to-r",
    "from-[#A80CE8]",
    "to-[#00D4FF]",
    "w-[342px]",
    "h-[220px]",
    "text-white",
]);

interface UserGameProfileProps
    extends Omit<HTMLAttributes<HTMLAttributes<"any">>, any> {
    username: string;
    achievements: string;
    division: string;
    totalExp: number;
}

const UserGameProfile: React.FC<UserGameProfileProps> = ({
    username,
    achievements,
    division,
    totalExp,
}) => {
    return (
        <div className={userGameProfileVariant()}>
            <div className="mr-8 flex flex-1 items-center p-2">
                <Icon name="woman_large_pink_hair"></Icon>
                <div className="fontFamily-subtitleFont ml-8 whitespace-nowrap text-3xl font-semibold text-shadow">
                    {username}
                </div>
            </div>
            <div className="flex w-full flex-1 items-start p-0 px-[16px]">
                <div className="flex flex-1 flex-col items-center gap-[10px] text-center text-shadow">
                    <div>
                        <Icon name="prize"></Icon>
                    </div>
                    <span className="font-bodyFont text-caption3">
                        {achievements}
                    </span>
                </div>
                <div className="flex flex-1 flex-col items-center gap-[10px] text-center text-shadow">
                    <div>
                        <Icon name="trophy"></Icon>
                    </div>
                    <span className="font-bodyFont text-caption3">
                        División {division}
                    </span>
                </div>
                <div className="flex flex-1 flex-col items-center gap-[10px] text-center text-shadow">
                    <div>
                        <Icon name="conflict"></Icon>
                    </div>
                    <span className="font-bodyFont text-caption3">
                        {totalExp} EXP total
                    </span>
                </div>
            </div>
        </div>
    );
};

export default UserGameProfile;
