import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import CompanyProfiles from "./Company";
import Jobs from "./Jobs";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const { pathname } = useLocation();

  // console.log(pathname);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const [isJobsOpen, setIsJobsOpen] = useState(false);

  const toggleJobsCollapse = () => {
    setIsJobsOpen(!isJobsOpen);
  };
  return (
    <aside
      id="sidebar"
      className="flex flex-col items-center w-[253px] h-screen overflow-y-auto"
    >
      <img
        className="w-full h-[73px] object-contain border-[3px] border-[#0D468A] rounded-[5px]"
        src="/assets/idab.png"
        alt="logo"
      />
      <Link
        to={"/"}
        className={`h-[53px] w-full ${
          pathname === "/" ? "bg-[#CDD7E3]" : "bg-[#F6F5F5]"
        }  py-2 px-2.5 flex items-center gap-2.5 rounded-md mt-4`}
      >
        <img
          src="/assets/home.png"
          className="w-[18px] h-[18px] object-contain"
          alt="dashboard"
        />
        <span className="text-black text-sm font-[700]">Dashboard</span>
      </Link>
      <div className="w-full bg-[#F6F5F5] py-2 px-2.5 flex flex-col items-start gap-0 rounded-md mt-4">
        {/* Parent Section  Idab Profiles */}
        <div
          className="w-full p-2 flex items-center justify-between rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={toggleCollapse}
        >
          <span className="text-[#433E3F] text-sm font-bold font-inter">
            Idab Profiles
          </span>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {/* Collapsible Section */}
        {isOpen && <CompanyProfiles />}

        {/* Parent Section - Jobs */}
        <div
          className="w-full p-2 flex items-center justify-between rounded-md cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={toggleJobsCollapse}
        >
          <span className="text-[#433E3F] text-sm font-bold font-inter">
            Jobs
          </span>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>

        {/* Collapsible Section - Jobs */}
        {isJobsOpen && <Jobs />}

        {/*  Attributes Section*/}
        <div className="w-full p-2 flex items-center justify-between rounded-md cursor-pointer hover:bg-gray-200 transition-colors">
          <span className="text-[#433E3F] text-sm font-bold font-inter">
            Attributes
          </span>
          <FaChevronDown />
        </div>
        {/*  Attributes Section*/}
        <div className="w-full p-2 flex items-center justify-between rounded-md cursor-pointer hover:bg-gray-200 transition-colors">
          <span className="text-[#433E3F] text-sm font-bold font-inter">
            Settings
          </span>
          <FaChevronDown />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
