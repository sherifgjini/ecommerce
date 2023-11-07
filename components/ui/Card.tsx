import { IProduct } from "@/interfaces/IProducts.types";
import Button from "./Button";
import { HeartIcon } from "@heroicons/react/24/outline";

interface CardProps extends IProduct {
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, imgUrl, price, stock, description, onClick }) => {
  return (
    <div className="bg-secondary p-4 rounded-xl flex flex-col gap-3 flex-1">
      <div className="w-full bg-white rounded-xl">
        <div
          className="h-32 bg-contain bg-no-repeat bg-center rounded-xl"
          style={{
            backgroundImage: `url(${imgUrl})`,
          }}
        />
      </div>
      <div className="flex flex-col justify-between h-full gap-2">
        <div>
          <div className="flex justify-between w-full items-center mb-1">
            <p className="font-semibold">{price}€</p>
            <p className="text-xs">Stock: {stock}</p>
          </div>
          <p className="text-xs font-medium mb-1">{title}</p>
          {description && <p className="opacity-40 line-clamp-2 text-xs">{description}</p>}
        </div>
        <div className="flex items-center gap-2">
          <Button onClick={onClick} className="flex-1">Add to card</Button>
          <Button type="white" icon={<HeartIcon className="w-6 h-6" />} />
        </div>
      </div>
    </div>
  );
};

export default Card;
