import { FaBuilding } from "react-icons/fa";
import { IoPersonCircle } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const CompanyProfiles = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full flex flex-col gap-1 pl-4">
      {/* Company */}
      <Link
        to={"/profiles/company"}
        className={`w-full h-[53px] ${
          pathname === "/profiles/company" ||
          pathname === "/profiles/create-company"
            ? "bg-[#CDD7E3]"
            : "bg-[#F6F5F5]"
        } py-2 px-2.5 flex items-center gap-2.5 rounded-md`}
      >
        <FaBuilding
          size={20}
          color={
            pathname === "/profiles/company" ||
            pathname === "/profiles/create-company"
              ? "#0D468A"
              : "#282526"
          }
        />
        <span
          className={`${
            pathname === "/profiles/company" ||
            pathname === "/profiles/create-company"
              ? "text-[#0D468A]"
              : "text-black"
          } text-sm font-[700]`}
        >
          Company
        </span>
      </Link>

      {/* Candidate */}
      <Link
        to={"/profiles/candidate"}
        className={`w-full h-[53px] ${
          pathname === "/profiles/candidate" ||
          pathname === "/profiles/create-candidate"
            ? "bg-[#CDD7E3]"
            : "bg-[#F6F5F5]"
        } py-2 px-2.5 flex items-center gap-2.5 rounded-md`}
      >
        <IoPersonCircle
          size={20}
          color={
            pathname === "/profiles/candidate" ||
            pathname === "/profiles/create-candidate"
              ? "#0D468A"
              : "#282526"
          }
        />
        <span
          className={`${
            pathname === "/profiles/candidate" ||
            pathname === "/profiles/create-candidate"
              ? "text-[#0D468A]"
              : "text-black"
          } text-sm font-[700]`}
        >
          Candidate
        </span>
      </Link>

      {/* Orders */}
      <Link
        to={"profiles/orders"}
        className="w-full h-[53px] bg-[#F6F5F5] py-2 px-2.5 flex items-center gap-2.5 rounded-md"
      >
        <img
          alt="orders"
          className="h-6 w-6 object-contain"
          src="/assets/orders.png"
        />
        <span className="text-black text-sm font-[700]">Orders</span>
      </Link>

      {/* Request */}
      <Link
        to={"/profiles/request"}
        className="w-full h-[53px] bg-[#F6F5F5] py-2 px-2.5 flex items-center gap-2.5 rounded-md"
      >
        <img
          alt="request"
          className="h-6 w-6 object-contain"
          src="/assets/request.png"
        />
        <span className="text-black text-sm font-[700]">Request</span>
      </Link>

      {/* User Role */}
      <Link
        to={"/profiles/role"}
        className="w-full h-[53px] bg-[#F6F5F5] py-2 px-2.5 flex items-center gap-2.5 rounded-md"
      >
        <img
          alt="user"
          className="h-6 w-6 object-contain"
          src="/assets/user.png"
        />
        <span className="text-black text-sm font-[700]">User Role</span>
      </Link>
    </div>
  );
};

export default CompanyProfiles;
