import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
  inputClassName?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  icon,
  className,
  inputClassName,
}) => {
  return (
    <div className={`${className} bg-white rounded-xl h-10 relative`}>
      {icon && (
        <span className="h-full w-10 flex items-center justify-center">
          <MagnifyingGlassIcon className="w-6 h-6 opacity-40" />
        </span>
      )}
      <input
        className={`${inputClassName} absolute inset-0 ${
          icon && "pl-11"
        } px-4 bg-transparent outline-none`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
