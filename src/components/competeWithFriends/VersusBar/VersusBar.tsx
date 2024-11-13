import React, { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import Icon from "../../../assets/icons/Icon";

const versusBarVariant = cva([
    "flex",
    "w-[390px]",
    "h-[75px]",
    "px-10",
    "justify-center",
    "items-center",
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

                    <Icon name='woman_heart_sign'></Icon>

                    <span className="flex font-bodyFont text-b2_body font-semibold whitespace-nowrap">
                        {name1}
                    </span>
                </div>

                <span className="flex text-primary-500 text-center font-bodyFont text-bodybold1 font-semibold ml-2">
                    VS
                </span>


                <div className="flex items-center gap-4 flex-1 text-grey-900 justify-end">
                    <span className=" font-bodyFont text-bodybold1 font-semibold whitespace-nowrap">
                        {name2}
                    </span>

                    <Icon name='man_with_dog'></Icon>

                </div>
            </div>
        </div>
    );
};

export default VersusBar;