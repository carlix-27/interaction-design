import React from "react";
import Keyboard from "./Keyboard";

export default {
    title: "Foro/Keyboard",
    component: Keyboard,
};

export const Default = (args) => <Keyboard {...args} />;
Default.args = {
    // Agrega aquí las props que acepte tu componente Keyboard
};