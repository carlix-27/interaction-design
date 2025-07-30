import React from "react";
import Profile from "../profile/Profile";
import Icon from "../../../assets/icons/Icon";

interface InstructorCardProps {
    name: string;
    description: string;
    image: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({
    name,
    description,
    image,
}) => {
    return (
        <div className="flex w-[374px] flex-col gap-[8px] px-[4px] py-[4px]">
            <h2 className="font-subtitleFont text-[16px] font-semibold leading-[24px] text-grey-900">
                Instructor
            </h2>
            <div className="flex items-center gap-[4px] py-[1px]">
                <Profile image={image} className="h-[54px] w-[54px]" />
                <div className="flex flex-col items-start justify-center pb-[2px]">
                    <div className="flex px-[7px] py-[2px]">
                        <span className="w-[254px] font-captionFont text-[12px] font-medium leading-[16px] text-grey-900">
                            {name}
                        </span>
                    </div>
                    <div className="flex px-[7px] py-[2px]">
                        <span className="w-[254px] font-captionFont text-[10px] font-normal leading-[14px] text-grey-500">
                            {description}
                        </span>
                    </div>
                </div>
                <Icon name="arrow-right" />
            </div>
        </div>
    );
};

export default InstructorCard;
