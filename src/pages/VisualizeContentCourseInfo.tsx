import React from "react";
import Button from "../components/common/Button";
import Card from "../components/course/Card/Card";
import { PageControl } from "../components/common/PageControl/PageControl";
import { Link } from "react-router-dom";

function VisualizeContentCourseInfo() {
  return (
    <div className={"grid bg-primary-50 h-full py-2"}>
      <h1 className={"font-bodyFont"}>Navbar</h1>
      <div className={"grid gap-y-4 px-8"}>
        <div>
          <p className={"font-subtitleFont text-left"}>Vista Previa</p>
          <p>Video</p>
        </div>
        <div className={"grid gap-y-4"}>
          <div className={"flex gap-x-4"}>
            <Button variant={"outlined"}>Ver Progreso</Button>
            <Button variant={"disabled"}>Desafiar</Button>
          </div>
          <Button variant={"fulfilled"}>Foros de consulta</Button>
        </div>
        <div className={"grid gap-y-4"}>
          <p className={"text-subtitle2 font-subtitleFont text-left"}>
            Unidades
          </p>
          <Link to={"/unit"}>
            <div className={"grid gap-y-2 "}>
              <Card
                image={
                  "https://img.freepik.com/vector-gratis/calculadora-vector-dibujos-animados-flotante-icono-ilustracion-educacion-icono-objeto-vector-plano-aislado_138676-10322.jpg"
                }
                title={"Unidad 1"}
                description={"Calculadora básica"}
                type={"unit/project"}
              ></Card>
              <div className={"inline-flex justify-center"}>
                <PageControl totalDots={5} activePage={0} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VisualizeContentCourseInfo;
