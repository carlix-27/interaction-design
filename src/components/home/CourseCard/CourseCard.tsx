import React, { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

const cardVariant = cva(
    ['flex flex-col justify-center items-center rounded-lg bg-white'],
    {
        variants: {
            shadow: {
                default: [
                    'shadow-[0px_6px_14px_-6px_rgba(19,25,39,0.12),_0px_10px_32px_-4px_rgba(19,25,39,0.10)]',
                ],
            },
            size: {
                medium: ['w-[120px] h-[142px]'],
            },
        },
        defaultVariants: {
            shadow: 'default',
            size: 'medium',
        },
    }
);

export interface CourseCardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariant> {
    title: string;
    description: string;
    image: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, size, image, shadow, ...rest }) => {
    return (
        <div className={cardVariant({ size, shadow})} {...rest}>
            <div className="h-[86px]">
                <img src={image} alt={title} className="w-full h-full object-cover rounded-t-lg"/>
            </div>
            <div className="text-center min-h-[40px] flex flex-col py-2 px-4 justify-center items-center self-stretch">
                <h3 className="text-gray-950 text-b2_bodyBold font-semibold">{title}</h3>
                <p className="text-secondary-500 text-c2_caption font-semibold">{description}</p>
            </div>
        </div>
    );
};

export default CourseCard;
