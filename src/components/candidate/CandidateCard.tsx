import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import SwitchComponent from "../ui/Switch";
import { TableCell, TableRow } from "../ui/table";

const CandidateCard = () => {
  return (
    <TableRow>
      <TableCell className="flex items-center gap-3 min-w-[200px]">
        <img
          src="/assets/company.png"
          className="w-12 h-12 object-contain"
          alt="logo"
        />
        <div>
          <h2 className="text-sm font-bold text-black font-inter">
            Jinal Ghogari
          </h2>
          <div className="flex items-center gap-1 text-xs text-black">
            <img
              src="/assets/UserCircleOutline.png"
              className="h-4 w-4"
              alt="role"
            />
            <span className="font-inter font-normal">Role / Position</span>
          </div>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex flex-col ">
          <span className="text-black font-inter font-normal">
            info@gmail.com
          </span>
          <span className="text-black font-inter font-bold">+1-6789034567</span>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex  items-center gap-2 min-w-[130px]">
          <SwitchComponent />
          <span className={`text-sm text-black font-[700]`}>Activate</span>
        </div>
      </TableCell>
      <TableCell className="">
        <div className="flex  items-center gap-2 min-w-[130px]">
          <SwitchComponent />
          <span className={`text-sm text-black font-[700]`}>Verified</span>
        </div>
      </TableCell>
      <TableCell className="">
        <p className="text-xs text-black">24 Dec 2023</p>
      </TableCell>
      <TableCell className="">
        <div className="flex gap-2 min-w-[130px]">
          <Link
            to="/profiles/candidate/1"
            className="h-10 w-10 flex justify-center items-center border border-[#CDD7E3] rounded-lg shadow-sm text-black"
          >
            <FaRegEye />
          </Link>
          <button className="h-10 w-10 flex justify-center items-center border border-[#CDD7E3] rounded-lg shadow-sm text-black">
            <FaRegEdit />
          </button>
          <button className="h-10 w-10 flex justify-center items-center border border-[#CDD7E3] rounded-lg shadow-sm text-black">
            <MdDelete />
          </button>
        </div>
      </TableCell>
    </TableRow>
  );
};
export default CandidateCard;
