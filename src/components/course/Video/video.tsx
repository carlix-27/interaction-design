import React from 'react';
import Icon from '../../../assets/icons/Icon';


interface VideoThumnailProps {
    backgroundImage: string;
}


const VideoThumbnail: React.FC<VideoThumnailProps> = ({ backgroundImage }) => {
    return (
        <div
            className="relative w-80 h-40 rounded-lg overflow-hidden flex items-center justify-center"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
        <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
              <Icon name="play"></Icon>
        </div>

        </div>
    );
}

export default VideoThumbnail;