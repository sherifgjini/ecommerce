"use client";
import { CartContext } from "@/context/Cart.context";
import {
  ShoppingCartIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { HTMLAttributes, useContext, useEffect, useState } from "react";
import Cart from "./Cart";

const Content = () => {
  const { cart, setOpen } = useContext(CartContext);
  const [isCartUpdated, setIsCartUpdated] = useState<boolean>(false);



  useEffect(() => {
    if (cart.length > 0) {
      setIsCartUpdated(true);
      const timer = setTimeout(() => {
        setIsCartUpdated(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [cart.length]);

  return (
    <>
    <Cart />
    <div className="flex gap-4">
      <El onClick={() => setOpen(true)}>
        <span
          className={`${isCartUpdated ? "jump" : ""}
        w-5 h-5 bg-white text-xs text-primary rounded-full absolute -top-0.5 -right-0.5 flex items-center justify-center
        `}
        >
          {cart.length}
        </span>
        <ShoppingCartIcon className="w-6 h-6" />
      </El>
      <El>
        <HeartIcon className="w-6 h-6" />
      </El>
      <El>
        <UserIcon className="w-6 h-6" />
      </El>
    </div>
    </>
  );
};

export default Content;

const El: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  onClick,
  children,
}) => {
  return (
    <div
      className="w-10 h-10 flex items-center text-white relative justify-center rounded-md transition-colors hover:bg-white/10 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};
