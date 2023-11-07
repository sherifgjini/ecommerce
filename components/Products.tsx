"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import Card from "./ui/Card";
import { CartContext } from "@/context/Cart.context";
import { IProduct } from "@/interfaces/IProducts.types";
import toast, { Toaster } from "react-hot-toast";

interface ProductsProps {
  initialData: IProduct[];
}

const Products: React.FC<ProductsProps> = ({ initialData }) => {
  const { cart, setCart } = useContext(CartContext);
  const [products, setProducts] = useState<IProduct[]>(initialData);

  useEffect(() => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);
        if (cartItem) {
          return { ...product, stock: product.stock - 1 };
        }
        return product;
      });
    });
  }, []);

  const addToCart = (product: IProduct) => {
    if (product.stock > 0) {
      setCart((prevCart) => [...prevCart, product]);
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === product.id ? { ...p, stock: p.stock - 1 } : p
        )
      );

      //We would call post api here to update cart...
      toast.success(
        <div className="flex flex-col">
          <p className="font-bold">{product.title}</p>
          <p>Added to the cart</p>
        </div>
      );
    } else {
      toast.error(`No items on stock`);
    }
  };

  return (
    <div className="flex flex-wrap gap-4 w-full mt-5">
      {products.map((el) => (
        <Card key={el.id} {...el} onClick={() => addToCart(el)} />
      ))}
      <Toaster />
    </div>
  );
};

export default Products;
