import Product from '@/app/components/Product';
import getProductsMapped, { ProductDTO } from '@/app/dto/products';
import { supabase } from "@/app/lib/supabase";
import Modal from '@/app/components/Modal';

type Props = {
    params: {
        id: string;
    }
}

export default async function ModalProduct({ params }: Props) {
    const { data: productsResponse } = await supabase.rpc('get_product', { param_product_id: params.id }).returns<ProductDTO[]>();
    const { data: colors } = await supabase.from('product_has_colors').select('*').eq('product_id', params.id)

    const products = await getProductsMapped(productsResponse);
    const product = products && products[0];

    return (
        <Modal>
            {
                product && <Product {...product} />
            }
        </Modal>
    );
}