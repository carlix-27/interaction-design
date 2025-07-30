import Icon from "../../../assets/icons/Icon";

export default function Head() {
    return (
        <div className="box-border flex h-[90px] w-full max-w-[390px] items-center justify-end gap-2.5 bg-white px-6 py-6">
            {/* Lado izquierdo - Avatar y saludo */}
            <div className="flex flex-1 items-center gap-[18px]">
                <div className="flex aspect-square h-14 w-14 items-center justify-center">
                    <Icon name="woman_large_pink_hair" />
                </div>
                <div
                    className="text-lg font-bold leading-7 text-black"
                    style={{ fontFamily: "'Open Sans', sans-serif" }}
                >
                    Hola, Martina
                </div>
            </div>
            {/* Lado derecho - Campana de notificación */}
            <div className="flex items-center justify-end">
                <div className="flex items-center justify-center gap-2.5 rounded-[18.5px] bg-white p-1.5">
                    <Icon name="bell" />
                </div>
            </div>
        </div>
    );
}
