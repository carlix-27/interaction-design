import React from "react";
import Icon from "../../../assets/icons/Icon";

interface VideoThumnailProps {
    backgroundImage: string;
}

const VideoThumbnail: React.FC<VideoThumnailProps> = ({ backgroundImage }) => {
    return (
        <div
            className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-lg"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600">
                <Icon name="play"></Icon>
            </div>
        </div>
    );
};

export default VideoThumbnail;
