import React from "react";

interface PlayerData {
    name: string;
    avatar: string;
    techStack: string;
    division?: string;
    achievements?: string[];
}

interface PlayerResumeProps {
    player: PlayerData;
    variant?: "default" | "compact-challenge" | "compact-sent";
    onChallengeClick?: () => void;
    className?: string;
}

export const PlayerResume = ({
                                 player,
                                 variant = "default",
                                 onChallengeClick,
                                 className
                             }: PlayerResumeProps) => {
    if (variant === "default") {
        const baseClasses = "flex flex-col bg-white rounded-2xl border border-gray-200 p-6 w-full max-w-sm";
        const allClasses = className ? `${baseClasses} ${className}` : baseClasses;

        return (
            <div className={allClasses}>
                <div className="flex items-center gap-4 mb-6">
                    <img
                        src={player.avatar}
                        alt={`${player.name} avatar`}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                        <h3 className="text-base font-normal text-black font-roboto leading-6">
                            {player.name}
                        </h3>
                        <p className="text-xs text-gray-400 font-roboto leading-4">
                            {player.techStack}
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded text-xs">
                        {/* SVG División */}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.33333 12.6667V10.6C6.78889 10.4778 6.30289 10.2473 5.87533 9.90867C5.44778 9.57 5.13378 9.14489 4.93333 8.63333C4.1 8.53333 3.40289 8.16956 2.842 7.542C2.28111 6.91444 2.00044 6.17822 2 5.33333V4.66667C2 4.3 2.13067 3.98622 2.392 3.72533C2.65333 3.46444 2.96711 3.33378 3.33333 3.33333H4.66667C4.66667 2.96667 4.79733 2.65289 5.05867 2.392C5.32 2.13111 5.63378 2.00044 6 2H10C10.3667 2 10.6807 2.13067 10.942 2.392C11.2033 2.65333 11.3338 2.96711 11.3333 3.33333H12.6667C13.0333 3.33333 13.3473 3.464 13.6087 3.72533C13.87 3.98667 14.0004 4.30044 14 4.66667V5.33333C14 6.17778 13.7193 6.914 13.158 7.542C12.5967 8.17 11.8996 8.53378 11.0667 8.63333C10.8667 9.14444 10.5529 9.56955 10.1253 9.90867C9.69778 10.2478 9.21156 10.4782 8.66667 10.6V12.6667H10.6667C10.8556 12.6667 11.014 12.7307 11.142 12.8587C11.27 12.9867 11.3338 13.1449 11.3333 13.3333C11.3329 13.5218 11.2689 13.6802 11.1413 13.8087C11.0138 13.9371 10.8556 14.0009 10.6667 14H5.33333C5.14444 14 4.98622 13.936 4.85867 13.808C4.73111 13.68 4.66711 13.5218 4.66667 13.3333C4.66622 13.1449 4.73022 12.9867 4.85867 12.8587C4.98711 12.7307 5.14533 12.6667 5.33333 12.6667H7.33333ZM4.66667 7.2V4.66667H3.33333V5.33333C3.33333 5.75556 3.45556 6.13622 3.7 6.47533C3.94444 6.81444 4.26667 7.056 4.66667 7.2ZM8 9.33333C8.55556 9.33333 9.02778 9.13889 9.41667 8.75C9.80555 8.36111 10 7.88889 10 7.33333V3.33333H6V7.33333C6 7.88889 6.19444 8.36111 6.58333 8.75C6.97222 9.13889 7.44444 9.33333 8 9.33333ZM11.3333 7.2C11.7333 7.05556 12.0556 6.81378 12.3 6.47467C12.5444 6.13556 12.6667 5.75511 12.6667 5.33333V4.66667H11.3333V7.2Z" fill="#FFD700"/>
                        </svg>
                        <span className="text-gray-700 text-xs font-roboto">División Oro</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded text-xs">
                        {/* SVG Top Achievement */}
                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
                            <path d="M8.5 11.64C10.9853 11.64 13 9.57158 13 7.02003C13 4.46847 10.9853 2.40002 8.5 2.40002C6.01472 2.40002 4 4.46847 4 7.02003C4 9.57158 6.01472 11.64 8.5 11.64Z" stroke="#FFD700" strokeWidth="1.5"/>
                            <path d="M5.51135 10.98L5.10185 12.5132C4.69814 14.0259 4.49628 14.7822 4.76564 15.1961C4.86014 15.3413 4.98678 15.4574 5.134 15.5346C5.55314 15.7538 6.20114 15.4073 7.4965 14.7143C7.92721 14.4833 8.14321 14.3684 8.37207 14.3433C8.45714 14.3346 8.54285 14.3346 8.62792 14.3433C8.85678 14.3684 9.07214 14.4839 9.5035 14.7143C10.7989 15.4073 11.4469 15.7538 11.866 15.5346C12.0132 15.4574 12.1399 15.3413 12.2344 15.1961C12.5044 14.7822 12.3019 14.0259 11.8981 12.5132L11.4886 10.98" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <span className="text-gray-700 text-xs font-roboto">2 veces top en Oro</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 bg-gray-50 border border-gray-200 rounded text-xs">
                        {/* SVG EXP */}
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.43335 2.66665L4.35935 7.33331H6.65735C7.11735 7.33331 7.44135 7.78331 7.29602 8.21998L6.19202 11.5313L11.0574 6.66665H9.34402C9.22924 6.66662 9.11637 6.63726 9.01613 6.58134C8.91589 6.52542 8.83161 6.4448 8.77129 6.34715C8.71097 6.24949 8.67662 6.13803 8.6715 6.02337C8.66638 5.9087 8.69065 5.79463 8.74202 5.69198L10.2547 2.66665H6.43335ZM5.38935 1.73331C5.49735 1.48998 5.73802 1.33331 6.00468 1.33331H11.3227C11.8227 1.33331 12.1487 1.85998 11.9247 2.30798L10.412 5.33331H12.6507C13.2507 5.33331 13.5507 6.05865 13.1267 6.48265L5.15802 14.4513C4.65535 14.954 3.81802 14.4366 4.04335 13.7626L5.74202 8.66665H3.34335C3.23118 8.66664 3.12079 8.63861 3.0222 8.58511C2.92362 8.53161 2.83996 8.45432 2.77883 8.36027C2.71769 8.26622 2.68103 8.15839 2.67215 8.04657C2.66328 7.93476 2.68248 7.82249 2.72802 7.71998L5.38935 1.73331Z" fill="#FFD700"/>
                        </svg>
                        <span className="text-gray-700 text-xs font-roboto">EXP Totales</span>
                    </div>
                </div>
            </div>
        );
    }

    // Compact variants
    const baseClasses = "flex items-center justify-between bg-white rounded-lg border border-gray-200 p-2 w-full max-w-sm";
    const allClasses = className ? `${baseClasses} ${className}` : baseClasses;

    return (
        <div className={allClasses}>
            <div className="flex items-center gap-3">
                <img
                    src={player.avatar}
                    alt={`${player.name} avatar`}
                    className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                    <h4 className="text-xs font-normal text-gray-900 font-roboto leading-4">
                        {player.name}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-gray-400">
                        <span>División Plata</span>
                        <div className="w-1 h-1 bg-gray-400 rounded-full" />
                        <span>{player.techStack}</span>
                    </div>
                </div>
            </div>
            {variant === "compact-challenge" && (
                <button
                    onClick={onChallengeClick}
                    className="px-2 py-1 bg-purple-600 text-white text-xs font-roboto rounded-full hover:bg-purple-700 transition-colors"
                >
                    Solicitar Desafío
                </button>
            )}
            {variant === "compact-sent" && (
                <div className="px-2 py-1 bg-gray-200 text-gray-800 text-xs font-roboto rounded-full">
                    Solicitud Enviada
                </div>
            )}
        </div>
    );
};