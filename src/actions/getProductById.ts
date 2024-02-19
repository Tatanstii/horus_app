import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import getProductsMapped, { ProductDTO } from "../app/dto/products";
import { cookies } from "next/headers";
import type { Product } from "../app/types";

export default async function getProductById(id: string): Promise<Product> {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });
  const { data, error } = await supabase
    .rpc("get_product", { param_product_id: id })
    .select("*")
    .returns<ProductDTO[]>();

  if (error) {
    throw new Error(error.message);
  }

  const products = await getProductsMapped(data);

  return products[0] || [];
}
