"use client"

import { useRef, useState } from "react";

function Contact() {

    const extend = useRef(), rotating = useRef();
    const [open, setOpen] = useState(false);

    const hoverContact = () => {
        const data = extend.current;
        const rotateIcon = rotating.current;

        setOpen(open => !open);
        if (open) {
            data.classList.add('h-0');
            data.classList.remove('h-40');
            data.classList.remove('py-2');
            rotateIcon.classList.remove('rotate-180');
        } else {
            data.classList.remove('py-0');
            data.classList.remove('h-0');
            data.classList.add('h-40');
            rotateIcon.classList.add('rotate-180');
        }
    }

    return (
        <div>
            <div className="hidden md:block relative" onMouseEnter={hoverContact} onMouseLeave={hoverContact}>
                <div ref={rotating} className="absolute bg-violet-500 p-3 bottom-6 right-0 rounded-full transition-all z-20" >
                    <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2"/>
                        </svg>
                    </div>
                </div>
                <div ref={extend} className="transition-all h-0 w-14 z-0 absolute bg-white bottom-12 right-0 gap-2 rounded-t-full flex flex-col items-center p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 64 64" className="cursor-pointer rounded-xl hover:bg-green-400" onClick={() => window.open('https://wa.me/6281386278150') }>
                        <path fill="#97e0bb" d="M3,32A29,29,0,1,1,16,56.2C13,57,6,59,6,59A94.15,94.15,0,0,0,8.36,48.81,28.87,28.87,0,0,1,3,32Z"></path><path fill="#72caaf" d="M32 9A23 23 0 1 0 32 55A23 23 0 1 0 32 9Z"></path><path fill="#faefde" d="M24,18l3,8-2.68,4.21L32,37l4,3.09L40,36l8,3-2.16,6.33-6.4,1.74L27.81,42.42s-8.64-6.44-11-14c-1.31-4.08,1.74-8.72,1.74-8.72Z"></path><path fill="#8d6c9f" d="M46.95,37.52l-.42-.21s-4.41-2.2-5.25-2.49a2.43,2.43,0,0,0-3,.92l-.33.46a24.53,24.53,0,0,1-1.61,2.12.67.67,0,0,1-.71,0l-.24-.1a17.84,17.84,0,0,1-5.54-3.46,22.06,22.06,0,0,1-4-5c0-.07-.06-.12-.06-.12a2.31,2.31,0,0,1,.28-.36c.2-.25.39-.45.59-.66s.34-.36.51-.56l.08-.09a5,5,0,0,0,.89-1.29A2.53,2.53,0,0,0,28,24.47c-.12-.25-1-2.46-1.63-3.92l-.67-1.62h0c-.64-1.54-1.35-1.84-2.5-1.89-.28,0-.58,0-.93,0a4.71,4.71,0,0,0-3.42,1.29A9.2,9.2,0,0,0,16,25.22c0,3.41,2,6.69,3.27,8.4l.13.19c3.77,5.46,8.44,9.55,13.15,11.5C36.74,47,39,47.5,40.52,47.5a7.86,7.86,0,0,0,1.7-.19c2.25-.49,5.05-2.15,5.81-4.29.63-1.78.79-3.68.37-4.42A2.92,2.92,0,0,0,46.95,37.52Zm-.81,4.83c-.47,1.34-2.63,2.63-4.34,3-1,.22-2.58.55-8.46-1.89C29,41.66,24.62,37.82,21.07,32.67l-.21-.3C19.79,30.92,18,28.06,18,25.22a7.31,7.31,0,0,1,2.36-5.59A2.79,2.79,0,0,1,22.3,19c.3,0,.56,0,.83,0a2.42,2.42,0,0,1,.41,0,1.67,1.67,0,0,1,.35.62l.67,1.62c.9,2.18,1.54,3.74,1.68,4s.16.42.1.54a3.21,3.21,0,0,1-.61.86l-.08.09c-.15.18-.3.33-.45.49s-.46.49-.69.78a2.19,2.19,0,0,0-.39,2.75,23.71,23.71,0,0,0,4.39,5.45,20,20,0,0,0,6.12,3.82l.22.09a2.61,2.61,0,0,0,2.94-.53,25.38,25.38,0,0,0,1.78-2.32l.33-.46c.21-.29.35-.33.71-.2.56.2,3.78,1.77,5,2.4l.45.22.54.25A7.32,7.32,0,0,1,46.14,42.35Z"></path><path fill="#8d6c9f" d="M32.06,2H32A30,30,0,0,0,2,32,29.66,29.66,0,0,0,7.41,49.16L4,59.45a1,1,0,0,0,1.25,1.27l10.7-3.42A30,30,0,1,0,32.06,2ZM32,60a27.82,27.82,0,0,1-15.4-4.62,1,1,0,0,0-.55-.17,1,1,0,0,0-.3,0l-9.27,3,3-8.9a1,1,0,0,0-.14-.91A27.69,27.69,0,0,1,4,32,28,28,0,0,1,32,4h0a28,28,0,0,1,0,56Z"></path><path fill="#8d6c9f" d="M47.37 13.2a1 1 0 0 0-1.25 1.56 21.46 21.46 0 0 1 1.77 1.59 1 1 0 0 0 1.42-1.41A23.7 23.7 0 0 0 47.37 13.2zM26.93 10.65a21.72 21.72 0 0 1 12.38.4 22 22 0 0 1 3 1.26 1 1 0 0 0 .45.11 1 1 0 0 0 .45-1.89 24 24 0 0 0-3.29-1.37 23.67 23.67 0 0 0-13.52-.44 1 1 0 1 0 .51 1.93zM14.57 41.82a1 1 0 0 0-1.34-.45l-1.85.93a1 1 0 0 0 .9 1.79l1.85-.93A1 1 0 0 0 14.57 41.82zM16 45.88l-1.55 1.38a1 1 0 1 0 1.33 1.49l1.55-1.38A1 1 0 1 0 16 45.88zM11.51 33h.06a1 1 0 0 0 .06-2l-2.07-.12a1 1 0 0 0-.12 2zM21.17 49.25a1 1 0 0 0-1.39.29l-1.14 1.73a1 1 0 1 0 1.67 1.1l1.14-1.73A1 1 0 0 0 21.17 49.25zM12.93 37.08a1 1 0 0 0-1.18-.78l-2 .42a1 1 0 0 0 .2 2l.2 0 2-.42A1 1 0 0 0 12.93 37.08z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="52 42 88 66" width="50" height="50" className="cursor-pointer p-1 rounded-lg hover:bg-green-400" onClick={() => window.open('https://mail.google.com/mail/u/0/?fs=1&to=cocotraderindo@gmail.com&tf=cm') }>
                        <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/>
                        <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/>
                        <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/>
                        <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/>
                        <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/>
                    </svg>
                </div>
            </div>
            <div className="block md:hidden">
                aaa
            </div>
        </div>
    )
}

export default Contact;