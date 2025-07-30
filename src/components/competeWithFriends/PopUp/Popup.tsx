import React, { HTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";

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
            <h2 className="mb-2 text-lg font-semibold text-black">Juegos</h2>
            <p className="mb-4 text-sm text-gray-600">
                ¡Bienvenido a la Zona de Desafíos! Desafía jugadores, compite en
                juegos y escala en el ranking. ¡Es tu momento de brillar!
            </p>
            <button
                className="mb-2 w-full rounded-lg bg-purple-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-purple-600"
                onClick={onAccept}
            >
                Aceptar
            </button>
            <button
                className="mb-2 w-full rounded-lg bg-white px-4 py-2 font-semibold text-purple-500 shadow shadow-md transition-colors hover:bg-gray-100"
                onClick={onHide}
            >
                No volver a mostrar
            </button>
        </div>
    );
};

export default Popup;
