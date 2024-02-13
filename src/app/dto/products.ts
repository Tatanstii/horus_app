import type { Gender, Product, Products } from "../types";
import { mapResponseToDTO } from "../utils/dto";

export type ProductDTO = {
  id: number;
  name: string;
  description?: string;
  reference: string;
  brand: string;
  authenticity_level: string;
  gender: Gender;
  price: number;
  image_url: string;
};

export default async function getProductsMapped(products: ProductDTO[] | null) {
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
      image_url: "imageUrl",
    });
  });
  return productsMapped;
}
