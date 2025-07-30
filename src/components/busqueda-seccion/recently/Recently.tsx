import React from 'react';

interface RecentlyProps {
    text?: string;
    className?: string;
}

export const Recently: React.FC<RecentlyProps> = ({
                                                      text = "machine learning",
                                                      className = ''
                                                  }) => {
    return (
        <div className={`flex w-[390px] h-10 px-2 items-center bg-[#F9FAFB] ${className}`}>
            {/* Clock Icon */}
            <div className="flex p-2 items-center gap-2">
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px] h-[18px] aspect-[1/1]"
                >
                    <path
                        d="M11.5819 12.375L8.4375 9.23063V3.9375H9.5625V8.76375L12.375 11.5819L11.5819 12.375Z"
                        fill="#6D717F"
                    />
                    <path
                        d="M9 1.125C7.95091 1.12515 6.91252 1.33581 5.94632 1.74452C4.98011 2.15322 4.10575 2.75165 3.375 3.50437V1.125H2.25V5.625H6.75V4.5H3.9825C5.03777 3.32735 6.47043 2.56136 8.03167 2.33505C9.59291 2.10875 11.1841 2.43642 12.5289 3.26117C13.8737 4.08592 14.8871 5.35564 15.3932 6.84982C15.8993 8.344 15.8661 9.96824 15.2993 11.4405C14.7325 12.9127 13.6679 14.1399 12.2905 14.9089C10.9131 15.6779 9.30979 15.9402 7.75912 15.6502C6.20845 15.3602 4.80833 14.5362 3.80193 13.3214C2.79554 12.1065 2.24644 10.5776 2.25 9H1.125C1.125 10.5575 1.58686 12.0801 2.45218 13.3751C3.31749 14.6702 4.5474 15.6795 5.98637 16.2756C7.42534 16.8716 9.00874 17.0275 10.5363 16.7237C12.0639 16.4198 13.4671 15.6698 14.5685 14.5685C15.6698 13.4671 16.4198 12.0639 16.7237 10.5363C17.0275 9.00874 16.8716 7.42534 16.2756 5.98637C15.6795 4.5474 14.6702 3.31749 13.3751 2.45218C12.0801 1.58686 10.5575 1.125 9 1.125Z"
                        fill="#6D717F"
                    />
                </svg>
            </div>

            {/* Text Content */}
            <div className="flex py-2 px-[2px] justify-center items-center gap-2">
                <div className="w-[290px] text-[#6D717F] font-roboto text-base font-normal leading-6">
                    {text}
                </div>
            </div>
        </div>
    );
};

export default Recently;