import { FaPlusCircle, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const JobCategoryCard = () => {
  return (
    <div className="w-full py-4 border-1 border-[#CBCBCB] rounded-md bg-[#F5F4F4] px-4 flex items-center justify-start gap-8">
      <div className="flex items-center gap-4">
        <img
          className="h-[50px] w-[50px] object-contain"
          src="/assets/jobcategorylogo.png"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-sm font-[700]">Engineer/Architects</h2>
      </div>
      <div className="flex items-center gap-2">
        <img
          className="h-[30px] w-[85px] object-contain"
          src="/assets/languages.png"
          alt=""
        />
        <FaPlusCircle />
      </div>
      <div className="flex w-full items-end justify-end">
        <div className="flex items-center gap-2">
          <button className="text-sm font-[700] text-black font-inter h-[45px] w-[50px] py-2 px-2.5 border-[0.5px] border-[#CDD7E3] rounded-lg shadow-md flex justify-center items-center">
            <FaRegEdit />
          </button>
          <button className="text-sm font-[700] text-black font-inter h-[45px] w-[50px] py-2 px-2.5 border-[0.5px] border-[#CDD7E3] rounded-lg shadow-md flex justify-center items-center">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCategoryCard;
