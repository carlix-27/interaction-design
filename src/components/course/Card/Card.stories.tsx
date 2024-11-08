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
    render: args => <Card image={'circle-profile-avatar.png'} title={'John Marston'} description={'Especialista en diseño UX/UI. Conocimiento profesional de Javascript'} type={'instructor'}></Card>
}

export const ProjectCard: CardStories = {
    name: 'ProjectCard',
    render: args => <Card image={'https://img.freepik.com/vector-gratis/calculadora-vector-dibujos-animados-flotante-icono-ilustracion-educacion-icono-objeto-vector-plano-aislado_138676-10322.jpg'} title={'Proyecto 1'} description={'Calculadora básica'} type={'unit/project'}></Card>

}

export const UnitCard: CardStories = {
    name: 'UnitCard',
    render: args => <Card image={'https://upload.wikimedia.org/wikipedia/commons/a/a4/JavaScript_code.png'} title={'Unidad 1'} description={'En esta unidad comenzarás tus primeros pasos en Javascript'} type={'unit/project'}></Card>

}