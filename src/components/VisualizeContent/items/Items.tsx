import React from "react";
import { IconDetailsVariant } from "../icon-details/IconDetails";
import ItemDetail from "../item-detail/ItemDetail";

interface ItemsProps {
    items: {
        text: string;
        icon: IconDetailsVariant;
    }[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
    return (
        <div className="flex w-[328px] flex-shrink-0 flex-col gap-[4px] p-[3px_12px_3px_4px] opacity-80">
            {items.map((item, index) => (
                <ItemDetail
                    key={index}
                    text={item.text}
                    icon={item.icon}
                    variant="default"
                />
            ))}
        </div>
    );
};

export default Items;
