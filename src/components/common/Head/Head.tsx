import Icon from "../../../assets/icons/Icon";

export default function Head() {
    return (
        <div className="flex w-full max-w-[390px] h-[90px] px-6 py-6 justify-end items-center gap-2.5 bg-white box-border">
            {/* Lado izquierdo - Avatar y saludo */}
            <div className="flex items-center gap-[18px] flex-1">
                <div className="flex w-14 h-14 justify-center items-center aspect-square">
                    <Icon name="woman_large_pink_hair" />
                </div>
                <div
                    className="text-black text-lg font-bold leading-7"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                    Hola, Martina
                </div>
            </div>
            {/* Lado derecho - Campana de notificación */}
            <div className="flex justify-end items-center">
                <div className="flex p-1.5 justify-center items-center gap-2.5 rounded-[18.5px] bg-white">
                    <Icon name="bell" />
                </div>
            </div>
        </div>
    );
}