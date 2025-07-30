import React from 'react';

interface RecommendedProps {
    title?: string;
    subtitle?: string;
    imageUrl?: string;
    className?: string;
}

export const Recommended: React.FC<RecommendedProps> = ({
                                                            title = "Diseño UX/UI",
                                                            subtitle = "Google - Bootcamp Intensivo",
                                                            imageUrl = "https://api.builder.io/api/v1/image/assets/TEMP/ba8e338a634b26f71d031d5722696d83e6233dfa?width=160",
                                                            className = ''
                                                        }) => {
    return (
        <div className={`flex w-[390px] h-14 pl-1 pr-2 items-center bg-[#F9FAFB] ${className}`}>
            {/* Arrow Icon */}
            <div className="flex p-2 items-center gap-2">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 aspect-[1/1]"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.25 6C5.25 5.80109 5.32902 5.61032 5.46967 5.46967C5.61032 5.32902 5.80109 5.25 6 5.25H15C15.1989 5.25 15.3897 5.32902 15.5303 5.46967C15.671 5.61032 15.75 5.80109 15.75 6C15.75 6.19891 15.671 6.38968 15.5303 6.53033C15.3897 6.67098 15.1989 6.75 15 6.75H7.81L18.53 17.47C18.6037 17.5387 18.6628 17.6215 18.7038 17.7135C18.7448 17.8055 18.7668 17.9048 18.7686 18.0055C18.7704 18.1062 18.7518 18.2062 18.7141 18.2996C18.6764 18.393 18.6203 18.4778 18.549 18.549C18.4778 18.6203 18.393 18.6764 18.2996 18.7141C18.2062 18.7518 18.1062 18.7704 18.0055 18.7686C17.9048 18.7668 17.8055 18.7448 17.7135 18.7038C17.6215 18.6628 17.5387 18.6037 17.47 18.53L6.75 7.81V15C6.75 15.1989 6.67098 15.3897 6.53033 15.5303C6.38968 15.671 6.19891 15.75 6 15.75C5.80109 15.75 5.61032 15.671 5.46967 15.5303C5.32902 15.3897 5.25 15.1989 5.25 15V6Z"
                        fill="#6D717F"
                    />
                </svg>
            </div>

            {/* Course Info */}
            <div className="flex py-2 px-[2px] justify-center items-center gap-2">
                <div className="w-[254px] text-[#6D717F] font-roboto font-normal leading-4">
                    <span className="text-base">{title} </span>
                    <span className="text-xs">{subtitle}</span>
                </div>
            </div>

            {/* Image */}
            <img
                src={imageUrl}
                alt=""
                className="w-20 h-11 flex-shrink-0"
            />
        </div>
    );
};

export default Recommended;