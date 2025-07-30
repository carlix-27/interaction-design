import React from "react";

export interface ProgressBarProps {
    progress: number; // expects a percentage value (0-100)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div className={"h-2 w-full overflow-hidden rounded-full bg-grey-50"}>
            <div
                className="h-full rounded-lg bg-primary-500 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
