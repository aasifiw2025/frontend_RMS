import { inputProps } from "../../types/Input";
import clsx from "clsx";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  id,
  label,
  classname,
  isRequired,
}: inputProps) => {
  const baseClassName = `pl-2 rounded-[10px] bg-white border border-[#BBBBBB] outline-none`;
  const mergedClassName = clsx(baseClassName, classname);
  return (
    <div className="flex  flex-col">
      <label htmlFor={id} className={`font-inter text-sm font-[700] mb-2`}>
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className={mergedClassName}
      />
    </div>
  );
};

export default Input;
