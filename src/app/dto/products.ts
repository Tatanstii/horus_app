import type { Gender, Product, Products } from "../types";
import { mapResponseToDTO } from "../utils/dto";

export type ProductDTO = {
  id: number;
  name: string;
  description?: string;
  reference: string;
  color: string;
  brand: string;
  authenticity_level: string;
  gender: Gender;
  price: number;
  images: string[];
};

export default async function getProductsMapped(products: ProductDTO[] | null): Promise<Products> {
  if (!products) return [];

  const productsMapped = await products.map((productDTO) => {
    return mapResponseToDTO<Product, typeof productDTO>(productDTO, {
      id: "id",
      name: "name",
      description: "description",
      reference: "reference",
      brand: "brand",
      authenticity_level: "authenticityLevel",
      gender: "gender",
      price: "price",
      images: "images",
    });
  });
  return productsMapped;
}
