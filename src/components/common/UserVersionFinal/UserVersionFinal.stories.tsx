import React from "react";
import { UserVersionFinal } from "./UserVersionFinal";

export default {
    title: "Componentes/UserVersionFinal",
    component: UserVersionFinal,
};

export const Basico = () => (
    <UserVersionFinal name="Valentino Gianuzzo" date="01/07/2024" rating={4.5} imageUrl="https://randomuser.me/api/portraits/men/1.jpg" />
);

export const SinRating = () => (
    <UserVersionFinal name="Usuario Anónimo" date="15/06/2024" rating={0} imageUrl="https://randomuser.me/api/portraits/men/2.jpg" />
);

export const Perfecto = () => (
    <UserVersionFinal name="María Pérez" date="30/06/2024" rating={5} imageUrl="https://randomuser.me/api/portraits/women/1.jpg" />
);