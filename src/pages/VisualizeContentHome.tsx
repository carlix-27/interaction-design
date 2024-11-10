import React from "react";
import Button from "../components/common/Button";
import List from "../components/course/List/List";
import Card from "../components/course/Card/Card";
import { PageControl } from "../components/common/PageControl/PageControl";
import { iconList } from "../assets/icons/icon_list";
import Icon from "../assets/icons/Icon";
import { Link } from "react-router-dom";

function VisualizeContentHome() {
  return (
    <div>
      <h1 className={"font-bodyFont"}>Navbar</h1>
      <div className={"grid gap-y-4 px-8"}>
        <div>
          <p className={"font-subtitleFont text-left"}>Vista Previa</p>
          <p>Video</p>
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
          <Link to={"/course"}>
            <Button variant={"fulfilled"}>Iniciar Curso</Button>
          </Link>
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
            title={"Conexión a internet"}
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
          <div className={"grid gap-y-2 "}>
            <Card
              image={
                "https://img.freepik.com/vector-gratis/calculadora-vector-dibujos-animados-flotante-icono-ilustracion-educacion-icono-objeto-vector-plano-aislado_138676-10322.jpg"
              }
              title={"Proyecto 1"}
              description={"Calculadora básica"}
              type={"unit/project"}
            ></Card>
            <div className={"inline-flex justify-center"}>
              <PageControl totalDots={4} activePage={0} />
            </div>
          </div>
        </div>
        <div>
          <p className={"font-subtitleFont text-left"}>
            Amigos que hacen este curso
          </p>
          <div>
            <div className={"flex gap-4"}>
              <Icon name={iconList.avatarWoman} />
              <Icon name={iconList.avatarManThinking} />
              <Icon name={iconList.avatarWomanHeartSign} />
            </div>
            <div className={"inline-flex justify-center"}>
              <PageControl totalDots={4} activePage={0} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisualizeContentHome;
