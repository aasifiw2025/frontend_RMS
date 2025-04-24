import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import SwitchComponent from "../ui/Switch";
import { TableCell, TableRow } from "../ui/table";

const CompanyList = ({ hashandLogo }: { hashandLogo: boolean }) => {
  return (
    <TableRow className="w-full   h-[72px] flex justify-between  items-center  bg-[#F5F4F4] border border-[#F5F4F4] px-4.5 py-2 rounded-lg rounded-l-[15px] rounded-r-[10px]">
      <TableCell className="flex items-center gap-2">
        <img
          className="w-[49px] h-[46px] object-contain"
          src="/assets/company.png"
          alt="company-logo"
        />
        <div>
          <h2 className="text-[12px] font-[700] text-black font-inter">
            Expert Recruitment- UAE
          </h2>
          <div className="flex items-center gap-2">
            <img
              className="h-5 w-5 object-contain inline"
              src="/assets/location.png"
              alt="company-logo"
            />
            <span className="inline text-[12px] font-[400] text-black font-inter">
              Location, Country
            </span>
          </div>
        </div>
      </TableCell>
      <TableCell>
        {hashandLogo && (
          <img
            className="h-7.5 w-7.5 object-contain"
            src="/assets/setting-hand.png"
            alt="setting-hand"
          />
        )}
      </TableCell>
      <TableCell className="flex flex-col">
        <span className="inline text-[12px] font-[400] text-black font-inter">
          info@expertrecruitment.com
        </span>
        <span className="text-[12px] font-[700] text-black font-inter">
          +1-6789034567
        </span>
      </TableCell>
      <TableCell className="">
        <SwitchComponent />
        <span className={`text-sm  text-black`}>Activated</span>
      </TableCell>
      <TableCell className="">
        <SwitchComponent />
        <span className={`text-sm  text-black `}>Verified</span>
      </TableCell>
      <TableCell className="flex items-center gap-2">
        <Link
          to={"/profiles/company/1"}
          className="text-sm font-[700] text-black font-inter h-[45px] w-[50px] py-2 px-2.5 border-[0.5px] border-[#CDD7E3] rounded-lg shadow-md flex justify-center items-center"
        >
          <FaRegEye />
        </Link>
        <button className="text-sm font-[700] text-black font-inter h-[45px] w-[50px] py-2 px-2.5 border-[0.5px] border-[#CDD7E3] rounded-lg shadow-md flex justify-center items-center">
          <FaRegEdit />
        </button>
        <button className="text-sm font-[700] text-black font-inter h-[45px] w-[50px] py-2 px-2.5 border-[0.5px] border-[#CDD7E3] rounded-lg shadow-md flex justify-center items-center">
          <MdDelete />
        </button>
      </TableCell>
    </TableRow>
  );
};

export default CompanyList;
