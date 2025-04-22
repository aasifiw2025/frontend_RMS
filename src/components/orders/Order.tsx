import { FaDownload, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className="w-full  h-[72px] flex justify-between  items-center  bg-[#F5F4F4] border border-[#F5F4F4] px-4.5 py-2 rounded-lg rounded-l-[15px] rounded-r-[10px]">
      <div className="flex flex-col">
        <span className="inline text-[12px] font-[400] text-black font-inter">
          #iDab2422uk10
        </span>
        <p className="text-[12px] font-[700] text-black font-inter">
          transaction: <span className="font-[700]">tr_64729274ac42</span>
        </p>
      </div>

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
          <span className="inline text-[12px] font-[400] text-black font-inter">
            info@expertrecruitment.com
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="inline text-[12px] font-[700] text-black font-inter">
          $60
        </span>
        <span className="text-[12px] font-[700] text-black font-inter">
          Startup & SME
        </span>
      </div>
      <div>
        <p className="text-sm font-[400]">Razorpay</p>
      </div>
      <div className="flex items-start gap-2">
        <div className="h-2 w-2 bg-[#7EFFB1] rounded-full mt-2" />
        <div>
          <p className="text-sm font-[700]">Paid</p>
          <span className="text-[10px] font-[300]">21:15, 25th June, 2024</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="text-sm font-[700] text-black font-inter h-[45px] w-[50px] py-2 px-2.5 border-[0.5px] border-[#CDD7E3] rounded-lg shadow-md flex justify-center items-center">
          <Link to={"/profiles/orders/1"}>
            <FaEye size={18} />
          </Link>
        </button>

        <button className="text-sm font-[700] text-black font-inter h-[45px] w-[50px] py-2 px-2.5 border-[0.5px] border-[#CDD7E3] rounded-lg shadow-md flex justify-center items-center">
          <FaDownload size={18} />
        </button>
      </div>
    </div>
  );
};

export default Order;
