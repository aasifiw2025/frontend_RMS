import clsx from "clsx";
import { dropDownProps } from "../../types/dropDown";

const DropDownMenu = ({
  id,
  label,
  options,
  value,
  onChange,
  classname,
  isRequired,
  defaultOption,
}: dropDownProps) => {
  const baseClassName = ` pl-2  rounded-[10px] bg-white border border-[#BBBBBB] outline-none`;
  const mergedClassName = clsx(baseClassName, classname);
  return (
    <div className="flex flex-1 flex-col">
      <label htmlFor={id} className="font-inter text-sm font-[700]">
        {label}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={mergedClassName}
      >
        {defaultOption && (
          <option value={defaultOption.value} disabled>
            {defaultOption.label}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDownMenu;
