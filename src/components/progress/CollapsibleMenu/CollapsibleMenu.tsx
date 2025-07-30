import React, { useState } from "react";
import Icon from "../../../assets/icons/Icon";
import ProgressBar from "../ProgressBar/ProgressBar";

interface MenuItem {
    name: string;
    progress: number; // Percentage of progress for each unit
}

interface CollapsibleMenuProps {
    title: string;
    items: MenuItem[]; // Array of menu items with name and progress
}

const CollapsibleMenu: React.FC<CollapsibleMenuProps> = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Calculate the average progress
    const averageProgress = items.length
        ? Math.round(
              items.reduce((acc, item) => acc + item.progress, 0) /
                  items.length,
          )
        : 0;

    return (
        <div className="w-full max-w-md rounded-lg bg-gray-50 p-4 shadow-lg">
            <div className={"grid gap-2"}>
                <div
                    className="flex cursor-pointer items-center justify-between"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="font-semibold text-gray-700">{title}</span>
                    <div className="flex items-center">
                        <span className="mr-2 font-medium text-gray-700">
                            {averageProgress}%
                        </span>
                        <span
                            className={`transition-transform ${isOpen ? "" : "rotate-180"}`}
                        >
                            <Icon name={"arrow-up"} />
                        </span>
                    </div>
                </div>
                <ProgressBar progress={averageProgress} />
            </div>

            {isOpen && (
                <ul className="mt-2 space-y-2">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={
                                "flex justify-between pt-1 text-sm text-gray-600"
                            }
                        >
                            {item.name} <span>{item.progress}%</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CollapsibleMenu;
