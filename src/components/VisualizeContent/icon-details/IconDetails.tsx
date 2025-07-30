import React from "react";
import Icon from "../../../assets/icons/Icon";

export type IconDetailsVariant =
    | "subtitle"
    | "language"
    | "info"
    | "steamline"
    | "forum"
    | "trophy";

interface IconDetailsProps {
    variant: IconDetailsVariant;
}

const IconDetails: React.FC<IconDetailsProps> = ({ variant }) => {
    return (
        <div className="flex h-[24px] w-[24px] flex-shrink-0 items-center justify-center">
            <div className="aspect-square h-[16px] w-[16px] flex-shrink-0">
                <Icon name={variant} />
            </div>
        </div>
    );
};

export default IconDetails;
