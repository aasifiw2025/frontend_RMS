import { JSX, ReactNode } from "react";

export interface DashboardCardProps {
  icon: ReactNode;
  title: string;
  des: string;
  hasIcon?: boolean;
  secondaryIcon?: JSX.Element;
}
