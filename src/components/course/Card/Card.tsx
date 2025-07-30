import React from "react";

interface CardProps {
    image: string;
    title: string;
    description: string;
    altText?: string;
    type?: "unit/project" | "instructor" | "question";
    status?: boolean;
}

const Card: React.FC<CardProps> = ({
    image,
    title,
    description,
    altText = "Image",
    type,
    status,
}) => {
    return (
        <div className="flex h-full max-w-sm flex-row items-center rounded-2xl bg-grey-50 shadow-md">
            <img
                src={image}
                alt={altText}
                className={
                    type === "instructor"
                        ? "ml-4 mr-4 h-24 w-24 rounded-full object-cover"
                        : "h-full w-24 rounded-l-2xl object-cover"
                }
            />
            <div className="ml-4 flex flex-col gap-1 px-2 py-4 text-left">
                <p className="fontFamily-subtitleFont fontSize-subtitle2 text-xl font-semibold text-gray-900">
                    {title}
                </p>
                <p className="fontFamily-captionFont text-body2 text-gray-500">
                    {description}
                </p>

                {type === "question" && (
                    <p
                        className={`font-semibold ${
                            status ? "text-blue-500" : "text-red-500"
                        }`}
                    >
                        {status ? "Resuelto" : "No Resuelto"}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Card;
