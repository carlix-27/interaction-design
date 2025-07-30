import React from "react";
import ItemDetail from "../item-detail/ItemDetail";

const MoreActions: React.FC = () => {
    return (
        <div className="flex h-[176px] w-[390px] flex-col items-center gap-[16px] rounded-t-[8px] bg-grey-50 px-[4px]">
            {/* Subcontenedor 1 */}
            <div className="flex flex-col items-start gap-[8px] px-[158px] pt-[5px]">
                {/* Subcontenedor 1.2 */}
                <div className="flex h-[4px] w-[32px] items-start gap-[8px] rounded-[4px] bg-grey-200 "/>
            </div>

            {/* Subcontenedor 2 */}
            <div className="flex w-[372px] flex-col items-start gap-[16px]">
                <ItemDetail variant={"highlighted"} icon="forum" text="Foro de Consulta"/>
                <ItemDetail variant={"highlighted"} icon="trophy" text="Desafiar"/>
                <ItemDetail variant={"highlighted"} icon="steamline" text="Ver Progreso"/>
            </div>
        </div>
    );
};

export default MoreActions;
