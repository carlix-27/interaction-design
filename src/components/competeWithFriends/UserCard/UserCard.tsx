import React, { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import SwordIcon from '../SwordIcon/SwordIcon';



const userCardVariant = cva('flex items-center p-4 bg-gray-50 rounded-lg shadow-md', {
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
        <div className={userCardVariant({ color })}
             style={{
                 display: 'flex',
                 width: '340px',
                 minWidth: '300px',
                 padding: '0px 16px',
                 justifyContent: 'center',
                 alignItems: 'center',
                 gap: '16px',
                 borderRadius: '16px',
                 boxShadow: '0px 10px 8px rgba(0, 0, 0, 0.3)',

        }}

             {...props}>
            {/* Icono de Perfil */}
            <div className=" flex items-center justify-center mr-4" style={{ width:'60px', height:'82.29px'}} >
        <span role="img" aria-label="profile" className="text-2xl text-pink-500">
          <img src="/woman avatar (2).png" alt="profile" style={{ width: '100%', height: '100%' }} />
        </span>

            </div>

            {/* Nombre de Usuario */}
            <div className="flex flex-col  justify-center items-start flex-1 text-lg font-semibold text-gray-900" style={{
                color: '#000',
                textAlign: 'center',
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '20px'
            }}>
                {username}
            </div>

            {/* Icono de Espadas */}
            <SwordIcon color="purple" />
        </div>
    );
};

export default UserCard;
