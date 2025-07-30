import Icon from "../../../assets/icons/Icon";

interface HeadProps {
  userName?: string;
  avatarIcon?: string;
  backgroundColor?: string;
}

export default function Head({ 
  userName = "Martina", 
  avatarIcon = "woman_large_pink_hair",
  backgroundColor = "#FFF"
}: HeadProps) {
    return (
        <div 
            className="flex w-full max-w-[390px] h-[90px] px-6 py-6 justify-end items-center gap-2.5 box-border"
            style={{ backgroundColor }}
        >
            {/* Lado izquierdo - Avatar y saludo */}
            <div className="flex items-center gap-[18px] flex-1">
                <div className="flex w-14 h-14 justify-center items-center aspect-square">
                    <Icon name={avatarIcon as any} />
                </div>
                <div
                    className="text-black text-lg font-bold leading-7 truncate max-w-[200px]"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                    Hola, {userName}
                </div>
            </div>
            {/* Lado derecho - Campana de notificación */}
            <div className="flex justify-end items-center">
                <div className="flex p-1.5 justify-center items-center gap-2.5">
                    <Icon name="bell" />
                </div>
            </div>
        </div>
    );
}