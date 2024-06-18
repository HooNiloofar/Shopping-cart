import React from "react";
import Link from "next/link";
import Image from "next/image";
import AddTooCard from "./AddTooCard";
export default function ProductItem({ product }) {
  return (
    <div className=" rounded-lg bg-slate-900 m-3">
      <Image
        src={product.image}
        width={400}
        height={400}
        className="rounded-t-lg object-cover w-full"
        alt="product"
      />
      <div className="flex flex-col items-center justify-center p-5 mt-5">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg">{product.title}</h2>
        </Link>
        <p className="mt-2 text-slate-300 rtl ">{product.price}تومان</p>
        <AddTooCard product={product} />
      </div>
    </div>
  );
}
