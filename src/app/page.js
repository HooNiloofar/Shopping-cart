import { items } from "@/data/items";
import ProductItem from "@/components/ProductItem";
export default function Home() {
  const { products } = items;
  console.log(products);
  return (
    <div className="container grid grid-cols-4  m-auto">
      {products.map((item) => (
        <ProductItem key={item?.id} product={item} />
      ))}
    </div>
  );
}
