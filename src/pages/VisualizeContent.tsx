import React from "react";
import Button from "../components/common/Button";
import List from "../components/course/List/List";
import Card from "../components/course/Card/Card";
import { PageControl } from "../components/common/PageControl/PageControl";

function VisualizeContent() {
  // @ts-ignore
  return (
    <div>
      <h1 className={"font-bodyFont"}>Navbar</h1>
      <div className={"grid gap-y-4 px-8"}>
        <div>
          <p className={"font-subtitleFont text-left"}>Vista Previa</p>
          {/*<Video />*/}
        </div>
        <div className={"grid gap-y-4"}>
          <p className={"font-subtitleFont text-left"}>
            Habilidades que aprenderas
          </p>
          <div className={"flex gap-2"}>
            <Button variant={"outlined"}>React</Button>
            <Button variant={"outlined"}>UI/UX</Button>
            <Button variant={"outlined"}>Figma</Button>
          </div>
          <Button variant={"fulfilled"}>Iniciar Curso</Button>
        </div>
        <div className={"grid gap-y-4"}>
          <p className={"font-subtitleFont text-left"}>Requisitos</p>
          <List
            title={"Computer"}
            details={"100%"}
            show_details={false}
            type={"list"}
          ></List>
          <List
            title={"Contexión a internet"}
            details={"Detalles"}
            show_details={false}
            type={"list"}
          ></List>
        </div>
        <div>
          <p className={"font-subtitleFont text-left"}>Instructor</p>
          <Card
            image={"circle-profile-avatar.png"}
            title={"John Marston"}
            description={
              "Especialista en diseño UX/UI. Conocimiento profesional de Javascript"
            }
            type={"instructor"}
          ></Card>
        </div>
        <div className={"grid gap-y-4"}>
          <p className={"font-subtitleFont text-left"}>Proyectos Destacados</p>
          <div className={"grid gap-y-2 justify-center"}>
            <Card
              image={
                "https://img.freepik.com/vector-gratis/calculadora-vector-dibujos-animados-flotante-icono-ilustracion-educacion-icono-objeto-vector-plano-aislado_138676-10322.jpg"
              }
              title={"Proyecto 1"}
              description={"Calculadora básica"}
              type={"unit/project"}
            ></Card>
            <PageControl totalDots={4} activePage={0} />
          </div>
        </div>
        <div>
          <p className={"font-subtitleFont text-left"}>
            Amigos que hacen este curso
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default VisualizeContent;
