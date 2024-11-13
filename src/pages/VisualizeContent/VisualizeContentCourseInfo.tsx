import React, { useEffect, useState } from "react";
import Button from "../../components/common/Button";
import Card from "../../components/course/Card/Card";
import { PageControl } from "../../components/common/PageControl/PageControl";
import { Link } from "react-router-dom";
import NavbarTop from "../../components/common/NavbarTop/NavbarTop";
import NavbarBottom from "../../components/common/NavbarBottom/NavbarBottom";
import LoadingSpinner from "../../components/common/LoadingSpinner/LoadingSpinner";

const sleep = (ms: number | undefined) => new Promise((r) => setTimeout(r, ms));

function VisualizeContentCourseInfo() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    sleep(1000).then(() => setShowLoader(false));
  }, []);
  if (!showLoader) {
    return (
      <div className={"bg-primary-50 h-[100vh]"}>
        <div className={"grid gap-y-8"}>
          <NavbarTop courseName={"JavaScript"} />
          <div className={"grid gap-y-4 px-8 pb-24"}>
            <div>
              <p
                className={
                  "font-subtitleFont text-left text-subtitle2 font-semibold"
                }
              >
                Vista Previa
              </p>
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
              <p
                className={
                  "font-subtitleFont text-left text-subtitle2 font-semibold"
                }
              >
                Unidades
              </p>

              <div className={"grid gap-y-2"}>
                <Link to={"/unit"}>
                  <Card
                    image={
                      "https://img.freepik.com/vector-gratis/calculadora-vector-dibujos-animados-flotante-icono-ilustracion-educacion-icono-objeto-vector-plano-aislado_138676-10322.jpg"
                    }
                    title={"Unidad 1"}
                    description={"Calculadora básica"}
                    type={"unit/project"}
                  ></Card>
                </Link>
                <div className={"inline-flex justify-center"}>
                  <PageControl totalDots={5} activePage={0} />
                </div>
              </div>
            </div>
          </div>
          <NavbarBottom
            activeButton={"home"}
            onButtonClick={() => console.log("Test")}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={"h-[100vh] items-center justify-center"}>
        <LoadingSpinner />
      </div>
    );
  }
}

export default VisualizeContentCourseInfo;
