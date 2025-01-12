import { items } from "@/data/items";
import Link from "next/link";
import Image from "next/image";
import AddTooCard from "@/components/AddTooCard";

export default function ProductPage({ params: { id } }) {
  const product = items.products.find((p) => p.id === id);
  return (
    <div className=" w-3/5 m-auto py-8 px-16 rounded-lg bg-slate-900">
      <div className="mb-6 text-center">
        <Link href="/">بازگشت به فروشگاه </Link>
        <div className="grid md:grid-cols-2">
          <Image
            src={product.image}
            width={400}
            height={400}
            alt="image"
            className="rounded-lg "
          />
          <div className="p-5 text-right">
            <div>
              <div>
                <h1 className="text-lg">{product.title}</h1>
              </div>
              <div>
                <h2 className="text-lg my-4 rtl">
                  {product.price + " "} تومان
                </h2>
              </div>
            </div>
            <AddTooCard product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
