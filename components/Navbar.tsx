import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
    return (
        <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
            <div className="flex flex-row gap-3 items-center cursor-pointer">
                <div className="relative">
                <Image
                src="/horseLogo.jpg"
                alt="logo"
                width={40}
                height={40}
                className="w-full h-full object-contain rounded-full"
                />
                </div>
                <a className="text-white text-[25px] font-semibold">Webchain<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                        {" "}
                        Dev
                        {" "}
                    </span></a>
            </div>

            <div className="flex flex-row gap-5 mb-2 cursor-pointer">
                {Socials.map((social) => (
                    <Image 
                        key={social.name}
                        src={social.src}
                        alt={social.src}
                        width={28}
                        height={28}
                    />
                ))}
            </div>
        </div>
    );
}

export default Navbar;