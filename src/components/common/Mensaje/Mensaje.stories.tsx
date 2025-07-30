import React from "react";
import { Mensaje } from "./Mensaje";

export default {
    title: "Componentes/Mensaje",
    component: Mensaje,
};

export const Default = () => (
    <Mensaje
        autor="Juan Pérez"
        fecha="01/07/2024"
        hora="10:30"
        texto="¡Hola! Este es un mensaje de prueba."
    />
);

export const Online = () => (
    <Mensaje
        autor="Ana Gómez"
        fecha="01/07/2024"
        hora="11:00"
        texto="Estoy en línea."
        estaOnline={true}
    />
);
