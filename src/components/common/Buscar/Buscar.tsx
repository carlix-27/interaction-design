import React from "react";

interface BuscarProps {
    placeholder?: string;
    value?: string;
    variant?: "search" | "withClose" | "simple";
    onChange?: (value: string) => void;
    onClose?: () => void;
}

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M5.66672 11.3255C4.08599 11.3255 2.74618 10.7767 1.64732 9.67906C0.549105 8.58209 0 7.24332 0 5.66276C0 4.08219 0.549105 2.74309 1.64732 1.64546C2.74553 0.547828 4.08533 -0.00065825 5.66672 5.9284e-07C7.24812 0.000659436 8.58759 0.549475 9.68515 1.64645C10.7827 2.74342 11.3318 4.08219 11.3325 5.66276C11.3325 6.34927 11.2108 7.01371 10.9676 7.65608C10.7244 8.29846 10.4047 8.84793 10.0085 9.30451L15.8512 15.1422C15.9435 15.2344 15.9929 15.3481 15.9995 15.4831C16.0055 15.6169 15.956 15.7365 15.8512 15.8419C15.7457 15.9473 15.6291 16 15.5012 16C15.3733 16 15.2566 15.9473 15.1511 15.8419L9.30941 10.0032C8.81501 10.4242 8.24646 10.75 7.60375 10.9806C6.96104 11.2112 6.31504 11.3265 5.66574 11.3265M5.66574 10.3382C6.97752 10.3382 8.08529 9.88693 8.98904 8.98431C9.89213 8.0817 10.3437 6.97451 10.3437 5.66276C10.3437 4.351 9.89246 3.24414 8.99003 2.34219C8.0876 1.44023 6.98016 0.988924 5.66771 0.988265C4.35527 0.988265 3.2475 1.43957 2.34441 2.34219C1.44132 3.2448 0.989444 4.35166 0.988785 5.66276C0.988125 6.97385 1.43967 8.08071 2.34342 8.98332C3.24717 9.88594 4.35461 10.3372 5.66574 10.3372" fill="#6D717F"/>
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6.7583 17.2426L12.0009 12M12.0009 12L17.2435 6.75735M12.0009 12L6.7583 6.75735M12.0009 12L17.2435 17.2426" stroke="#6D717F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7.82484 13L12.7248 17.9C12.9248 18.1 13.0208 18.3333 13.0128 18.6C13.0048 18.8667 12.9005 19.1 12.6998 19.3C12.4998 19.4833 12.2665 19.5793 11.9998 19.588C11.7332 19.5967 11.4998 19.5007 11.2998 19.3L4.69984 12.7C4.59984 12.6 4.52884 12.4917 4.48684 12.375C4.44484 12.2583 4.42451 12.1333 4.42584 12C4.42718 11.8667 4.44818 11.7417 4.48884 11.625C4.52951 11.5083 4.60018 11.4 4.70084 11.3L11.3008 4.69999C11.4842 4.51665 11.7135 4.42499 11.9888 4.42499C12.2642 4.42499 12.5015 4.51665 12.7008 4.69999C12.9008 4.89999 13.0008 5.13765 13.0008 5.41299C13.0008 5.68832 12.9008 5.92565 12.7008 6.12499L7.82484 11H18.9998C19.2832 11 19.5208 11.096 19.7128 11.288C19.9048 11.48 20.0005 11.7173 19.9998 12C19.9992 12.2827 19.9032 12.5203 19.7118 12.713C19.5205 12.9057 19.2832 13.0013 18.9998 13H7.82484Z" fill="#6D717F"/>
    </svg>
);

export const Buscar: React.FC<BuscarProps> = ({
    placeholder = "¿Qué vas a aprender hoy?",
    value = "",
    variant = "search",
    onChange,
    onClose
}) => {
    const getTextColor = () => {
        switch (variant) {
            case "withClose":
                return 'var(--Color-Grey-Grey-600, #4D5461)';
            case "simple":
                return 'var(--Color-Grey-Grey-400, #9EA2AE)';
            case "search":
            default:
                return 'var(--Color-Grey-Grey-400, #9EA2AE)';
        }
    };

    const getPlaceholderText = () => {
        switch (variant) {
            case "withClose":
                return "Javascript";
            case "simple":
                return "Buscar";
            case "search":
            default:
                return placeholder;
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                width: '360px',
                height: '52px',
                padding: '12px 16px',
                alignItems: 'center',
                gap: '12px',
                flexShrink: 0,
                borderRadius: '4px',
                border: '1px solid var(--Color-Grey-Grey-300, #D2D5DB)',
                background: '#FFFFFF'
            }}
        >
            {/* Ícono de búsqueda o flecha */}
            {variant === "search" && <SearchIcon />}
            {variant === "simple" && <BackIcon />}
            {variant === "withClose" && <BackIcon />}

            {/* Input de texto */}
            <input
                type="text"
                placeholder={getPlaceholderText()}
                value={value}
                onChange={e => onChange?.(e.target.value)}
                style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    flex: 1,
                    color: getTextColor(),
                    fontFamily: 'Roboto',
                    fontSize: '12px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '16px'
                }}
            />

            {/* Ícono de cerrar */}
            {variant === "withClose" && (
                <button
                    onClick={onClose}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center'
                    }}
                >
                    <CloseIcon />
                </button>
            )}
        </div>
    );
};

export default Buscar;