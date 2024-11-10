import React, { useEffect, useState } from "react";

export interface ProgressBarProps {
  progress: number; // expects a percentage value (0-100)
  type: "default" | "rounded-top";
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, type }) => {
  return (
    <div
      className={
        type === "rounded-top"
          ? "w-full bg-grey-50 rounded-b-lg h-4 overflow-hidden"
          : "w-full bg-grey-50 rounded-full h-4 overflow-hidden"
      }
    >
      <div
        className="bg-primary-500 h-full rounded-bl-lg transition-all duration-500 ease-out"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
