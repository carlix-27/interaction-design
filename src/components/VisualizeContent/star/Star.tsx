import React from "react";
import Icon from "../../../assets/icons/Icon";

export type StarVariant = "full" | "half" | "empty";

interface StarProps {
    variant: StarVariant;
}

const Star: React.FC<StarProps> = ({ variant }) => {
    const iconMap = {
        full: "star-full",
        half: "star-half",
        empty: "star-empty",
    };

    return <Icon name={iconMap[variant]} />;
};

export default Star;
