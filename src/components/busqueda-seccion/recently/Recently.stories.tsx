import React from "react";
import Recently from "./Recently";

export default {
    title: "BusquedaSeccion/Recently",
    component: Recently,
};

export const Default = () => <Recently />;

export const CustomText = () => (
    <Recently text="inteligencia artificial" className="border border-gray-300" />
);