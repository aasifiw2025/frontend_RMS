import Header from "../../components/jobs/Header";
import JobCard from "../../components/jobs/JobCard";
import SearchBox from "../../components/jobs/SearchBox";

const Jobs = () => {
  return (
    <main id="jobs-list" className="w-full">
      {/* header */}
      <Header />
      {/* job search form */}
      <SearchBox />
      {/* job data table */}
      <div>
        <div className="flex flex-row justify-start px-5 items-center mt-4">
          <p className="text-sm font-[300] font-inter">Job</p>
          <p className="text-sm font-[300] font-inter ml-75">Category/Role</p>
          <p className="text-sm font-[300] font-inter ml-20">Salary</p>
          <p className="text-sm font-[300] font-inter ml-28">Deadline</p>
          <p className="text-sm font-[300] font-inter ml-30">Status</p>
        </div>
        <div className="pb-4 flex flex-col gap-4 mt-4">
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </main>
  );
};

export default Jobs;
