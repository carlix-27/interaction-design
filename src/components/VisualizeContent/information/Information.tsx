import React from "react";
import Icons, { IconsVariant } from "../icons/Icons";

interface InformationProps {
    icon: IconsVariant;
    title: string;
    subtitle: string;
}

const Information: React.FC<InformationProps> = ({ icon, title, subtitle }) => {
    return (
        <div className="flex h-[60px] w-[342px] items-center gap-[8px] bg-grey-50 px-[4px] py-[8px]">
            <Icons name={icon} />
            <div className="flex flex-col justify-start gap-[4px]">
                <span className="text-grey-800 font-bodyFont text-[14px] leading-[18px]">
                    {title}
                </span>
                <span className="w-[283px] font-captionFont text-[10px] leading-[14px] text-grey-500">
                    {subtitle}
                </span>
            </div>
        </div>
    );
};

export default Information;
