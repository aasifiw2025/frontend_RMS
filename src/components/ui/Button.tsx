import { btnProps } from "../../types/btnProps";
import clsx from "clsx";
const Button = ({ title, onClick, hasIcon, icon, className }: btnProps) => {
  const baseClassName = `bg-[#0D468A] border-1 border-[#CDD7E3]   text-white rounded-[10px] flex items-center gap-2 justify-center px-6`;
  const mergedClassName = clsx(baseClassName, className);
  return (
    <button onClick={onClick} className={mergedClassName}>
      {hasIcon && icon}
      <span>{title}</span>
    </button>
  );
};

export default Button;
