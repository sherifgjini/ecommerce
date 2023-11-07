"use client";
import { IProduct } from "@/interfaces/IProducts.types";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type CartType = Pick<IProduct, "imgUrl" | "title" | "price" | "id">

interface CartContext {
    cart:CartType[];
    setCart: Dispatch<SetStateAction<CartType[]>>;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export const CartContext = createContext<CartContext>({} as CartContext);
 
export const CartProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [cart, setCart] = useState<CartType[]>([] as CartType[]);
    const [open, setOpen] = useState<boolean>(false);
    return ( 
        <CartContext.Provider value={{cart, setCart, open, setOpen}}>
            {children}
        </CartContext.Provider>
     );
}
 