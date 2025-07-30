import React from "react";
import Icon from "../../../assets/icons/Icon";
import clsx from "clsx";
import IconDetails, { IconDetailsVariant } from "../icon-details/IconDetails";

interface ItemDetailProps {
    text: string;
    variant?: "default" | "highlighted";
    icon: IconDetailsVariant;
}

const ItemDetail: React.FC<ItemDetailProps> = ({
    text,
    variant = "default",
    icon,
}) => {
    return (
        <div
            className={clsx(
                "flex w-[328px] items-center",
                variant === "default"
                    ? "gap-[4px] bg-grey-50 py-[3px] pl-[4px] pr-[12px]"
                    : "gap-[8px] bg-grey-50 py-[3px] pl-[4px] pr-[12px]",
            )}
        >
            <IconDetails variant={icon} />
            <div className="px-[4px]">
                <p
                    className={clsx(
                        "font-captionFont text-grey-500",
                        variant === "default"
                            ? "h-[12px] w-[274px] text-[10px] leading-[14px]"
                            : "h-[24px] w-[274px] font-bodyFont text-[16px] leading-[24px]",
                    )}
                >
                    {text}
                </p>
            </div>
        </div>
    );
};

export default ItemDetail;
