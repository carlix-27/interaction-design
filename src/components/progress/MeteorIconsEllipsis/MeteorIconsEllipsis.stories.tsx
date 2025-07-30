// src/components/progress/MeteorIconsEllipsis/MeteorIconsEllipsis.stories.tsx
import React from "react";
import MeteorIconsEllipsis from "./MeteorIconElipsis";

export default {
    title: "Progress/MeteorIconsEllipsis",
    component: MeteorIconsEllipsis,
};

export const Default = () => <MeteorIconsEllipsis />;

export const CustomClass = () => (
    <MeteorIconsEllipsis className="bg-gray-200 p-2 rounded" />
);