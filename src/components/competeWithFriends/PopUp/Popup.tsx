import React, { HTMLAttributes } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const challengeZoneVariant = cva([
    "rounded-lg",
    "bg-white",
    "shadow-lg",
    "flex",
    "w-80",
    "p-6",
    "flex-col",
    "items-center",
    "text-center",
]);

interface ChallengeZonePopupProps extends HTMLAttributes<HTMLDivElement> {
    onAccept: () => void;
    onHide: () => void;
}

const Popup: React.FC<ChallengeZonePopupProps> = ({ onAccept, onHide }) => {
    return (
        <div className={challengeZoneVariant()}>
            <h2 className="text-lg font-semibold text-black mb-2">Juegos</h2>
            <p className="text-sm text-gray-600 mb-4">
                ¡Bienvenido a la Zona de Desafíos! Desafía jugadores, compite en juegos y escala en el ranking. ¡Es tu
                momento de brillar!
            </p>
            <button
                className="bg-purple-500 text-white py-2 px-4 rounded-lg w-full mb-2 font-semibold hover:bg-purple-600 transition-colors"
                onClick={onAccept}
            >
                Aceptar
            </button>
            <button
                className="bg-white text-purple-500 py-2 px-4 rounded-lg w-full mb-2 font-semibold shadow hover:bg-gray-100 transition-colors shadow-md"
                onClick={onHide}
            >
                No volver a mostrar
            </button>
        </div>

    );
};

export default Popup;
