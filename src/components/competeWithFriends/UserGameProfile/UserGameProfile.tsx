
import React, { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

// Definimos las variantes del componente usando cva
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
                <img src="/Avatar (1).png" alt={`${username} avatar`} className="w-[80px] h-[80px] rounded-full shadow-lg" style={{ imageRendering: 'auto', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.5)' }}/>
                <h2 className="text-[28px] leading-[34px] text-center text-shadow font-subtitleFont">
                    {username}
                </h2>
            </div>
            <div className="flex p-0 px-[16px] items-start flex-1 w-full">
                <div className="flex flex-col items-center gap-[10px] flex-1 text-center text-shadow">
                    <div>
                        <img src="/Prize (1).png" alt="Medal icon" className="w-8 h-8" />
                    </div>
                    <span className="font-bodyFont text-caption3">{achievements}</span>
                </div>
                <div className="flex flex-col items-center gap-[10px] flex-1 text-center text-shadow">
                    <div>
                        <img src="/Trophy (1).png" alt="Trophy icon" className="w-8 h-8" />
                    </div>
                    <span className="font-bodyFont text-caption3">División {division}</span>
                </div>
                <div className="flex flex-col items-center gap-[10px] flex-1 text-center text-shadow">
                    <div>
                        <img src="/conflict (1).png" alt="EXP icon" className="w-8 h-8" />
                    </div>
                    <span className="font-bodyFont text-caption3">{totalExp} EXP total</span>
                </div>
            </div>
        </div>
    );
};

export default UserGameProfile;



