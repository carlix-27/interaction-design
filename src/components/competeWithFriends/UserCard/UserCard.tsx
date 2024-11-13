import React, { HTMLAttributes } from 'react';
import SwordIcon from '../SwordIcon/SwordIcon';
import Icon from "../../../assets/icons/Icon";



interface UserCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
    username: string;
}

const UserCard: React.FC<UserCardProps> = ({ username }) => {
    return (
            <div className='flex p-4 bg-grey-50 shadow-md h-[81px] w-[300px] rounded-[16px] drop-shadow-lg'>

                <div className="flex items-center justify-center mr-4">
                    <Icon name="woman_avatar"/>
                </div>


                <div
                    className="flex flex-col justify-center items-start flex-1 text-lg font-semibold text-gray-900 text-center font-roboto text-[14px]  leading-[20px]">
                    {username}
                </div>

                <div className="flex items-center justify-center ml-4">
                    <SwordIcon/>
                </div>

            </div>
    );
};

export default UserCard;

