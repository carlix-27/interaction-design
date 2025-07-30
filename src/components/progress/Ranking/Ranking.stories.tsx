import React from "react";
import Ranking, {RankingItem} from "./Ranking";

export default {
    title: "Progress/Ranking",
    component: Ranking,
};

const items: RankingItem[] = [
    {
        title: "Title",
        progress: "1500 pts",
        medalType: "gold",
        isHighlighted: true,
    },
    {
        title: "Title",
        progress: "1200 pts",
        medalType: "silver",
    },
    {
        title: "Title",
        progress: "900 pts",
        medalType: "bronze",
    },
];

export const VariantePrimero = () => (
    <Ranking variant="first" items={items}/>
);
export const VarianteSegundo = () => (
    <Ranking variant="second" items={items}/>
);
export const VarianteTercero = () => (
    <Ranking variant="third" items={items}/>
);
export const VarianteCuarto = () => (
    <Ranking variant="fourth" items={items}/>
);
export const VarianteSinMedalla = () => (
    <Ranking variant="notMedal" items={items}/>
);

export const Basico = () => (
    <Ranking subject="Matematica I" items={items} showMore={true}/>
);

export const SinMas = () => (
    <Ranking subject="Matematica I" items={items} showMore={false}/>
);