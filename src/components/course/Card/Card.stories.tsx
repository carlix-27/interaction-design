import React from "react";
import Card from "./Card";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Course/Card",
  component: Card,
  argTypes: {
    title: {
      control: "text",
      if: { arg: "type", neq: "question" },
    },
    image: { control: false },
    altText: { control: false },
    type: { control: false },
    status: {
      control: "boolean",
      if: { arg: "type", eq: "question" },
    },
  },
};

export default meta;

type CardStories = StoryObj<typeof Card>;

export const InstructorCard: CardStories = {
  name: "InstructorCard",
  args: {
    type: "instructor",
  },
  render: (args) => (
    <Card
      image={"circle-profile-avatar.png"}
      title={"John Marston"}
      description={
        "Especialista en diseño UX/UI. Conocimiento profesional de Javascript"
      }
      type={args.type}
    ></Card>
  ),
};

export const ProjectCard: CardStories = {
  name: "ProjectCard",
  render: () => (
    <Card
      image={
        "https://img.freepik.com/vector-gratis/calculadora-vector-dibujos-animados-flotante-icono-ilustracion-educacion-icono-objeto-vector-plano-aislado_138676-10322.jpg"
      }
      title={"Proyecto 1"}
      description={"Calculadora básica"}
      type={"unit/project"}
    ></Card>
  ),
};

export const UnitCard: CardStories = {
  name: "UnitCard",
  render: () => (
    <Card
      image={
        "https://thumbs.dreamstime.com/z/vertical-shot-screen-html-javascript-source-code-web-page-development-data-196508345.jpg"
      }
      title={"Unidad 1"}
      description={"En esta unidad comenzarás tus primeros pasos en Javascript"}
      type={"unit/project"}
    ></Card>
  ),
};

export const QuestionCard: CardStories = {
  name: "questionCard",
  args: {
    type: "question",
    status: true,
  },
  render: (args) => (
    <Card
      image={
        "https://thumbs.dreamstime.com/z/vertical-shot-screen-html-javascript-source-code-web-page-development-data-196508345.jpg"
      }
      title={args.title}
      description={"¿Qué diferencia hay entre var, let, y const en JavaScript?"}
      type={args.type}
      status={args.status}
    ></Card>
  ),
};
