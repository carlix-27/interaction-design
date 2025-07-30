import React from "react";

interface CardProps {
  image: string;
  title: string;
  description: string;
  altText?: string;
  type?: "unit/project" | "instructor" | "question" | "course";
  status?: boolean;
  rating?: number;
  reviewCount?: number;
}

const Star = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2.67033 14L3.81886 8.82236L0 5.34136L5.03037 4.88334L7.00046 0L8.97056 4.88236L14 5.34039L10.1811 8.82138L11.3306 13.999L7.00046 11.2509L2.67033 14Z" fill="#9EA2AE"/>
  </svg>
);

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  altText = "Image",
  type,
  status,
  rating,
  reviewCount,
}) => {
  // Renderizado para el nuevo tipo "course"
  if (type === "course") {
    return (
      <div 
        className="flex flex-col items-start overflow-hidden"
        style={{
          width: '166px',
          borderRadius: '8px',
          background: '#F6E7FD',
          boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)'
        }}
      >
        {/* Frame de la imagen */}
        <div 
          className="self-stretch"
          style={{ height: '104px' }}
        >
          <img
            src={image}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Frame del contenido */}
        <div 
          className="flex flex-col items-start self-stretch"
          style={{
            height: '96px',
            background: '#F9FAFB',
            padding: '8px 8px 4px 8px'
          }}
        >
          {/* Título */}
          <div 
            style={{
              width: '149px',
              flexShrink: 0,
              color: '#131927',
              fontFamily: 'Roboto',
              fontSize: '12px',
              fontWeight: 400,
              lineHeight: '16px',
              marginBottom: '1px'
            }}
          >
            {title}
          </div>
          
          {/* Descripción */}
          <div 
            className="flex flex-col justify-center"
            style={{
              width: '155px',
              height: '28px',
              color: '#6D717F',
              fontFamily: 'Roboto',
              fontSize: '12px',
              fontWeight: 400,
              lineHeight: '16px',
              marginTop: '2px'
            }}
          >
            {description}
          </div>
          
          {/* Rating con estrella */}
          {rating && reviewCount && (
            <div 
              style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2px',
                marginTop: '4px'
              }}
            >
              <Star />
              <span 
                style={{
                  color: '#6D717F',
                  fontFamily: 'Roboto',
                  fontSize: '10px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '14px'
                }}
              >
                {rating} ({reviewCount})
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Renderizado original para otros tipos
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
