import React from 'react';

interface CardProps {
    image: string;
    title: string;
    description: string;
    altText?: string;
}


// todo: cva?
const Card: React.FC<CardProps> = ({ image, title, description, altText = 'Image' }) => {
    return (
        <div className="flex flex-row items-center p-4 bg-white rounded-lg shadow-md max-w-md">
            <img src={image} alt={altText} className="w-16 h-16 rounded-full mr-4 object-cover" />
            <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    );
};

export default Card;
