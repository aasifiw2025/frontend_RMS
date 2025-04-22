import { Switch } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const CompanyList = ({ hashandLogo }: { hashandLogo: boolean }) => {
  const [checked, setChecked] = useState(false);
  const [emailChecked, setEmailChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleEmailCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailChecked(event.target.checked);
  };
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
      <div>
        {hashandLogo && (
          <img
            className="h-7.5 w-7.5 object-contain"
            src="/assets/setting-hand.png"
            alt="setting-hand"
          />
        )}
      </div>
      <div className="flex flex-col">
        <span className="inline text-[12px] font-[400] text-black font-inter">
          info@expertrecruitment.com
        </span>
        <span className="text-[12px] font-[700] text-black font-inter">
          +1-6789034567
        </span>
      </div>
      <div className="">
        <Switch
          sx={{
            "& .MuiSwitch-switchBase": {
              color: "#073873",
              "&.Mui-checked": {
                color: "#ffffff",
              },
            },
            "& .MuiSwitch-track": {
              backgroundColor: "#ffffff",
              border: "1px solid #ABA9A9",
              opacity: 1,
              borderRadius: "20px",
              transition: "all 0.3s ease",
              "&.Mui-checked": {
                backgroundColor: "#0D468A",
                border: "none",
              },
            },
          }}
          checked={checked}
          onChange={handleChange}
        />
        <span
          className={`text-sm  text-black ${
            checked ? "font-[700]" : "font-[400]"
          }`}
        >
          Activated
        </span>
      </div>
      <div className="">
        <Switch
          sx={{
            "& .MuiSwitch-switchBase": {
              color: "#073873",
              "&.Mui-checked": {
                color: "#ffffff",
              },
            },
            "& .MuiSwitch-track": {
              backgroundColor: "#ffffff",
              border: "1px solid #ABA9A9",
              opacity: 1,
              borderRadius: "20px",
              transition: "all 0.3s ease",
              "&.Mui-checked": {
                backgroundColor: "#0D468A",
                border: "none",
              },
            },
          }}
          checked={emailChecked}
          onChange={handleEmailCheck}
        />
        <span
          className={`text-sm  text-black ${
            emailChecked ? "font-[700]" : "font-[400]"
          }`}
        >
          Verified
        </span>
      </div>
      <div className="flex items-center gap-2">
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
      </div>
    </div>
  );
};

export default CompanyList;
