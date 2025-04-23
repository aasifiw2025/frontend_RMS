import Header from "../../components/jobdetails/Header";
import JobProfileLeft from "../../components/jobdetails/JobProfileLeft";
import JobProfileRight from "../../components/jobdetails/JobProfileRight";

const JobDetails = () => {
  return (
    <main id="job-details" className="w-full pb-4">
      {/* Header */}
      <Header />
      {/* job details profile grid */}
      {/* company profile grid */}
      <div className="mt-4 flex items-center gap-8 w-full min-h-screen">
        {/* left */}
        <JobProfileLeft />
        {/* right */}
        <JobProfileRight />
      </div>
    </main>
  );
};

export default JobDetails;
