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
            <div className="flex flex-1 items-center justify-between gap-6">
                <div className="flex flex-1 items-center gap-4 text-grey-900">
                    <div className="h-[60px] w-[60px]">
                        <Icon name="woman_large_pink_hair"></Icon>
                    </div>

                    <span className="flex whitespace-nowrap font-bodyFont text-bodybold1 font-semibold">
                        {name1}
                    </span>
                </div>

                <span className="ml-2 flex text-center font-bodyFont text-bodybold1 font-semibold text-primary-500">
                    VS
                </span>

                <div className="flex flex-1 items-center justify-end gap-4 text-grey-900">
                    <span className="whitespace-nowrap font-bodyFont text-bodybold1 font-semibold">
                        {name2}
                    </span>

                    <div className="h-[60px] w-[60px]">
                        <Icon name="man_with_dog"></Icon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VersusBar;
