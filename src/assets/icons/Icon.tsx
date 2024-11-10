import React from 'react';

interface IconProps {
    name: string;
}

const Icon: React.FC<IconProps> = ({ name }) => {
    switch (name) {
        case 'array-down':
            return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 9L12 15L18 9" stroke="#9EA2AE" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>

        case 'computer':
            return <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M2.5 21L17.5 21" stroke="#B93DED" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M21.5 21L22.5 21" stroke="#B93DED" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path
                    d="M2.5 16.4V3.6C2.5 3.26863 2.76863 3 3.1 3H21.9C22.2314 3 22.5 3.26863 22.5 3.6V16.4C22.5 16.7314 22.2314 17 21.9 17H3.1C2.76863 17 2.5 16.7314 2.5 16.4Z"
                    stroke="#B93DED" stroke-width="1.5"/>
            </svg>
        case 'plus':
            return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 12H12M18 12H12M12 12V6M12 12V18" stroke="white" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>

        case 'send-black':
            return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path
                    d="M10.762 9.33931L0.00197649 8.25531L0.000976562 1.40331C0.00110746 1.22033 0.0479844 1.04042 0.13716 0.88065C0.226336 0.720875 0.354854 0.586533 0.510522 0.490368C0.66619 0.394202 0.843846 0.339402 1.02664 0.331167C1.20943 0.322931 1.39129 0.361533 1.55498 0.44331L17.407 8.36931C17.5851 8.45863 17.7348 8.59572 17.8394 8.76526C17.944 8.93479 17.9994 9.13009 17.9994 9.32931C17.9994 9.52853 17.944 9.72383 17.8394 9.89336C17.7348 10.0629 17.5851 10.2 17.407 10.2893L1.55698 18.2153C1.39329 18.2971 1.21143 18.3357 1.02864 18.3275C0.845846 18.3192 0.66819 18.2644 0.512522 18.1683C0.356854 18.0721 0.228336 17.9377 0.13916 17.778C0.0499842 17.6182 0.00310755 17.4383 0.00297666 17.2553V10.4033L10.762 9.33931Z"
                    fill="black"/>
            </svg>

        case 'arrow-right':
            return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M15 6.5L9 12.5L15 18.5" stroke="#131927" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>

        case 'arrow-up':
            return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 15L12 9L18 15" stroke="#9EA2AE" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>

        case 'play':
            return <svg xmlns="http://www.w3.org/2000/svg" width="32" height="29" viewBox="0 0 32 29" fill="none">
                <path
                    d="M8.88388 5.30793C8.48416 5.09326 8 5.38281 8 5.83652V23.1633C8 23.617 8.48416 23.9066 8.88388 23.6919L25.0157 15.0285C25.4372 14.8022 25.4372 14.1977 25.0157 13.9713L8.88388 5.30793Z"
                    fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        case 'bell':
            return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path
                    d="M18 8.9C18 7.20261 17.3679 5.57475 16.2426 4.37452C15.1174 3.17428 13.5913 2.5 12 2.5C10.4087 2.5 8.88258 3.17428 7.75736 4.37452C6.63214 5.57475 6 7.20261 6 8.9C6 16.3667 3 18.5 3 18.5H21C21 18.5 18 16.3667 18 8.9Z"
                    stroke="#131927" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M13.7295 21.5C13.5537 21.8031 13.3014 22.0547 12.9978 22.2295C12.6941 22.4044 12.3499 22.4965 11.9995 22.4965C11.6492 22.4965 11.3049 22.4044 11.0013 22.2295C10.6977 22.0547 10.4453 21.8031 10.2695 21.5"
                    stroke="#131927" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        case 'house-solid':
            return <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <g clip-path="url(#clip0_2892_407)">
                    <path
                        d="M24.4976 11.9766C24.4976 12.8203 23.8724 13.4813 23.1639 13.4813H21.8303L21.8594 20.9906C21.8594 21.1172 21.8511 21.2437 21.8386 21.3703V22.1297C21.8386 23.1656 21.0926 24.0047 20.1715 24.0047H19.5047C19.4588 24.0047 19.413 24.0047 19.3671 24C19.3088 24.0047 19.2504 24.0047 19.1921 24.0047L17.8376 24H16.8373C15.9162 24 15.1702 23.1609 15.1702 22.125V21V18C15.1702 17.1703 14.5742 16.5 13.8365 16.5H11.1692C10.4315 16.5 9.83549 17.1703 9.83549 18V21V22.125C9.83549 23.1609 9.08946 24 8.16839 24H7.16813H5.83862C5.7761 24 5.71359 23.9953 5.65107 23.9906C5.60106 23.9953 5.55104 24 5.50103 24H4.83419C3.91312 24 3.16709 23.1609 3.16709 22.125V16.875C3.16709 16.8328 3.16709 16.7859 3.17126 16.7438V13.4766H1.83758C1.08739 13.4766 0.503906 12.8203 0.503906 11.9719C0.503906 11.55 0.628939 11.175 0.920681 10.8469L11.6026 0.375C11.8944 0.046875 12.2278 0 12.5195 0C12.8113 0 13.1447 0.09375 13.3947 0.328125L24.0392 10.8516C24.3726 11.1797 24.5393 11.5547 24.4976 11.9766Z"
                        fill="#A80CE8"/>
                </g>
                <defs>
                    <clipPath id="clip0_2892_407">
                        <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                    </clipPath>
                </defs>
            </svg>

        case 'user':
            return <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M5.5 20V19C5.5 15.134 8.63401 12 12.5 12V12C16.366 12 19.5 15.134 19.5 19V20" stroke="#A80CE8"
                      stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path
                    d="M12.5 12C14.7091 12 16.5 10.2091 16.5 8C16.5 5.79086 14.7091 4 12.5 4C10.2909 4 8.5 5.79086 8.5 8C8.5 10.2091 10.2909 12 12.5 12Z"
                    stroke="#A80CE8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        case 'medal-gold':
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2L9 8" stroke="#FFA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 2L15 8" stroke="#FFA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 2L12 8" stroke="#FFA500" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>

                <circle cx="12" cy="14" r="6" fill="none" stroke="#FFA500" stroke-width="2"/>

                <text x="12" y="17" text-anchor="middle" font-size="8" font-family="Arial" fill="#FFA500">1</text>
            </svg>

        case 'medal-silver':
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2L9 8" stroke="#6D717F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 2L15 8" stroke="#6D717F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 2L12 8" stroke="#6D717F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="14" r="6" fill="none" stroke="#6D717F" stroke-width="2"/>
                <text x="12.1" y="17" text-anchor="middle" font-size="8" font-family="Arial" fill="#6D717F">2</text>
            </svg>

        case 'medal-bronze':
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2L9 8" stroke="#CD7F32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 2L15 8" stroke="#CD7F32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 2L12 8" stroke="#CD7F32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="14" r="6" fill="none" stroke="#CD7F32" stroke-width="2"/>
                <text x="12" y="16.5" text-anchor="middle" font-size="8" font-family="Arial" fill="#CD7F32">3</text>
            </svg>

        case 'medal-default':
            return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2L9 8" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18 2L15 8" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 2L12 8" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="12" cy="14" r="6" fill="none" stroke="#000000" stroke-width="2"/>
            </svg>


        case 'list':
            return <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M8.5 6L20.5 6" stroke="#A80CE8" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M4.5 6.01L4.51 5.99889" stroke="#A80CE8" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M4.5 12.01L4.51 11.9989" stroke="#A80CE8" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M4.5 18.01L4.51 17.9989" stroke="#A80CE8" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M8.5 12L20.5 12" stroke="#A80CE8" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
                <path d="M8.5 18L20.5 18" stroke="#A80CE8" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
            </svg>

        case 'woman_avatar':
            return <img src="/woman_avatar.svg" alt="Woman Avatar" className="w-full h-full"/>

        case 'man_thinking':
            return <img src="/man_thinking_avatar.svg" alt="Man Thinking Avatar" className="w-full h-full"/>

        case 'woman_large_pink_hair':
            return <img src="/woman_large_pink_hair.svg" alt="Woman Large Pink Hair Avatar" className="w-full h-full"/>

        case 'woman_blue_dress':
            return <img src="/woman_blue_dress.svg" alt="Woman Blue Dress Avatar" className="w-full h-full"/>

        case 'woman_v_sign':
            return <img src="/woman_v_sign.svg" alt="Woman V Avatar" className="w-full h-full"/>

        case 'woman_heart_sign':
            return <img src="/woman_heart_sign.svg" alt="Woman Heart Sign Avatar" className="w-full h-full"/>

        case 'man_thumb_up':
            return <img src="/man_thumb_up.svg" alt="Man Thumb Up Avatar" className="w-full h-full"/>

        case 'man_with_dog':
            return <img src="/man_with_dog.svg" alt="Man with dog Avatar" className="w-full h-full"/>



        default:
            return null;
    }
};

export default Icon;