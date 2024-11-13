import React, { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Icon from "../../../assets/icons/Icon";

const versusBarVariant = cva([
    "flex",
    "w-[390px]",
    "h-[73px]",
    "px-10",
    "justify-center",
    "items-center",
    "bg-primary-50"
]);

interface VersusBarProps extends Omit<HTMLAttributes<HTMLDivElement>, "any"> {
    name1: string;
    name2: string;
}

const VersusBar: React.FC<VersusBarProps> = ({ name1, name2 }) => {
    return (
        <div className={versusBarVariant()}>
            <div className="flex justify-between items-center gap-6 flex-1">
                <div className="flex items-center gap-4 flex-1 text-grey-900">

                    <Icon name='woman_avatar'></Icon>

                    <span className="font-bodyFont text-b2_body">
                        {name1}
                    </span>
                </div>

                <span className="text-primary-500 text-center font-bodyFont text-c3_caption font-semibold">
                    vs
                </span>


                <div className="flex items-center gap-4 flex-1 text-grey-900 justify-end">
                    <span className="font-bodyFont text-b2_body">
                        {name2}
                    </span>

                    <Icon name='woman_heart_sign'></Icon>

                </div>
            </div>
        </div>
    );
};

export default VersusBar;