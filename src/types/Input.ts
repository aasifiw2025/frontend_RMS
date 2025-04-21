import { HTMLInputTypeAttribute } from "react";

export interface inputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  classname?: string;
  id: string;
  label?: string;
  isRequired?: boolean;
}
