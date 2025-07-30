import React from "react";
import Button from "../../components/common/Button";
import List from "../../components/course/List/List";
import Card from "../../components/course/Card/Card";
import { PageControl } from "../../components/common/PageControl/PageControl";
import { iconList } from "../../assets/icons/icon_list";
import { Link } from "react-router-dom";
import Comment from "../../components/course/Comment/Comment";
import NavbarTop from "../../components/common/NavbarTop/NavbarTop";
import NavbarBottom from "../../components/common/NavbarBottom/NavbarBottom";
import Video from "../../components/course/Video/video";
import User from "../../components/common/User/user";

function VisualizeContentHome() {
    return (
        <div className={"grid h-full w-full gap-y-8 bg-primary-50"}>
            <NavbarTop courseName={"JavaScript"} />
            <div className={"grid gap-y-4 px-6 pb-24"}>
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
                <div className={"grid gap-y-6"}>
                    <p
                        className={
                            "fontFamily-subtitleFont text-left text-subtitle2 font-semibold"
                        }
                    >
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
                    <p
                        className={
                            "fontFamily-subtitleFont text-left text-subtitle2 font-semibold"
                        }
                    >
                        Requisitos
                    </p>
                    <List
                        title={"Computadora"}
                        icon={iconList.computer}
                        details={"100%"}
                    ></List>
                    <List
                        title={"Conexión a internet"}
                        details={"Detalles"}
                        icon={iconList.wifi}
                    ></List>
                </div>
                <div className={"grid gap-y-4"}>
                    <p
                        className={
                            "fontFamily-subtitleFont text-left text-subtitle2 font-semibold"
                        }
                    >
                        Instructor
                    </p>
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
                    <p
                        className={
                            "fontFamily-subtitleFont text-left text-subtitle2 font-semibold"
                        }
                    >
                        Proyectos Destacados
                    </p>
                    <div className={"grid gap-y-2"}>
                        <Card
                            image={
                                "https://stride.com.co/wp-content/uploads/2023/01/gabriel-heinzer-g5jpH62pwes-unsplash-1024x768.jpg"
                            }
                            title={"Saludo Interactivo"}
                            description={
                                "Crea una página web que salude a los usuarios por su nombre, utilizando variables y manejo básico de entradas en JavaScript"
                            }
                            type={"unit/project"}
                        ></Card>
                        <div className={"inline-flex justify-center"}>
                            <PageControl totalDots={4} activePage={0} />
                        </div>
                    </div>
                </div>
                <div className={"grid gap-y-2"}>
                    <p
                        className={
                            "fontFamily-subtitleFont text-left text-subtitle2 font-semibold"
                        }
                    >
                        Amigos que hacen este curso
                    </p>
                    <div className={"grid gap-y-2 px-8"}>
                        <div className={"flex gap-12"}>
                            <User
                                name={"Juan Lopez"}
                                iconName={iconList.avatarManThinking}
                            />
                            <User
                                name={"Ana Paola"}
                                iconName={iconList.avatarWomanHeartSign}
                            />
                            <User
                                name={"Pedro Suarez"}
                                iconName={iconList.avatarManWithDog}
                            />
                        </div>
                        <div className={"inline-flex justify-center"}>
                            <PageControl totalDots={4} activePage={0} />
                        </div>
                    </div>
                </div>
                <div className={"grid gap-y-2"}>
                    <p
                        className={
                            "text-left font-subtitleFont text-subtitle2 font-semibold"
                        }
                    >
                        Comentarios
                    </p>
                    <Comment
                        authorName={"Alan Walker"}
                        content={
                            "Un curso muy entretenido y muy variado en su contenido"
                        }
                        picture={iconList.avatarManThinking}
                    />
                </div>
                <div className={"flex gap-2 pt-4"}>
                    <Button variant={"outlined"}>Volver arriba</Button>
                    <Button variant={"fulfilled"}>Más reseñas</Button>
                </div>
            </div>
            <NavbarBottom
                activeButton={"list"}
                onButtonClick={() => console.log("Test")}
            />
        </div>
    );
}

export default VisualizeContentHome;
