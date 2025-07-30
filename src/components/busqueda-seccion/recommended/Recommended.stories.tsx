import React from "react";
import Recommended from "./Recommended";

export default {
    title: "BusquedaSeccion/Recommended",
    component: Recommended,
};

export const Default = () => <Recommended />;

export const CustomProps = () => (
    <Recommended
        title="Desarrollo Web"
        subtitle="Meta - Curso Avanzado"
        imageUrl="https://via.placeholder.com/80x44"
        className="border border-gray-300"
    />
);