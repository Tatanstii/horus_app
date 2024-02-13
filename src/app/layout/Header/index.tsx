"use client";

import Logo from "@public/images/logo.svg";
import Image from "next/image";
import Navbar from "../Navbar";
import { Menu } from "lucide-react";
import { useDisclosure } from "@/app/hooks/useDisclosure";
import cn from "@/app/utils/cn";

export default function Header() {
    const { src: logoSource } = Logo;
    const { isOpen, toggle } = useDisclosure()
    return (
        <header className="block h-36">
            <div className="w-full bg-black flex flex-row px-24 py-4 fixed z-30 h-auto">
                <div className="flex flex-col justify-center md:hidden absolute top-1/2">
                    <button onClick={toggle} className="group hover:ring-1 hover:transition ease-in duration-150 rounded-md ring-supernova-500 px-2 py-1">
                        <Menu size={32} className="text-white group-hover:text-supernova-500 group-hover:transition ease-in duration-150" />
                        <span className="sr-only">Abrir menu</span>
                    </button>
                </div>
                <div className="mx-auto">
                    <Image src={logoSource} alt="Horus" width={100} height={144} className="h-full" />
                </div>
                <div className={cn("absolute md:flex-1 md:static top-36 inset-x-0", {
                    "hidden md:block": !isOpen,

                })}>
                    <Navbar />
                </div>
            </div>
        </header>
    );
}