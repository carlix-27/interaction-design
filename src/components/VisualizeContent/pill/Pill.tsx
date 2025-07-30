import React from "react";

interface PillProps {
    text: string;
}

const Pill: React.FC<PillProps> = ({text}) => {
    return (
        <div
            className="grid w-[144px] h-[24px] px-[16px] py-[5px]
                 grid-rows-1 grid-cols-1
                 rounded-[32px] border border-grey-400
                 bg-grey-100"
        >
      <span
          className="text-center font-captionFont text-[10px] leading-[14px] text-grey-800"
      >
        {text}
      </span>
        </div>
    );
};

export default Pill;
