import React from "react";
import NavbarBottom from "../../components/common/NavbarBottom/NavbarBottom";
import InputField from "../../components/common/Input/InputField";
import Pill from "../../components/common/Pildora/Pill";
import CourseCard from "../../components/home/CourseCard/CourseCard";
import { iconList } from "../../assets/icons/icon_list";
import HomeHeader from "../../components/home/HomeHeader/HomeHeader";

function HomePageUIUX() {
    return (
        <div className={"h-[100vh] bg-primary-50"}>
            <div>
                <HomeHeader name={"Martina"} />
            </div>
            <div className={"grid gap-y-2 p-2 py-4"}>
                <div className={"grid gap-y-2 p-2"}>
                    <div className={"px-4 py-2"}>
                        <InputField
                            placeholder={"Buscar"}
                            onChange={() => console.log("Input")}
                            rightIcon={iconList.search}
                        >
                            UX/UI
                        </InputField>
                    </div>
                    <div className={"grid gap-y-8 py-2"}>
                        <p
                            className={
                                "fontFamily-subtitleFont text-left text-h5 font-semibold"
                            }
                        >
                            Cursos
                        </p>
                        <div
                            className={
                                "flex gap-x-4 overflow-x-auto whitespace-nowrap"
                            }
                        >
                            <Pill>Arte</Pill>
                            <Pill>Diseño</Pill>
                            <Pill>Música</Pill>
                            <Pill>Programación</Pill>
                        </div>
                    </div>
                </div>
                <div className={"grid gap-y-4 p-2"}>
                    <div className={"grid gap-y-4 p-2"}>
                        <p
                            className={
                                "fontFamily-subtitleFont text-left text-subtitle1 font-semibold"
                            }
                        >
                            Nuevos
                        </p>
                        <div
                            className={
                                "flex gap-x-4 overflow-x-auto whitespace-nowrap"
                            }
                        >
                            <CourseCard
                                title={"UI/UX"}
                                description={"En curso"}
                                image={
                                    "https://static.ditdot.hr/images/info/ux-ui/ux-ui-small-00.png"
                                }
                            />
                            <CourseCard
                                title={"UX Design"}
                                description={""}
                                image={
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1VcAc4UvGNC1bWb2d9hY7q0AC5vFTlzrhAA&s"
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
            <NavbarBottom
                activeButton={"home"}
                onButtonClick={() => console.log("Test")}
            />
        </div>
    );
}

export default HomePageUIUX;
