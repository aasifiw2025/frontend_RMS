import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import SwitchComponent from "../ui/Switch";

const JobCard = () => {
  return (
    <div className="w-full  h-[72px] flex justify-between  items-center  bg-[#F5F4F4] border border-[#F5F4F4] px-4.5 py-2 rounded-lg rounded-l-[15px] rounded-r-[10px]">
      <div className="flex items-center gap-2">
        <img
          className="w-[49px] h-[46px] object-contain"
          src="/assets/company.png"
          alt="company-logo"
        />
        <div>
          <h2 className="text-[12px] font-[700] text-black font-inter">
            Internship-Frontend Developer
          </h2>

          <span className="inline text-[12px] font-[400] text-black font-inter">
            idab Tech UK Remote
          </span>
        </div>
      </div>

      <div>
        <span className="inline text-[12px] font-[400] text-black font-inter">
          HR Tech
        </span>
      </div>
      <div>
        <span className="inline text-[12px] font-[400] text-black font-inter">
          100-200 USD
        </span>
      </div>
      <div>
        <span className="inline text-[12px] font-[400] text-black font-inter">
          20 Feb 2024
        </span>
      </div>

      <div className="">
        <SwitchComponent />
        <span className={`text-sm  text-black font-[700]`}>Published</span>
      </div>
      <div className="flex items-center gap-2">
        <Link
          to={"/jobs/1"}
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
      </div>
    </div>
  );
};

export default JobCard;
