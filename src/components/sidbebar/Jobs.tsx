import { useState } from "react";
import { FaBuilding, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Jobs = () => {
  const { pathname } = useLocation();

  const path = pathname.split("/")[1];
  const [isPricePlanOpen, setIsPricePlanOpen] = useState(false);
  const togglePricePlanCollapse = () => {
    setIsPricePlanOpen(!isPricePlanOpen);
  };
  return (
    <div className="w-full flex flex-col gap-4 pl-4">
      {/* Jobs List */}
      <Link
        to={"/jobs/list"}
        className="w-full h-[35px] bg-[#F6F5F5] py-2 px-2.5 flex items-center gap-2.5 rounded-md"
      >
        <img
          alt="user"
          className="h-6 w-6 object-contain"
          src="/assets/list.png"
        />
        <span className="text-black text-sm font-[700]">Jobs List</span>
      </Link>

      {/* Jobs Category */}
      <Link
        to={"/jobs/category"}
        className="w-full h-[35px] bg-[#F6F5F5] py-2 px-2.5 flex items-center gap-2.5 rounded-md"
      >
        <img
          alt="user"
          className="h-6 w-6 object-contain"
          src="/assets/jobcategory.png"
        />
        <span className="text-black text-sm font-[700]">Jobs Category</span>
      </Link>

      {/* Job Role */}
      <Link
        to={"/jobs/role"}
        className="w-full h-[35px] bg-[#F6F5F5] py-2 px-2.5 flex items-center gap-2.5 rounded-md"
      >
        <img
          alt="user"
          className="h-6 w-6 object-contain"
          src="/assets/jobrole.png"
        />
        <span className="text-black text-sm font-[700]">Job Role</span>
      </Link>

      {/* Price Plan (Expandable) */}
      <div className="w-full flex flex-col gap-1">
        <div
          className="w-full h-[35px] bg-[#F6F5F5] py-2 px-2.5 flex items-center justify-between gap-2.5 rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={togglePricePlanCollapse}
        >
          <div className="flex items-center gap-2.5">
            <img
              alt="user"
              className="h-6 w-6 object-contain"
              src="/assets/priceplan.png"
            />
            <span className="text-black text-sm font-[700]">Price Plan</span>
          </div>
          {isPricePlanOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {/* Nested Price Plan Items */}
        {isPricePlanOpen && (
          <div className="w-full flex flex-col gap-1 pl-8">
            <Link
              to={"/jobs/priceplan/company"}
              className={`w-full h-[35px] ${
                path === "jobs" ? "bg-[#CDD7E3]" : "bg-[#F6F5F5]"
              } py-2 px-2.5 flex items-center gap-2.5 rounded-md`}
            >
              <FaBuilding
                size={20}
                color={path === "jobs" ? "#0D468A" : "#282526"}
              />
              <span
                className={`${
                  path === "jobs" ? "text-[#0D468A]" : "text-black"
                } text-sm font-[700]`}
              >
                Company
              </span>
            </Link>

            {/* Candidate */}
            <Link
              to={"/jobs/priceplan/candidate"}
              className="w-full h-[35px] bg-[#F6F5F5] py-2 px-2.5 flex items-center gap-2.5 rounded-md"
            >
              <IoPersonCircle size={25} color="#433E3F" />
              <span className="text-black text-sm font-[700]">Candidate</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
