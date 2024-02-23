"use client";

import type { Colors, Product as ProductType } from "@/app/types";
import { getCOPCurrency } from "@/app/utils/currency";
import { Badge, Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {
  colors?: Colors;
} & ProductType;

export default function Product({ ...product }: Props) {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <article className="flex flex-col md:flex-row p-10 gap-10">
      <div className="flex-1 w-[400px] h-auto">
        <Carousel autoplay>
          {product.images.map((image) => (
            <div key={image}>
              <Image
                src={image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-auto max-h-[660px] object-cover object-center"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flex-1 px-10 flex flex-col gap-10 justify-between">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl">{product.name}</h1>
          <p className="text-4xl text-green-500">{getCOPCurrency(product.price)}</p>
          <div className="flex flex-col gap-2">
            <p className="text-lg text-gray-400">{product.authenticityLevel}</p>
            <p className="text-lg text-gray-400">Referencia: {product.reference}</p>
            <div
              className="w-5 h-5 rounded-full border border-2"
              style={{
                backgroundColor: product.color,
              }}
            ></div>
          </div>
          <div>
            <p>{product.description}</p>
          </div>
        </div>
        {product.colors && (
          <div>
            <h2>Colores</h2>
            <ul>
              {product.colors.map((color) => (
                <li key={color.id}>{color.name}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-row gap-10">
          <button
            className="text-lg px-5 x-10 py-3 rounded-md flex flex-row justify-center items-center bg-gray-100"
            onClick={goBack}
          >
            Cancelar
          </button>
          <Link
            className="bg-green-500 text-white text-lg w-full x-10 py-3 rounded-md flex flex-row justify-center items-center gap-3 hover:text-white"
            href={`https://api.whatsapp.com/send?phone=573053292703&text=Hola, me gustaría pedir el reloj de la marca ${product.brand}, con referencia ${product.reference}`}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Comprar</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
