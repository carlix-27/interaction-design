import React from 'react';

// Button variant types
type ButtonVariant =
    | 'colorProgreso'
    | 'colorRanking'
    | 'solicitarDesafio'
    | 'notSelectedRanking'
    | 'solicitudEnviada'
    | 'notSelectedProgress';

interface ButtonProps {
    variant: ButtonVariant;
    onClick?: () => void;
    className?: string;
}

// Individual variant components
const ColorProgresoButton: React.FC<{ onClick?: () => void; className?: string }> = ({ onClick, className }) => (
    <button
        onClick={onClick}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 bg-purple-600 text-center ${className || ''}`}
    >
    <span className="text-[#F9FAFB] font-roboto text-xs font-medium leading-4">
      Progreso
    </span>
    </button>
);

const ColorRankingButton: React.FC<{ onClick?: () => void; className?: string }> = ({ onClick, className }) => (
    <button
        onClick={onClick}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 bg-purple-600 text-center ${className || ''}`}
    >
    <span className="text-[#F9FAFB] font-roboto text-xs font-medium leading-4">
      Ranking
    </span>
    </button>
);

const SolicitarDesafioButton: React.FC<{ onClick?: () => void; className?: string }> = ({ onClick, className }) => (
    <button
        onClick={onClick}
        className={`inline-flex items-center justify-center rounded-full px-4 py-3 bg-purple-600 text-center ${className || ''}`}
    >
    <span className="text-[#F9FAFB] font-roboto text-[10px] font-normal leading-[14px]">
      Solicitar Desafío
    </span>
    </button>
);

const NotSelectedRankingButton: React.FC<{ onClick?: () => void; className?: string }> = ({ onClick, className }) => (
    <button
        onClick={onClick}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 bg-gray-200 text-center ${className || ''}`}
    >
    <span className="text-[#212936] font-roboto text-xs font-medium leading-4">
      Ranking
    </span>
    </button>
);

const SolicitudEnviadaButton: React.FC<{ onClick?: () => void; className?: string }> = ({ onClick, className }) => (
    <button
        onClick={onClick}
        className={`inline-flex items-center justify-center rounded-full px-4 py-3 bg-gray-200 text-center ${className || ''}`}
    >
    <span className="text-[#212936] font-roboto text-[10px] font-normal leading-[14px]">
      Solicitud Enviada
    </span>
    </button>
);

const NotSelectedProgressButton: React.FC<{ onClick?: () => void; className?: string }> = ({ onClick, className }) => (
    <button
        onClick={onClick}
        className={`inline-flex items-center justify-center rounded-full px-6 py-3 bg-gray-200 text-center ${className || ''}`}
    >
    <span className="text-[#212936] font-roboto text-xs font-medium leading-4">
      Progreso
    </span>
    </button>
);

// Main Button component
export const Button: React.FC<ButtonProps> = ({ variant, onClick, className }) => {
    switch (variant) {
        case 'colorProgreso':
            return <ColorProgresoButton onClick={onClick} className={className} />;
        case 'colorRanking':
            return <ColorRankingButton onClick={onClick} className={className} />;
        case 'solicitarDesafio':
            return <SolicitarDesafioButton onClick={onClick} className={className} />;
        case 'notSelectedRanking':
            return <NotSelectedRankingButton onClick={onClick} className={className} />;
        case 'solicitudEnviada':
            return <SolicitudEnviadaButton onClick={onClick} className={className} />;
        case 'notSelectedProgress':
            return <NotSelectedProgressButton onClick={onClick} className={className} />;
        default:
            return <ColorProgresoButton onClick={onClick} className={className} />;
    }
};

// Export individual components for direct use
export {
    ColorProgresoButton,
    ColorRankingButton,
    SolicitarDesafioButton,
    NotSelectedRankingButton,
    SolicitudEnviadaButton,
    NotSelectedProgressButton
};

export default Button;