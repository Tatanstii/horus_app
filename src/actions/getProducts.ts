import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import getProductsMapped, { ProductDTO } from "../app/dto/products";
import { cookies } from "next/headers";
import type { Products } from "../app/types";

export default async function getProducts(): Promise<Products> {
  const supabase = createServerComponentClient({
    cookies: cookies,
  });

  const { data, error } = await supabase.rpc("get_products").select("*").returns<ProductDTO[]>();

  if (error) {
    throw new Error(error.message);
  }

  const products = await getProductsMapped(data);

  return products || [];
}
