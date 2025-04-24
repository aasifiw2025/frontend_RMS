import Header from "../../components/candidate/Header";
import SearchBox from "../../components/candidate/SearchBox";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";

import CandidateCard from "../../components/candidate/CandidateCard";

const Candidate = () => {
  return (
    <div className="w-full">
      <Header />
      <SearchBox />
      {/* <div className="overflow-x-auto w-full">
        <div className="hidden lg:flex justify-start px-5 mt-4 text-sm font-light text-gray-600">
          <p className="text-sm font-[400]">Candidate</p>
          <p className="text-sm font-[400]">Contact</p>
          <p className="text-sm font-[400]">Account Status</p>
          <p className="text-sm font-[400]">Email Verification</p>
          <p className="text-sm font-[400]">Joined Date</p>
        </div>

        <div className="flex lg:hidden py-4">
          <p className="text-sm font-[700]">Candidate List</p>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
        </div>
      </div> */}
      <Table className="mt-8">
        <TableHeader>
          <TableRow className="border-none">
            <TableHead className="w-[200px]">Candidate</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Account Status</TableHead>
            <TableHead className="">Email verification</TableHead>
            <TableHead className="">Joined Date</TableHead>
            <TableHead className=""></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="">
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
        </TableBody>
      </Table>
    </div>
  );
};

export default Candidate;
