"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type PropTypes = {
    link: string;
    imageUrl: string;
    text: string;
}

export default function GenderLink({ link, text, imageUrl }: PropTypes) {

    const router = useRouter();

    const handleClick = () => {
        router.push(link);
    }

    return (
        <button className="w-[450px] h-[500px] bg-no-repeat bg-cover bg-center rounded-md grid place-items-center justify-center relative overflow-hidden hover:ring-4 ring-supernova-500 hover:transition ease-in duration-105" onClick={handleClick}>
            <Image src={imageUrl} alt={text} width={400} height={500} className="w-full h-full object-cover object-center hover:scale-110 ease-linear duration-150 grayscale z-10 absolute inset-0" />
            <div className="backdrop-blur z-20 w-[450px] px-5 py-3 bg-black/70">
                <h2 className=" text-supernova-500 text-2xl font-cinzel">{text}</h2>
            </div>
        </button>
    )
}