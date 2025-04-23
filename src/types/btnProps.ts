import { ReactNode } from "react";

export interface btnProps {
  title?: string;
  onClick: () => void;
  hasIcon?: boolean;
  icon?: ReactNode;
  className?: string;
  textClassName?: string;
  type?: string;
}
