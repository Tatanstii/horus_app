import Stock from "@/app/components/ui/Stock";
import getProducts from "@root/src/actions/getProducts";
import getProductsByGender from "@root/src/actions/getProductsByGender";
import GenderOptions from "./components/GenderOptions";

type Props = {
  searchParams: {
    gender: string;
  };
};

export default async function CatalogPage({ searchParams }: Props) {
  const { gender } = searchParams;

  const products = gender ? await getProductsByGender(gender) : await getProducts();

  return (
    <div className="h-full px-5 bg-white">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex flex-col gap-5">
          <GenderOptions />
          <section>
            <p className="text-sm text-gray-500 mb-5">
              Puedes dar clic sobre el reloj para ver el detalle
            </p>
            <Stock items={products} />
          </section>
        </div>
      </div>
    </div>
  );
}
