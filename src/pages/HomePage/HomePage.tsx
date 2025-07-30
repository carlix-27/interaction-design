import React from "react";
import NavbarBottom from "../../components/common/NavbarBottom/NavbarBottom";
import InputField from "../../components/common/Input/InputField";
import Pill from "../../components/common/Pildora/Pill";
import CourseCard from "../../components/home/CourseCard/CourseCard";
import { iconList } from "../../assets/icons/icon_list";
import HomeHeader from "../../components/home/HomeHeader/HomeHeader";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
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
                            onChange={() => navigate("/UI")}
                            rightIcon={iconList.search}
                        />
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
                            <Link to={"/art"}>
                                <Pill>Arte</Pill>
                            </Link>
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
                            <Link to={"/"}>
                                <CourseCard
                                    title={"Javascript"}
                                    description={"En curso"}
                                    image={
                                        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png"
                                    }
                                />
                            </Link>
                            <CourseCard
                                title={"Java"}
                                description={"En curso"}
                                image={
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkFe2u3Q8Bj-tL9F-WzdC_NiEuLv9L-hfFTQ&s"
                                }
                            />
                            <CourseCard
                                title={"React"}
                                description={"En curso"}
                                image={
                                    "https://pbs.twimg.com/profile_images/1785867863191932928/EpOqfO6d_400x400.png"
                                }
                            />
                            <CourseCard
                                title={"Figma"}
                                description={"En curso"}
                                image={
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLfG0eMaHUfZdyYtPcP5hpdsBsdhzUf3w6yw&s"
                                }
                            />
                        </div>
                    </div>
                    <div className={"grid gap-y-4 p-2"}>
                        <p
                            className={
                                "fontFamily-subtitleFont text-left text-subtitle1 font-semibold"
                            }
                        >
                            Populares
                        </p>
                        <div
                            className={
                                "flex gap-x-4 overflow-x-auto whitespace-nowrap"
                            }
                        >
                            <CourseCard
                                title={"Chess"}
                                description={"En curso"}
                                image={
                                    "https://tryengineering.org/wp-content/uploads/bigstock-208614778-1024x683.jpg"
                                }
                            />
                            <CourseCard
                                title={"Cocina"}
                                description={"En curso"}
                                image={
                                    "https://cdn.shopify.com/s/files/1/1186/5476/files/LIFESTYLE_2000x2000_48e752d7-2561-4472-831d-f164a3ea7405_1024x1024.jpg?v=1565717897"
                                }
                            />
                            <CourseCard
                                title={"Python"}
                                description={"En curso"}
                                image={
                                    "https://i0.wp.com/junilearning.com/wp-content/uploads/2020/06/python-programming-language.webp?fit=800%2C800&ssl=1"
                                }
                            />
                            <CourseCard
                                title={"Primeros Auxilios"}
                                description={"En curso"}
                                image={
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjpVtb1dkv6TWdWw7HvjStMudBUYOuvVkiHw&s"
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

export default HomePage;
