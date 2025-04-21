import { ChangeEvent } from "react";

export interface textAreaProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  label?: string;
  classname?: string;
  isRequired?: boolean;
}
