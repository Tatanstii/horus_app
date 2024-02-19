"use client";

import Logo from "@public/images/logo.svg";
import Image from "next/image";
import Navbar from "../Navbar";
import { LuMenu } from "react-icons/lu";
import { useDisclosure } from "@/app/hooks/useDisclosure";
import cn from "@/app/utils/cn";
import useScroll from "@/app/hooks/useScroll";

export default function Header() {
    const { src: logoSource } = Logo;
    const { isOpen, toggle } = useDisclosure();
    const { isScrolled } = useScroll();

    return (
        <header className={cn("fixed md:static w-full z-30", {
            "bg-black/80 backdrop-blur-xl": isScrolled,
        })}>
            <div className="mx-auto">
                <div className="px-14 py-4 flex flex-row relative">
                    <div className="absolute top-0 bottom-0 md:hidden flex flex-col justify-center">
                        <button onClick={toggle} className="group hover:ring-1 hover:transition ease-in duration-150 rounded-md ring-supernova-500 px-2 py-1 m-0">
                            <LuMenu size={32} className="text-white group-hover:text-supernova-500 group-hover:transition ease-in duration-150" />
                            <span className="sr-only">Abrir menu</span>
                        </button>
                    </div>
                    <div className="mx-auto">
                        <Image src={logoSource} alt="Horus" width={120} height={120} className="h-full" />
                    </div>
                    <div className={cn("absolute md:bg-transparent md:flex-1 md:static top-full inset-x-0", {
                        "hidden md:block": !isOpen,
                        "bg-black": !isScrolled && isOpen,
                        "bg-black/80 backdrop-blur-xl": isScrolled && isOpen,
                    })}>
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    );
}