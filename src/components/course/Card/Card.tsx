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
    <div className="flex flex-row items-center bg-grey-50 rounded-2xl shadow-md max-w-sm h-full">
      <img
        src={image}
        alt={altText}
        className={
          type === "instructor"
            ? "w-24 h-24 rounded-full ml-4 mr-4 object-cover"
            : "w-24 h-full rounded-l-2xl object-cover"
        }
      />
      <div className="flex flex-col ml-4 gap-1 text-left py-4 px-2">
        <p className="text-xl fontFamily-subtitleFont fontSize-subtitle2 font-semibold text-gray-900">
          {title}
        </p>
        <p className="text-gray-500 fontFamily-captionFont text-body2">
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
