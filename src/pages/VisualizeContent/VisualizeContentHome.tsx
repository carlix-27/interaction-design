import React from "react";
import Button from "../../components/common/Button";
import List from "../../components/course/List/List";
import Card from "../../components/course/Card/Card";
import { PageControl } from "../../components/common/PageControl/PageControl";
import { iconList } from "../../assets/icons/icon_list";
import Icon from "../../assets/icons/Icon";
import { Link } from "react-router-dom";
import Comment from "../../components/course/Comment/Comment";
import NavbarTop from "../../components/common/NavbarTop/NavbarTop";
import NavbarBottom from "../../components/common/NavbarBottom/NavbarBottom";

function VisualizeContentHome() {
  return (
    <div className={"grid gap-y-8 bg-primary-50 h-full w-full"}>
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
          <p
            className={
              "font-subtitleFont text-left text-subtitle2 font-semibold"
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
              "font-subtitleFont text-left text-subtitle2 font-semibold"
            }
          >
            Requisitos
          </p>
          <List
            title={"Computer"}
            icon={iconList.computer}
            details={"100%"}
            show_details={false}
            type={"list"}
          ></List>
          <List
            title={"Conexión a internet"}
            details={"Detalles"}
            icon={iconList.wifi}
            show_details={false}
            type={"list"}
          ></List>
        </div>
        <div className={"grid gap-y-4"}>
          <p
            className={
              "font-subtitleFont text-left text-subtitle2 font-semibold"
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
              "font-subtitleFont text-left text-subtitle2 font-semibold"
            }
          >
            Proyectos Destacados
          </p>
          <div className={"grid gap-y-2"}>
            <Card
              image={
                "https://img.freepik.com/vector-gratis/calculadora-vector-dibujos-animados-flotante-icono-ilustracion-educacion-icono-objeto-vector-plano-aislado_138676-10322.jpg"
              }
              title={"Proyecto 1"}
              description={"Calculadora básica"}
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
              "font-subtitleFont text-left text-subtitle2 font-semibold"
            }
          >
            Amigos que hacen este curso
          </p>
          <div className={"grid gap-y-2"}>
            <div className={"flex gap-4"}>
              <Icon name={iconList.avatarWoman} />
              <Icon name={iconList.avatarManThinking} />
              <Icon name={iconList.avatarWomanHeartSign} />
            </div>
            <div className={"inline-flex justify-center"}>
              <PageControl totalDots={4} activePage={0} />
            </div>
          </div>
        </div>
        <div className={"grid gap-y-2"}>
          <p
            className={
              "font-subtitleFont text-left text-subtitle2 font-semibold"
            }
          >
            Comentarios
          </p>
          <Comment
            authorName={"Alan Walker"}
            content={"Un curso muy entretenido y muy variado en su contenido"}
            picture={iconList.avatarManThinking}
          />
        </div>
        <div className={"flex gap-2 pt-4"}>
          <Button variant={"outlined"}>Volver arriba</Button>
          <Button variant={"fulfilled"}>Más reseñas</Button>
        </div>
      </div>
      <NavbarBottom
        activeButton={"home"}
        onButtonClick={() => console.log("Test")}
      />
    </div>
  );
}

export default VisualizeContentHome;
