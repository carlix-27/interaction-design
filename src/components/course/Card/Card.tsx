import React from 'react';

interface CardProps {
    image: string;
    title: string;
    description: string;
    altText?: string;
    type?: 'unit/project' | 'instructor';
}


const Card: React.FC<CardProps> = ({ image, title, description, altText = 'Image', type}) => {
    return (
        <div className="flex flex-row items-center h-32 bg-grey-50 rounded-2xl shadow-md max-w-md">
            <img
                src={image}
                alt={altText}
                className={
                         type === 'instructor'
                         ? "w-24 h-24 rounded-full ml-4 mr-4 object-cover"
                         : "w-32 h-full rounded-l-2xl object-cover"
                }
            />
            <div className="flex flex-col ml-4 gap-1">
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    );
};

export default Card;
