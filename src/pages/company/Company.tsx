import { Link } from "react-router-dom";
import Header from "../../components/company/Header";
import SearchBox from "../../components/company/SearchBox";
import SwitchComponent from "../../components/ui/Switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { FaRegEdit, FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Company = () => {
  return (
    <main className="w-full">
      <Header />
      <SearchBox />
      <Table className="mt-8 ">
        <TableHeader>
          <TableRow className="border-none">
            <TableHead className="">Company</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Account Status</TableHead>
            <TableHead className="">Email Verfication</TableHead>
            <TableHead className=""></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            {/* company logo and name */}
            <TableCell className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap">
              <div className="flex items-center gap-2 lg:gap-4 ">
                <img
                  className="lg:w-[49px] lg:h-[46px] h-[30px] w-[30px] object-contain"
                  src="/assets/company.png"
                  alt="company-logo"
                />
                <div>
                  <h2 className="lg:text-[12px] text-[10px] font-[700] text-black font-inter break-words">
                    Expert Recruitment- UAE
                  </h2>
                  <div className="flex items-center gap-2">
                    <img
                      className="lg:h-5 lg:w-5 h-3 w-3 object-contain inline"
                      src="/assets/location.png"
                      alt="company-logo"
                    />
                    <span className="text-[10px] lg:text-[12px] font-[400] text-black font-inter">
                      Location, Country
                    </span>
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex flex-col gap-1 lg:gap-2">
                <span className="lg:text-[12px] text-[10px] font-[400] text-black">
                  info@recruitment.com
                </span>
                <span className="lg:text-[12px] text-[10px] font-[700] text-black ">
                  +1-6789034567
                </span>
              </div>
            </TableCell>
            <TableCell className="">
              <div className="flex items-center gap-2">
                <SwitchComponent />
                <span className={`lg:text-[12px] text-[10px]  text-black`}>
                  Activated
                </span>
              </div>
            </TableCell>
            <TableCell className="">
              <div className="flex items-center gap-2">
                <SwitchComponent />
                <span className={`lg:text-[12px] text-[10px]  text-black`}>
                  Verified
                </span>
              </div>
            </TableCell>
            <TableCell className="">
              <div className="flex gap-2 min-w-[130px]">
                <Link
                  to="/profiles/company/1"
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
        </TableBody>
      </Table>
    </main>
  );
};

export default Company;
