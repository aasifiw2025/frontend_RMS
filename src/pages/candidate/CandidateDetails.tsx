import CandidateProfileLeft from "../../components/candidatedetails/CandidateProfileLeft";
import CandidateProfileRight from "../../components/candidatedetails/CandidateProfileRight";
import Header from "../../components/candidatedetails/Header";

const CandidateDetails = () => {
  return (
    <main className="w-full py-4" id="candidate-details">
      {/* header */}
      <Header />
      {/* grid */}
      <div className="mt-4 flex items-start gap-8 w-full min-h-screen">
        {/* left */}
        <CandidateProfileLeft />
        {/* right */}
        <CandidateProfileRight />
      </div>
    </main>
  );
};

export default CandidateDetails;
