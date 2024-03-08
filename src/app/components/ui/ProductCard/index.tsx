"use client";

import { Product } from "@/app/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  authenticityLevel: string;
  images: string[];
  price: string;
  reference: string;
} & Pick<Product, "id" | "name">;

export default function ProductCard({
  id,
  images,
  authenticityLevel,
  name,
  price,
  reference,
}: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${id}`);
  };

  const firstImage = images[0];

  return (
    <article className="w-full rounded-md relative overflow-hidden group hover:cursor-pointer border-2 ">
      <div className="overflow-hidden">
        <Image
          src={firstImage}
          alt="Product"
          width={400}
          height={400}
          className="w-full object-cover object-center rounded-t-md group-hover:scale-110 hover:transition ease-linear duration-150 aspect-square"
          onClick={handleClick}
        />
      </div>
      <div className="w-full p-3 bg-white flex flex-col gap-2 md:flex-row justify-between">
        <div>
          <h1 className="text-lg line-clamp-1">{name}</h1>
        </div>
        <span className="bg-lime-400 rounded-lg block px-3 py-1 h-fit text-center">{price}</span>
      </div>
      <span className="absolute top-2 right-2 bg-supernova-400 px-3 py-1 rounded-md font-sans text-sm">
        {authenticityLevel}
      </span>
    </article>
  );
}
