import React from "react";
import Card from "./Card";

import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Course/Card",
  component: Card,
  argTypes: {
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    image: { 
      control: "text",
      description: "URL or path to the image"
    },
    altText: { 
      control: "text",
      if: { arg: "type", neq: "course" }
    },
    type: { 
      control: "select",
      options: ["unit/project", "instructor", "question", "course"]
    },
    status: {
      control: "boolean",
      if: { arg: "type", eq: "question" },
    },
    rating: {
      control: { type: "number", min: 0, max: 5, step: 0.1 },
      if: { arg: "type", eq: "course" },
    },
    reviewCount: {
      control: { type: "number", min: 0, step: 1 },
      if: { arg: "type", eq: "course" },
    },
  },
};

export default meta;

type CardStories = StoryObj<typeof Card>;

export const InstructorCard: CardStories = {
  name: "InstructorCard",
  args: {
    type: "instructor",
    image: "circle-profile-avatar.png",
    title: "John Marston",
    description: "Especialista en diseño UX/UI. Conocimiento profesional de Javascript",
  },
  render: (args) => (
    <Card
      image={args.image}
      title={args.title}
      description={args.description}
      type={args.type}
      altText={args.altText}
    />
  ),
};

export const ProjectCard: CardStories = {
  name: "ProjectCard",
  args: {
    type: "unit/project",
    image: "https://img.freepik.com/vector-gratis/calculadora-vector-dibujos-animados-flotante-icono-ilustracion-educacion-icono-objeto-vector-plano-aislado_138676-10322.jpg",
    title: "Proyecto 1",
    description: "Calculadora básica",
  },
  render: (args) => (
    <Card
      image={args.image}
      title={args.title}
      description={args.description}
      type={args.type}
      altText={args.altText}
    />
  ),
};

export const UnitCard: CardStories = {
  name: "UnitCard",
  args: {
    type: "unit/project",
    image: "https://thumbs.dreamstime.com/z/vertical-shot-screen-html-javascript-source-code-web-page-development-data-196508345.jpg",
    title: "Unidad 1",
    description: "En esta unidad comenzarás tus primeros pasos en Javascript",
  },
  render: (args) => (
    <Card
      image={args.image}
      title={args.title}
      description={args.description}
      type={args.type}
      altText={args.altText}
    />
  ),
};

export const QuestionCard: CardStories = {
  name: "questionCard",
  args: {
    type: "question",
    image: "https://thumbs.dreamstime.com/z/vertical-shot-screen-html-javascript-source-code-web-page-development-data-196508345.jpg",
    title: "",
    description: "¿Qué diferencia hay entre var, let, y const en JavaScript?",
    status: true,
  },
  render: (args) => (
    <Card
      image={args.image}
      title={args.title}
      description={args.description}
      type={args.type}
      status={args.status}
      altText={args.altText}
    />
  ),
};

export const CourseCard: CardStories = {
  name: "CourseCard",
  args: {
    type: "course",
    image: "java-script.png",
    title: "Javascript Developer",
    description: "Meta Platforms, Inc. Bootcamp Intensivo",
    rating: 4.8,
    reviewCount: 135,
  },
  render: (args) => (
    <Card
      image={args.image}
      title={args.title}
      description={args.description}
      type={args.type}
      rating={args.rating}
      reviewCount={args.reviewCount}
      altText={args.altText}
    />
  ),
};
