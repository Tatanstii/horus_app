import ProductCard from "../ProductCard";
import { Products } from "../../../types";
import { Empty } from "antd";
import isEmpty from "@/app/utils/isEmpty";
import { getCOPCurrency } from "@/app/utils/currency";

type Props = {
  items?: Products | null;
};

export default function Stock({ items }: Props) {
  if (isEmpty(items)) {
    return <Empty />;
  }

  return (
    <div className="products__grid">
      {items?.map(({ id, name, images, price, authenticityLevel, reference }) => (
        <ProductCard
          key={id}
          id={id}
          images={images}
          name={name}
          price={getCOPCurrency(price)}
          authenticityLevel={authenticityLevel}
          reference={reference}
        />
      ))}
    </div>
  );
}
