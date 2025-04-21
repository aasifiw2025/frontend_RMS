import { DashboardCardProps } from "../../types/DashboardCardProps";

const DashboardCard = ({
  icon,
  title,
  des,
  hasIcon,
  secondaryIcon,
}: DashboardCardProps) => {
  return (
    <div className="w-full bg-[#F5EFEF] h-[75px] py-[6px] px-[8px] flex items-center gap-4 rounded-lg">
      <div className="bg-white h-[63px] w-[65px] shadow-sm flex justify-center items-center rounded-lg border-0.5 border-[#CDD7E3]">
        {icon}
      </div>
      <div>
        <p className="font-[400] text-xs">{title}</p>
        <div className="font-[700] text-sm uppercase flex items-center gap-4">
          {des}
          {hasIcon && secondaryIcon}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
