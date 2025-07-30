import React from "react";
import { QuestionQuizz } from "./QuestionQuizz";

export default {
    title: "CompetirConAmigosFInal/QuestionQuizz",
    component: QuestionQuizz,
};

export const Default = () => (
    <QuestionQuizz
        question="¿Cuál es el hook más usado en React?"
        currentQuestion={2}
        totalQuestions={10}
        progress={20}
    />
);