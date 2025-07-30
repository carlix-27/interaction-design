import React from "react";
import { ChevronRight } from "lucide-react";

const difficultyIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
    >
        <path
            d="M14 14H10.5714V2H14V14ZM11.4286 13.0769H13.1429V2.92308H11.4286V13.0769ZM9.71429 14H6.28571V5.69231H9.71429V14ZM7.14286 13.0769H8.85714V6.61538H7.14286V13.0769ZM5.42857 14H2V8.46154H5.42857V14Z"
            fill="#a259e6"
        />
    </svg>
);

const bookIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
    >
        <path
            d="M8 12.6667C7.08788 12.1401 6.05322 11.8628 5 11.8628C3.94678 11.8628 2.91212 12.1401 2 12.6667V4.00001C2.91212 3.4734 3.94678 3.19617 5 3.19617C6.05322 3.19617 7.08788 3.4734 8 4.00001M8 12.6667C8.91212 12.1401 9.94678 11.8628 11 11.8628C12.0532 11.8628 13.0879 12.1401 14 12.6667V4.00001C13.0879 3.4734 12.0532 3.19617 11 3.19617C9.94678 3.19617 8.91212 3.4734 8 4.00001M8 12.6667V4.00001"
            stroke="#a259e6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const JSImage = () => (
    <div className="w-14 h-14 bg-yellow-300 flex items-center justify-center font-bold text-xl text-black rounded-md">
        JS
    </div>
);

const Badge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
    <div className="flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs text-gray-700 border border-gray-300">
        {icon && <span className="w-3 h-3 flex items-center">{icon}</span>}
        <span>{text}</span>
    </div>
);

const Rating = () => (
    <div className="flex items-center gap-1 rounded-md bg-white px-2 py-1 text-xs text-gray-700 border border-gray-300">
        <span className="w-3 h-3 flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 20 20"
                fill="#a259e6"
            >
                <path d="M10 15.27L16.18 18l-1.64-7.03L20 7.24l-7.19-.61L10 0 7.19 6.63 0 7.24l5.46 3.73L3.82 18z"/>
            </svg>
        </span>
        <span>4.8</span>
    </div>
);

const Unit: React.FC = () => {
    return (
        <div className="p-4 rounded-xl space-y-4">
            {/* Unidad principal */}
            <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
                <div>
                    <h2 className="text-base font-semibold">Fundamentos de JavaScript</h2>
                    <p className="text-sm text-gray-500">Unidad 1 · Javascript</p>
                    <div className="mt-2 flex gap-2">
                        <Badge icon={difficultyIcon} text="Principiante" />
                        <Badge icon={bookIcon} text="6 lecciones" />
                    </div>
                </div>
                <ChevronRight className="text-gray-400 w-5 h-5" />
            </div>

            {/* Curso 1 */}
            <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center gap-4">
                <div className="flex-1 space-y-1">
                    <h2 className="font-semibold">Javascript Developer</h2>
                    <div className="text-xs text-gray-500">
                        Meta Platforms · Bootcamp Intensivo
                    </div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                        <Rating />
                        <Badge icon={difficultyIcon} text="Principiante" />
                        <Badge icon={bookIcon} text="27 lecciones en total" />
                    </div>
                </div>
                <JSImage />
            </div>

            {/* Curso 2 */}
            <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center gap-4">
                <div className="flex-1 space-y-1">
                    <h2 className="font-semibold">Javascript Developer</h2>
                    <div className="text-xs text-gray-500">Google · Curso</div>
                    <div className="flex gap-2 mt-2 flex-wrap">
                        <Rating />
                        <Badge icon={difficultyIcon} text="Principiante" />
                        <Badge icon={bookIcon} text="27 lecciones en total" />
                    </div>
                </div>
                <JSImage />
            </div>
        </div>
    );
};

export default Unit;