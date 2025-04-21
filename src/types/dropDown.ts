export interface dropDownProps {
  id: string;
  label?: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  classname?: string;
  isRequired?: boolean;
  defaultOption?: { value: string; label: string };
}
