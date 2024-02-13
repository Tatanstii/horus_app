"use client"

import { Product } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
    authenticityLevel: string;
    imageUrl: string;
    price: string;
} & Pick<Product, 'id' | 'name'>

export default function ProductCard({ id, imageUrl, authenticityLevel, name, price }: Props) {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${id}`);
    }

    return <article className="w-full h-full rounded-md relative overflow-hidden group hover:cursor-pointer ">
        <Image src={imageUrl} alt="Product" width={400} height={400} className="w-full object-cover object-center rounded-md group-hover:scale-110 hover:transition ease-linear duration-150" onClick={handleClick} />
        <div className="absolute h-16 bottom-0 bg-white/80 backdrop-blur w-full px-5 py-1 flex flex-row justify-between items-center">
            <h1 className="font-cinzel text-lg font-bold">{name}</h1>
            <span className="bg-lime-400 rounded-lg block px-3 py-1 h-fit">
                {price}
            </span>
        </div>
        <span className="absolute top-2 right-2 bg-supernova-400 px-3 py-1 rounded-md font-sans text-sm">
            {authenticityLevel}
        </span>
    </article>
}