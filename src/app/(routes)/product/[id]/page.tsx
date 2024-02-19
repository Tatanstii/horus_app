import Product from '@/app/components/ui/Product';
import getProductById from '@root/src/actions/getProductById';

type Props = {
    params: {
        id: string;
    }
}

export default async function ProductPage({ params }: Props) {
    const product = await getProductById(params.id);

    return (
        <section className='min-h-[calc(100dvh-144px)] bg-white'>
            {
                product && <Product {...product} />
            }
        </section>
    );
}