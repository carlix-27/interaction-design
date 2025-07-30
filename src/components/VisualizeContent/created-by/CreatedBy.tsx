import React from "react";
import Icon from "../../../assets/icons/Icon";

interface CreatedByProps {
    /**
     * Nombre de la entidad u organización.
     */
    organization: string;
}

const CreatedBy: React.FC<CreatedByProps> = ({ organization }) => {
    return (
        <div className="flex w-[329px] flex-shrink-0 flex-col gap-[4px]">
            <p className="font-captionFont text-[10px] leading-[14px] text-grey-500">
                Ofrecido por{" "}
                <span className="text-primary-600">{organization}</span>
            </p>
        </div>
    );
};

export default CreatedBy;
