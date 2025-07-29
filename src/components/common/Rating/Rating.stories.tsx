import React from "react";
import Rating from "./Rating";

export default {
    title: "Componentes/Rating",
    component: Rating,
};

export const Basico = () => <Rating rating={4.5} date="2024-07-01" />;
export const Bajo = () => <Rating rating={2.3} date="2024-06-15" />;
export const Perfecto = () => <Rating rating={5} date="2024-06-30" />;
export const SinPuntaje = () => <Rating rating={0} date="2024-05-10" />;