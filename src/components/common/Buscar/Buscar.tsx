import React from "react";

type BuscarProps = {
    placeholder?: string;
    onChange?: (value: string) => void;
    value?: string;
};

export const Buscar: React.FC<BuscarProps> = ({
    placeholder = "¿Qué vas a aprender hoy?",
    onChange,
    value,
}) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 12px",
                borderRadius: "8px",
                backgroundColor: "#F8F9FA",
                border: "1px solid #E0E0E0",
                width: "100%",
                maxWidth: "400px",
            }}
        >
            {/* Ícono SVG de lupa */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                stroke="#6C757D"
                strokeWidth="2"
                viewBox="0 0 24 24"
                style={{ marginRight: 8 }}
            >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            {/* Input */}
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={e => onChange?.(e.target.value)}
                style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                    flex: 1,
                    fontSize: "14px",
                    color: "#495057",
                }}
            />
        </div>
    );
};
