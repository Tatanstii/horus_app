import FilterList from "../components/FilterList";
import Stock from "../components/Stock";
import { supabase } from "../lib/supabase";
import { Brands, Products } from "../types";
import cn from "../utils/cn";
import isEmpty from "../utils/isEmpty";

export default async function CatalogPage() {
    const { data: products } = await supabase.rpc('get_products').returns<Products>();
    const { data: brands } = await supabase.from('watch_brands').select('*').returns<Brands>();

    const brandsFilter = {
        label: "Marcas",
        filters: brands?.map(({ id, name }) => ({
            id,
            value: id,
            displayValue: name
        })) || []
    }

    const filters = [brandsFilter]

    return (
        <div className="h-full px-20 py-10 bg-white grid grid-cols-1 md:grid-cols-5 gap-10">
            <section className={cn("col-span-1 md:col-span-1",
                {
                    "hidden": isEmpty(brands)
                })}>
                <FilterList filtersGroup={filters} />
            </section>
            <section className={cn("col-span-1 md:col-span-4", {
                "md:col-span-5": isEmpty(brandsFilter)
            })}>
                <Stock items={products} />
            </section>
        </div>
    )
}