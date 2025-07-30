import React from "react";
import Icon from "../../../assets/icons/Icon";

export interface HomeHeaderProps {
    name: string;
    avatar?: string;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
    name = "Martina",
    avatar,
}) => {
    return (
        <div
            className="flex h-[156px] w-[390px] items-center justify-center gap-8 rounded-b-[16px] p-2 shadow-lg"
            style={{
                background:
                    "linear-gradient(97deg, #A80CE8 17.43%, #00D4FF 96.96%)",
                boxShadow:
                    "0px 6px 14px -6px rgba(19, 25, 39, 0.12), 0px 10px 32px -4px rgba(19, 25, 39, 0.10)",
            }}
        >
            <div>
                <p className="font-subtitleFont text-[24px] leading-[28px] text-grey-200 text-shadow">
                    Hola,
                </p>
                <p className="font-subtitleFont text-[40px] leading-[48px] text-white text-shadow">
                    {name}
                </p>
            </div>
            <div className="flex h-[80px] w-[80px] items-center justify-center">
                <div className="h-[80px] w-[80px] rounded-full shadow-custom-figma">
                    <Icon name="woman_large_pink_hair"></Icon>
                </div>
            </div>
        </div>
    );
    // const HomeHeader: React.FC<HomeHeaderProps> = ({
    //   name = "Martina",
    //   avatar,
    // }) => {
    //   return (
    //     <div
    //       className="flex w-[390px] h-[156px] justify-center items-center gap-8 rounded-b-[16px] shadow-lg"
    //       style={{
    //         background: "linear-gradient(97deg, #A80CE8 17.43%, #00D4FF 96.96%)",
    //         boxShadow:
    //           "0px 6px 14px -6px rgba(19, 25, 39, 0.12), 0px 10px 32px -4px rgba(19, 25, 39, 0.10)",
    //       }}
    //     >
    //       <div className={"text-left"}>
    //         <p className="text-grey-200 fontFamily-subtitleFont text-[24px] text-shadow">
    //           Hola,
    //         </p>
    //         <p className="text-white fontFamily-subtitleFont text-[40px] leading-[48px] text-shadow">
    //           {name}
    //         </p>
    //       </div>
    //       <div className="flex w-[80px] h-[80px] justify-center items-center">
    //         <Icon name="woman_large_pink_hair"></Icon>
    //       </div>
    //     </div>
    //   );
};

export default HomeHeader;
