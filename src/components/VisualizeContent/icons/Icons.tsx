import React from "react";

export type IconsVariant =
    | "icon (1)"
    | "icon (2)"
    | "icon (3)"
    | "icon (4)"
    | "icon (5)"
    | "icon (6)"
    | "icon (7)"
    | "icon (8)"
    | "icon (9)"
    | "icon (10)"
    | "icon (11)"
    | "icon (12)"
    | "icon (13)"
    | "icon (14)"
    | "icon (15)"
    | "icon (16)"
    | "icon (17)"
    | "icon (18)";

interface IconsProps {
    name: IconsVariant;
    alt?: string;
    size?: number;
}

const Icons: React.FC<IconsProps> = ({ name, alt = "", size = 24 }) => {
    return (
        <div className="inline-flex items-center gap-[8px]">
            <img
                src={`/icons/${name}.svg`}
                alt={alt}
                width={size}
                height={size}
            />
        </div>
    );
};

export default Icons;
