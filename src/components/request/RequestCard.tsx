import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const RequestCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full   flex justify-between  items-center  bg-[#F5F4F4] border border-[#F5F4F4] px-4.5 py-2 rounded-lg rounded-l-[15px] rounded-r-[10px]">
      <div className="flex items-center gap-2">
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
      </div>
      <div className="flex flex-col">
        <span className="inline text-[12px] font-[400] text-black font-inter">
          info@expertrecruitment.com
        </span>
        <span className="text-[12px] font-[700] text-black font-inter">
          +1-6789034567
        </span>
      </div>

      {!isOpen && (
        <button
          onClick={() => setIsOpen((pre) => !pre)}
          className="border-[0.5px] flex items-center gap-2 text-sm font-[400] text-[#6A6A6A] border-[#BBBBBB] rounded-md bg-white h-[40px] p-2"
        >
          Accept/Reject
          <FaChevronDown color="#6A6A6A" />
        </button>
      )}
      {isOpen && (
        <div className="flex flex-col gap-2 w-[180px] px-4 border-2 border-[#CDD7E3] rounded-md py-2 bg-white">
          <button
            onClick={() => setIsOpen((pre) => !pre)}
            className="border-[0.5px] w-full  text-sm font-[400] text-[#6A6A6A] border-[#BBBBBB] rounded-md bg-white h-[40px] p-2"
          >
            Accept
          </button>
          <button
            onClick={() => setIsOpen((pre) => !pre)}
            className="border-[0.5px] w-full  text-sm font-[400] text-[#6A6A6A] border-[#BBBBBB] rounded-md bg-white h-[40px] p-2"
          >
            Reject
          </button>
        </div>
      )}
      <div className="flex items-center gap-2">
        <button className="text-sm font-[700] text-black font-inter h-[45px] w-[120px] py-2 px-2.5 border-[0.5px] border-[#CDD7E3] rounded-lg shadow-md">
          View Details
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
