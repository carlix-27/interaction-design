import React, { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import SwordIcon from '../SwordIcon/SwordIcon';
import Icon from "../../../assets/icons/Icon";

const userCardVariant = cva('flex items-center p-4 bg-gray-50 shadow-md h-[81px] w-[300px] rounded-[16px] drop-shadow-lg', {
    variants: {
        color: {
            gray: 'bg-gray-50',
        },
    },
    defaultVariants: {
        color: 'gray',
    },
});

interface UserCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, VariantProps<typeof userCardVariant> {
    username: string;
}

const UserCard: React.FC<UserCardProps> = ({ username, color, ...props }) => {
    return (
        <div
            className={`${userCardVariant({ color })} flex w-[340px] min-w-[300px] px-4 justify-center items-center gap-4 rounded-lg shadow-lg`}
            {...props}
        >
            <div className="flex items-center justify-center w-[60px] h-[82.286px] flex-shrink-0 mr-4">
                <Icon name='woman_avatar'></Icon>
            </div>


            <div className="flex flex-col justify-center items-start flex-1 text-lg font-semibold text-gray-900 text-center font-roboto text-[14px] font-medium leading-[20px]">

                {username}
            </div>

            <SwordIcon color="purple" />
        </div>
    );
};

export default UserCard;

