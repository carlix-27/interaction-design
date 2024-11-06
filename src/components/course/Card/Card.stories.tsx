import React from 'react';
import Card from "./Card";

import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Card> = {
    title: "Card",
    component: Card,
}

export default meta


type CardStories = StoryObj<typeof Card>;

export const InstructorCard: CardStories = {
    name: 'InstructorCard',
    render: args => <Card image={'https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?s=612x612&w=0&k=20&c=NJSugBzNuZqb7DJ8ZgLfYKb3qPr2EJMvKZ21Sj5Sfq4='} title={'John Marston'} description={'Especialista en diseño UX/UI\\nConocimiento profesional de Javascript'}></Card>
}

export const ProjectCard: CardStories = {
    name: 'ProjectCard',
    render: args => <Card image={''} title={'Proyecto 1'} description={'Calculadora básica'}></Card>

}

export const UnitCard: CardStories = {
    name: 'UnitCard',
    render: args => <Card image={''} title={'Unidad 1'} description={'En esta unidad comenzarás tus primeros pasos en Javascript'}></Card>

}