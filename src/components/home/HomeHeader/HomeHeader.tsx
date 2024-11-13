import React from 'react';
import Icon from "../../../assets/icons/Icon";

export interface HomeHeaderProps {
    name: string;
    avatar?: string;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ name = "Martina", avatar }) => {
    return (
        <div
            className="flex w-[390px] h-[156px] p-2 justify-center items-center gap-8 rounded-b-[16px] shadow-lg"
            style={{
                background: 'linear-gradient(97deg, #A80CE8 17.43%, #00D4FF 96.96%)',
                boxShadow: '0px 6px 14px -6px rgba(19, 25, 39, 0.12), 0px 10px 32px -4px rgba(19, 25, 39, 0.10)',
            }}
        >
            <div>
                <p className="text-grey-200 font-subtitleFont text-[24px] leading-[28px] text-shadow">
                    Hola,
                </p>
                <p className="text-white font-subtitleFont text-[40px] leading-[48px] text-shadow">
                    {name}
                </p>
            </div>
            <div className="flex w-[80px] h-[80px] justify-center items-center">
                <div className="w-[80px] h-[80px] rounded-full shadow-custom-figma">
                    <Icon name='woman_large_pink_hair'></Icon>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
