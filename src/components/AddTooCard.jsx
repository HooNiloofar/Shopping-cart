"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
export default function AddTooCard({ product }) {
  const [qty, setQty] = useState(0);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  function addToCartHandler() {
    let newQty = qty;
    const existingItem = cartItems.find((x) => x.id === product.id);

    if (existingItem) {
      if (existingItem.qty + 1 <= product.count) {
        newQty = existingItem.qty + 1;
      } else {
        return alert("این محصول وجود ندارد.");
      }
    }
    dispatch(addToCart({ ...product, qty: newQty }));
  }
  return (
    <>
      <div className="border border-slate-300 text-slate-300 rounded-lg px-3 py-2 mt-3 hover:bg-slate-800">
        <button onClick={addToCartHandler}> افزودن به سبد خرید</button>
      </div>
    </>
  );
}
