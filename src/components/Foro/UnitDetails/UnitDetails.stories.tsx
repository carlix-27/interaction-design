import React from "react";
import UnitDetails from "./UnitDetails";

export default {
    title: "Foro/UnitDetails",
    component: UnitDetails,
};

export const Default = () => <UnitDetails />;

// Ejemplo con props personalizados (ajusta según la interfaz real)
export const CustomProps = () => (
    <UnitDetails
        title="Unidad 1: Introducción"
        description="Descripción de la unidad"
        className="border border-gray-300"
    />
);