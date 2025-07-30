import React from "react";
import { AnswerOptionButton } from "./AnswerOptionButton";

export default {
    title: "CompetirConAmigosFInal/AnswerOptionButton",
    component: AnswerOptionButton,
};

export const Default = () => (
    <AnswerOptionButton text="Opción 1" />
);

export const Secondary = () => (
    <AnswerOptionButton text="Opción 2" variant="secondary" />
);

export const Selected = () => (
    <AnswerOptionButton text="Opción seleccionada" selected />
);