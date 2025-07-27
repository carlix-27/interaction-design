import React from "react";
import Rating from "./Rating";

export default {
    title: "Componentes/Rating",
    component: Rating,
};

export const Basico = () => <Rating rating={4.5} date="01/07/2024" />;
export const Bajo = () => <Rating rating={2.3} date="15/06/2024" />;
export const Perfecto = () => <Rating rating={5} date="30/06/2024" />;
export const SinPuntaje = () => <Rating rating={0} date="10/05/2024" />;