import React from "react";
import { ForumCard } from "./CardForo";

export default {
    title: "Foro/CardForo",
    component: ForumCard,
};

export const Default = (args) => <ForumCard {...args} />;
Default.args = {
    author: "Valentino Gianuzzo",
    date: "2024-06-20",
    topic: "React y TypeScript",
    question: "¿Cómo tipar correctamente los props en un componente?",
    commentCount: 5,
    className: "",
};