import { ChangeEvent } from "react";

export interface radioProps {
  checked: boolean;
  handleCheck: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  isRequired?: boolean;
  id?: string;
}
