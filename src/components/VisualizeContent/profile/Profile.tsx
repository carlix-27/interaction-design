import React from "react";
import clsx from "clsx";

interface ProfileProps {
    image: string;
    size?: "sm" | "md"; // 32px o 64px
    alt?: string;
    className?: string;
}

const sizeMap = {
    sm: "w-[32px] h-[32px]",
    md: "w-[64px] h-[64px]",
};

const Profile: React.FC<ProfileProps> = ({
    image,
    size = "md",
    alt = "Profile picture",
    className = "",
}) => {
    const hasManualSize =
        className?.includes("h-[") || className?.includes("w-[");

    return (
        <img
            src={image}
            alt={alt}
            className={clsx(
                "rounded-full object-cover",
                !hasManualSize && sizeMap[size],
                className,
            )}
        />
    );
};

export default Profile;
