import React from "react";
import Unit from "./Unit";

export default {
    title: "Foro/Unit",
    component: Unit,
};

export const Default = () => <Unit />;

// Ejemplo con props personalizados (ajusta según la interfaz de Unit)
export const CustomProps = () => (
    <Unit
        title="Unidad 2: Algoritmos"
        description="Aprende sobre algoritmos y estructuras de datos"
        className="border border-gray-300"
    />
);