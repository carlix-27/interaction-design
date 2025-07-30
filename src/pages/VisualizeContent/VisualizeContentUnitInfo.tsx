import React from "react";
import Card from "../../components/course/Card/Card";
import { PageControl } from "../../components/common/PageControl/PageControl";
import NavbarTop from "../../components/common/NavbarTop/NavbarTop";
import NavbarBottom from "../../components/common/NavbarBottom/NavbarBottom";

function VisualizeContentUnitInfo() {
    return (
        <div className={"h-[100vh] bg-primary-50"}>
            <div className={"grid gap-y-8"}>
                <NavbarTop courseName={"JavaScript"} />
                <div className={"grid gap-y-4 px-8 pb-24"}>
                    <div className={"grid gap-y-4"}>
                        <p
                            className={
                                "text-left font-subtitleFont text-subtitle2 font-semibold"
                            }
                        >
                            Unidad 1
                        </p>
                        <div className={"grid gap-y-2"}>
                            <Card
                                image={
                                    "https://stride.com.co/wp-content/uploads/2023/01/gabriel-heinzer-g5jpH62pwes-unsplash-1024x768.jpg"
                                }
                                title={"Introducción a JavaScript"}
                                description={
                                    "Explora los fundamentos de JavaScript, el lenguaje de la web. Esta unidad abarca conceptos clave como variables, tipos de datos y sintaxis básica, estableciendo una base sólida. Al final, podrás escribir tus primeras líneas de código y entender cómo JavaScript aporta dinamismo a los sitios web."
                                }
                                type={"unit/project"}
                            ></Card>
                        </div>
                    </div>
                    <div className={"grid gap-y-4"}>
                        <p
                            className={
                                "text-left font-subtitleFont text-subtitle2 font-semibold"
                            }
                        >
                            Proyectos
                        </p>
                        <div className={"grid gap-y-4"}>
                            <Card
                                image={
                                    "https://thumbs.dreamstime.com/b/hello-world-javascript-programming-language-hello-world-code-hello-world-code-written-javascript-programming-language-syntax-248663704.jpg"
                                }
                                title={"Saludo Interactivo"}
                                description={
                                    "Crea una página web que salude a los usuarios por su nombre, utilizando variables y manejo básico de entradas en JavaScript"
                                }
                                type={"unit/project"}
                            ></Card>
                            <Card
                                image={
                                    "https://img.freepik.com/vector-gratis/calculadora-vector-dibujos-animados-flotante-icono-ilustracion-educacion-icono-objeto-vector-plano-aislado_138676-10322.jpg"
                                }
                                title={"Calculadora Simple"}
                                description={
                                    "Construye una calculadora para operaciones aritméticas básicas, practicando funciones de JavaScript y manejo de eventos."
                                }
                                type={"unit/project"}
                            ></Card>
                        </div>
                    </div>
                </div>
                <NavbarBottom
                    activeButton={"list"}
                    onButtonClick={() => console.log("Test")}
                />
            </div>
        </div>
    );
}

export default VisualizeContentUnitInfo;
