import React from "react";
import NavbarBottom from "../../components/common/NavbarBottom/NavbarBottom";
import InputField from "../../components/common/Input/InputField";
import Pill from "../../components/common/Pildora/Pill";
import CourseCard from "../../components/home/CourseCard/CourseCard";
import { iconList } from "../../assets/icons/icon_list";
import HomeHeader from "../../components/home/HomeHeader/HomeHeader";

function HomePageArt() {
  return (
    <div className={"bg-primary-50 h-[100vh]"}>
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
            />
          </div>
          <div className={"grid gap-y-8 py-2"}>
            <p
              className={
                "fontFamily-subtitleFont text-h5 font-semibold text-left"
              }
            >
              Cursos
            </p>
            <div className={"flex gap-x-4 overflow-x-auto whitespace-nowrap"}>
              <Pill variant={"selected"}>Arte</Pill>
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
                "fontFamily-subtitleFont text-subtitle1 font-semibold text-left"
              }
            >
              Resultados para "ARTE"
            </p>
            <div
              className={
                "grid grid-cols-2 gap-y-4 gap-x-4 overflow-x-auto whitespace-nowrap"
              }
            >
              <CourseCard
                title={"Artivismo"}
                description={"En curso"}
                image={
                  "https://i.pinimg.com/736x/a2/c6/f6/a2c6f6079b32887ea86594dfc886a99a.jpg"
                }
              />
              <CourseCard
                title={"Muralismo"}
                description={""}
                image={
                  "https://elcafelatino.org/wp-content/uploads/2020/05/07-horz-bien.jpg-completa.jpg"
                }
              />
              <CourseCard
                title={"Dibujo y pintura"}
                description={""}
                image={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA8orC5Rx0hK6Fttv4k6811VfgX5CHoRnNMQ&s"
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

export default HomePageArt;
