import Product from '@/app/components/ui/Product';
import Modal from '@/app/components/ui/Modal';
import getProductById from '@root/src/actions/getProductById';

type Props = {
    params: {
        id: string;
    }
}

export default async function ModalProduct({ params }: Props) {
    const product = await getProductById(params.id);

    return (
        <Modal>
            {
                product && <Product {...product} />
            }
        </Modal>
    );
}