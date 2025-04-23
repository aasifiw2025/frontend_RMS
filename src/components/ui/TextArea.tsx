import clsx from "clsx";
import { textAreaProps } from "../../types/textArea";

const Textarea = ({
  placeholder,
  value,
  onChange,
  id,
  label,
  classname,
  isRequired,
}: textAreaProps) => {
  const baseClassName = `pl-2 pt-2 rounded-[10px] bg-white border border-[#BBBBBB] outline-none resize-none`;
  const mergedClassName = clsx(baseClassName, classname);

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="font-inter text-sm font-[700] mb-2">
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      <textarea
        value={value}
        onChange={onChange}
        id={id}
        name={id}
        placeholder={placeholder}
        className={mergedClassName}
        rows={5}
      />
    </div>
  );
};

export default Textarea;
