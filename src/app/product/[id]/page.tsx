import Product from '@/app/components/Product';
import { supabase } from '../../lib/supabase';
import getProductsMapped, { ProductDTO } from '@/app/dto/products';

type Props = {
    params: {
        id: string;
    }
}

export default async function ProductPage({ params }: Props) {
    const { data: productsResponse } = await supabase.rpc('get_product', { param_product_id: params.id }).returns<ProductDTO[]>();
    const { data: colors } = await supabase.from('product_has_colors').select('*').eq('product_id', params.id)

    const products = await getProductsMapped(productsResponse);
    const product = products && products[0];

    return (
        <section className='min-h-[calc(100dvh-144px)] bg-white'>
            {
                product && <Product {...product} />
            }
        </section>
    );
}