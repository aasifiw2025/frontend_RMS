import CandidateCard from "../../components/candidate/CandidateCard";
import Header from "../../components/candidate/Header";
import SearchBox from "../../components/candidate/SearchBox";

const Candidate = () => {
  return (
    <div className="w-full">
      <Header />
      <SearchBox />
      <div>
        <div className="flex flex-row justify-start px-5 items-center mt-4">
          <p className="text-sm font-[300] font-inter">Candidate</p>
          <p className="text-sm font-[300] font-inter ml-48">Contact</p>
          <p className="text-sm font-[300] font-inter ml-30">Account Status</p>
          <p className="text-sm font-[300] font-inter ml-24">
            Email Verification
          </p>
          <p className="text-sm font-[300] font-inter ml-10">Joined Date</p>
        </div>
        <div className="pb-4 flex flex-col gap-4 mt-4">
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
          <CandidateCard />
        </div>
      </div>
    </div>
  );
};

export default Candidate;
