import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  altText?: string;
  type?: "unit/project" | "instructor";
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  altText = "Image",
  type,
}) => {
  return (
    <div className="flex flex-row items-center p-2 bg-grey-50 rounded-2xl shadow-md max-w-sm max-h-fit">
      <img
        src={image}
        alt={altText}
        className={
          type === "instructor"
            ? "w-24 h-24 rounded-full ml-4 mr-4 object-cover"
            : "w-32 h-full rounded-l-2xl object-cover"
        }
      />
      <div className="flex flex-col ml-4 gap-1 text-left">
        <p className="text-xl fontFamily-subtitleFont fontSize-subtitle2 font-semibold text-gray-900">
          {title}
        </p>
        <p className="text-gray-500 font-captionFont text-body2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
