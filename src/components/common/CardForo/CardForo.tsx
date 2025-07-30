import React from "react";
import Icon from "../../../assets/icons/Icon";

interface CardForoProps {
    title?: string
}

export const CardForo: React.FC = ({title}: CardForoProps) => {
    return (
        <div
            style={{
                width: "100%",
                maxWidth: "294px",
                minHeight: "28px",
                height: "auto",
                padding: "16px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                boxSizing: "border-box",
            }}
        >
            <span style={{fontSize: "16px", fontWeight: 500}}>{title}</span>
            <Icon name="Nav-arrow-right"/>
        </div>
    );
};
