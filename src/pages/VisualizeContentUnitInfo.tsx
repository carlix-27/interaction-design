import React from "react";
import Card from "../components/course/Card/Card";
import { PageControl } from "../components/common/PageControl/PageControl";

function VisualizeContentUnitInfo() {
  return (
      <div className={"bg-primary-50 h-[100vh]"}>
        <h1 className={"font-bodyFont"}>Navbar</h1>
        <div className={"grid gap-y-4 px-8"}>
          <div className={"grid gap-y-4"}>
            <p className={"font-subtitleFont text-left text-subtitle2 font-semibold"}>
              Unidad 1
            </p>
            <div className={"grid gap-y-2"}>
              <Card
                  image={
                    "https://img.freepik.com/vector-gratis/calculadora-vector-dibujos-animados-flotante-icono-ilustracion-educacion-icono-objeto-vector-plano-aislado_138676-10322.jpg"
                  }
                  title={"Unidad 1"}
                  description={
                    "En esta unidad comenzarás tus primeros pasos en Javascript. Profundizarás en tus habilidades de forma tal que llegarás a conocer las bases de la programación en Javascript."
                  }
                  type={"unit/project"}
              ></Card>
              <div className={"inline-flex justify-center"}>
                <PageControl totalDots={5} activePage={0}/>
              </div>
            </div>
          </div>
          <div className={"grid gap-y-4"}>
            <p className={"font-subtitleFont text-left text-subtitle2 font-semibold"}>
              Proyectos
            </p>
            <div className={"grid gap-y-4"}>
              <Card
                  image={
                    "https://img.freepik.com/vector-gratis/calculadora-vector-dibujos-animados-flotante-icono-ilustracion-educacion-icono-objeto-vector-plano-aislado_138676-10322.jpg"
                  }
                  title={"Proyecto 1"}
                  description={
                    "Calculadora básica. En base a variables, tipos de datos y operadores"
                  }
                  type={"unit/project"}
              ></Card>
              <Card
                  image={
                    "https://img.freepik.com/vector-gratis/calculadora-vector-dibujos-animados-flotante-icono-ilustracion-educacion-icono-objeto-vector-plano-aislado_138676-10322.jpg"
                  }
                  title={"Proyecto 2"}
                  description={"Juego de adivinanza de números. "}
                  type={"unit/project"}
              ></Card>
            </div>
          </div>
        </div>
      </div>
  );
}

export default VisualizeContentUnitInfo;
