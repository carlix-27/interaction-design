import React from "react";
import NavbarBottom from "../../components/common/NavbarBottom/NavbarBottom";
import InputField from "../../components/common/Input/InputField";
import Pill from "../../components/common/Pildora/Pill";
import CourseCard from "../../components/home/CourseCard/CourseCard";
import {iconList} from "../../assets/icons/icon_list";
import HomeHeader from "../../components/home/HomeHeader/HomeHeader";

function HomePage() {
    return (
        <div className={"bg-primary-50 h-[100vh]"}>
            <HomeHeader name="Martina"/>
            <div className={"grid gap-y-2 px-2"}>
                <div className={'grid gap-y-2 p-2'}>
                    <div className={'px-4 py-2'}>
                        <InputField placeholder={"Buscar"} onChange={() => console.log("Input")} rightIcon={iconList.search}/>
                    </div>
                    <div className={"grid gap-y-8 py-2"}>
                        <p className={"font-subtitleFont text-h5 font-semibold text-left"}>Cursos</p>
                        <div className={"flex gap-x-4 overflow-x-auto whitespace-nowrap"}>
                            <Pill>Arte</Pill>
                            <Pill>Diseño</Pill>
                            <Pill>Música</Pill>
                            <Pill>Programación</Pill>
                        </div>
                    </div>
                </div>
                <div className={"grid gap-y-4 p-2"}>
                    <div className={"grid gap-y-4 p-2"}>
                        <p className={"font-subtitleFont text-subtitle1 font-semibold text-left"}>Nuevos</p>
                        <div className={"flex gap-x-4 overflow-x-auto whitespace-nowrap"}>
                            <CourseCard title={"Javascript"} description={"En curso"}
                                        image={'default-image-flowers.png'}/>
                            <CourseCard title={"React"} description={"En curso"}
                                        image={'default-image-flowers.png'}/>
                            <CourseCard title={"UI/UX"} description={"En curso"}
                                        image={'default-image-flowers.png'}/>
                            <CourseCard title={"UI/UX"} description={"En curso"}
                                        image={'default-image-flowers.png'}/>
                            <CourseCard title={"UI/UX"} description={"En curso"}
                                        image={'default-image-flowers.png'}/>
                            <CourseCard title={"UI/UX"} description={"En curso"}
                                        image={'default-image-flowers.png'}/>
                        </div>
                    </div>
                    <div className={"grid gap-y-4 p-2"}>
                        <p className={"font-subtitleFont text-subtitle1 font-semibold text-left"}>Populares</p>
                        <div className={"flex gap-x-4 overflow-x-auto whitespace-nowrap"}>
                            <CourseCard title={"Javascript"} description={"En curso"}
                                        image={'default-image-flowers.png'}/>
                            <CourseCard title={"React"} description={"En curso"}
                                        image={'default-image-flowers.png'}/>
                            <CourseCard title={"UI/UX"} description={"En curso"}
                                        image={'default-image-flowers.png'}/>
                            <CourseCard title={"UI/UX"} description={"En curso"}
                                        image={'default-image-flowers.png'}/>
                            <CourseCard title={"UI/UX"} description={"En curso"}
                                        image={'default-image-flowers.png'}/>
                            <CourseCard title={"UI/UX"} description={"En curso"}
                                        image={'default-image-flowers.png'}/>
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

export default HomePage;
