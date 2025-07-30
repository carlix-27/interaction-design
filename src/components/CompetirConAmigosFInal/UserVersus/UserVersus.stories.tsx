import React from "react";
import { UsersVersus } from "./UserVersus";

const user1 = {
    name: "Valentino",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
};

const user2 = {
    name: "Gianuzzo",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
};

export default {
    title: "CompetirConAmigosFInal/UsersVersus",
    component: UsersVersus,
};

export const Default = () => (
    <UsersVersus user1={user1} user2={user2} />
);