import { FaChevronDown, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

const UserCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="w-full bg-[#F5F4F4] border-1 border-[#CBCBCB] rounded-md p-2 flex items-center justify-between">
      <div>
        <p className="text-sm font-[400]">Sales and Marketing</p>
      </div>
      <div>
        <p className="text-sm font-[400]">Marketing@idabtech.com</p>
      </div>
      {!isOpen && (
        <button
          onClick={() => setIsOpen((pre) => !pre)}
          className="border-[0.5px] flex items-center gap-2 text-sm font-[400] text-[#6A6A6A] border-[#BBBBBB] rounded-md bg-white h-[40px] p-2"
        >
          Choose Role
          <FaChevronDown color="#6A6A6A" />
        </button>
      )}
      {isOpen && (
        <div className="flex flex-col gap-2 w-[180px] px-4 border-2 border-[#CDD7E3] rounded-md py-2 bg-white">
          <button
            onClick={() => setIsOpen((pre) => !pre)}
            className="border-[0.5px] w-full  text-sm font-[400] text-[#6A6A6A] border-[#BBBBBB] rounded-md bg-white h-[40px] p-2"
          >
            Super Admin
          </button>
          <button
            onClick={() => setIsOpen((pre) => !pre)}
            className="border-[0.5px] w-full  text-sm font-[400] text-[#6A6A6A] border-[#BBBBBB] rounded-md bg-white h-[40px] p-2"
          >
            Company
          </button>
          <button
            onClick={() => setIsOpen((pre) => !pre)}
            className="border-[0.5px] w-full  text-sm font-[400] text-[#6A6A6A] border-[#BBBBBB] rounded-md bg-white h-[40px] p-2"
          >
            Applicant
          </button>
        </div>
      )}
      <div className="flex items-center gap-2">
        <button className="text-sm font-[700] text-black font-inter h-[45px] w-[50px] py-2 px-2.5 border-[0.5px] border-[#CDD7E3] rounded-lg shadow-md flex justify-center items-center">
          <FaEye />
        </button>

        <button className="text-sm font-[700] text-black font-inter h-[45px] w-[50px] py-2 px-2.5 border-[0.5px] border-[#CDD7E3] rounded-lg shadow-md flex justify-center items-center">
          <MdDelete />
        </button>
      </div>
    </section>
  );
};

export default UserCard;
