
import React, { HTMLAttributes } from 'react';
import { cva } from 'class-variance-authority';
import Icon from "../../../assets/icons/Icon";

const userGameProfileVariant = cva([
    'rounded-[20px]',
    'p-4',
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'shadow-[0_4px_4px_rgba(0,0,0,0.25)]',
    'bg-gradient-to-r',
    'from-[#A80CE8]',
    'to-[#00D4FF]',
    'w-[342px]',
    'h-[200px]',
    'text-white'
]);

interface UserGameProfileProps extends Omit<HTMLAttributes<HTMLAttributes<'any'>>, any> {
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
            <div className="flex justify-center items-center gap-[24px] p-[10px] flex-1 w-full">
                <Icon name='woman_heart_sign'></Icon>
                <h2 className="text-[28px] leading-[34px] text-center text-shadow font-subtitleFont">
                    {username}
                </h2>
            </div>
            <div className="flex p-0 px-[16px] items-start flex-1 w-full">
                <div className="flex flex-col items-center gap-[10px] flex-1 text-center text-shadow">
                    <div>
                        <Icon name='prize'></Icon>
                    </div>
                    <span className="font-bodyFont text-caption3">{achievements}</span>
                </div>
                <div className="flex flex-col items-center gap-[10px] flex-1 text-center text-shadow">
                    <div>
                        <Icon name='trophy'></Icon>
                    </div>
                    <span className="font-bodyFont text-caption3">División {division}</span>
                </div>
                <div className="flex flex-col items-center gap-[10px] flex-1 text-center text-shadow">
                    <div>
                        <Icon name='conflict'></Icon>
                    </div>
                    <span className="font-bodyFont text-caption3">{totalExp} EXP total</span>
                </div>
            </div>
        </div>
    );
};

export default UserGameProfile;



