import { CartContext } from "@/context/Cart.context";
import { XMarkIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import Portal from "../ui/Portal";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const { cart, open, setOpen, setCart } = useContext(CartContext);

  const handleDeleteItem = (index: number) => {
    const updateCart = [...cart];
    updateCart.splice(index, 1);
    setCart(updateCart);
  };
  
  return (
    <Portal show={open}>
      <div className="fixed right-0 p-5 h-full w-96 top-0 bg-white shadow z-50">
        <div className="bg-secondary flex justify-between items-center px-5 py-3 rounded-xl">
          <p>Cart ({cart.length})</p>
          <span
            className="rounded-full w-10 h-10 transition-colors cursor-pointer hover:bg-primary/10 flex items-center justify-center"
            onClick={() => setOpen(false)}
          >
            <XMarkIcon className="w-6 h-6" />
          </span>
        </div>
        <div className="mt-4">
          {cart.length === 0 ? (
            <div className="w-full font-semibold text-center">
              No items on cart
            </div>
          ) : (
            cart.map((el, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b last:border-none border-[#eee] mb-2 pb-2"
              >
                <div className="flex items-center gap-3">
                  <img src={el.imgUrl} alt="" className="w-20" />
                  <div>
                    <p>{el.title}</p>
                    <p className="font-semibold">{el.price}</p>
                  </div>
                </div>
                <div
                  onClick={() => handleDeleteItem(i)}
                  
                  className="w-10 h-10 rounded-full cursor-pointer flex justify-center items-center transition-colors hover:bg-[#ff0000] hover:bg-opacity-10 text-[#ff0000]"
                >
                  <TrashIcon className="w-5 h-5" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <span
        onClick={() => setOpen(false)}
        className="bg-[#000] bg-opacity-30 fixed inset-0 w-full h-full z-40 -left-60"
      />
    </Portal>
  );
};

export default Cart;
