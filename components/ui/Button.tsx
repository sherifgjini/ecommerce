import { HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  type?: "primary" | "white" | "border";
}

const Button: React.FC<ButtonProps> = ({
  icon,
  onClick,
  className,
  children,
  type = "primary",
}) => {
  let style: string;
  switch (type) {
    case "primary":
      style = "bg-primary text-white";
      break;
    case "border":
      style = "bg-white text-primary border border-primary";
      break;
    case "white":
      style = "bg-white text-primary";
      break;
  }

  return (
    <button
    onClick={onClick}
      className={`${className} ${style} px-3 py-2 min-h-[32px] rounded-lg text-center text-xs outline-none font-semibold`}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
