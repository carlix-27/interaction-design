import React, { useEffect, useState } from "react";
import Button from "../../components/common/Button";
import Card from "../../components/course/Card/Card";
import { PageControl } from "../../components/common/PageControl/PageControl";
import { Link } from "react-router-dom";
import NavbarTop from "../../components/common/NavbarTop/NavbarTop";
import NavbarBottom from "../../components/common/NavbarBottom/NavbarBottom";
import LoadingSpinner from "../../components/common/LoadingSpinner/LoadingSpinner";
import Video from "../../components/course/Video/video";

const sleep = (ms: number | undefined) => new Promise(r => setTimeout(r, ms));

function VisualizeContentCourseInfo() {
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        sleep(1000).then(() => setShowLoader(false));
    }, []);
    return (
        <div className={"h-[100vh] bg-primary-50"}>
            <div className={"grid gap-y-8"}>
                <NavbarTop courseName={"JavaScript"} />
                <div className={"grid gap-y-4 px-8 pb-24"}>
                    <div className={"grid gap-y-4"}>
                        <p
                            className={
                                "fontFamily-subtitleFont text-left text-subtitle2 font-semibold"
                            }
                        >
                            Vista Previa
                        </p>
                        <Video
                            backgroundImage={
                                "https://cdn.prod.website-files.com/5f5a53e153805db840dae2db/646f78e97936bca6f5b4933c_javascript-que-es-para-que-sirve.jpg"
                            }
                        />
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
                                "fontFamily-subtitleFont text-left text-subtitle2 font-semibold"
                            }
                        >
                            Unidades
                        </p>

                        {showLoader ? (
                            <LoadingSpinner />
                        ) : (
                            <div className={"grid gap-y-2"}>
                                <Link to={"/unit"}>
                                    <Card
                                        image={
                                            "https://stride.com.co/wp-content/uploads/2023/01/gabriel-heinzer-g5jpH62pwes-unsplash-1024x768.jpg"
                                        }
                                        title={"Unidad 1: Saludo Interactivo"}
                                        description={
                                            "Aprende los fundamentos de JavaScript: variables, tipos de datos y sintaxis básica. Al final, podrás escribir código simple y agregar dinamismo a sitios web."
                                        }
                                        type={"unit/project"}
                                    ></Card>
                                </Link>
                                <div className={"inline-flex justify-center"}>
                                    <PageControl totalDots={5} activePage={0} />
                                </div>
                            </div>
                        )}
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

export default VisualizeContentCourseInfo;
