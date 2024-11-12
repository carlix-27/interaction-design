// NavbarBottom.tsx
import React from "react";
import Icon from "../../../assets/icons/Icon";

export interface BottomNavBarProps {
  activeButton: "home" | "list" | "user";
  onButtonClick: (button: "home" | "list" | "user") => void;
}

const NavbarBottom: React.FC<BottomNavBarProps> = ({
  activeButton,
  onButtonClick,
}) => {
  const buttonClasses =
    "flex flex-col items-center flex-1 justify-center relative";

  return (
    <div className="flex w-[390px] h-[70px] bg-[#F9FAFB] justify-center items-center fixed bottom-0 z-50 w-full">
      <div
        className={`${buttonClasses} h-full`}
        onClick={() => onButtonClick("home")}
      >
        {activeButton === "home" && (
          <div className="h-[4px] w-full bg-primary-500 absolute top-0" />
        )}
        <div className="flex w-[78px] h-full items-center justify-center">
          <Icon name="house-solid" />
        </div>
      </div>

      <div
        className={`${buttonClasses} h-full`}
        onClick={() => onButtonClick("list")}
      >
        {activeButton === "list" && (
          <div className="h-[4px] w-full bg-primary-500 absolute top-0" />
        )}
        <div className="flex w-[78px] h-full items-center justify-center">
          <Icon name="list" />
        </div>
      </div>

      <div
        className={`${buttonClasses} h-full`}
        onClick={() => onButtonClick("user")}
      >
        {activeButton === "user" && (
          <div className="h-[4px] w-full bg-primary-500 absolute top-0" />
        )}
        <div className="flex w-[78px] h-full items-center justify-center">
          <Icon name="user" />
        </div>
      </div>
    </div>
  );
};

export default NavbarBottom;
