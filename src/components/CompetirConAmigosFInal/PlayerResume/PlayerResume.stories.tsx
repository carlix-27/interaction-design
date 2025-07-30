import React from "react";
import { PlayerResume } from "./PlayerResume";

const player = {
    name: "Valentino Gianuzzo",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    techStack: "React, TypeScript",
};

export default {
    title: "CompetirConAmigosFInal/PlayerResume",
    component: PlayerResume,
};

export const Default = () => (
    <PlayerResume player={player} />
);

export const CompactChallenge = () => (
    <PlayerResume player={player} variant="compact-challenge" />
);

export const CompactSent = () => (
    <PlayerResume player={player} variant="compact-sent" />
);