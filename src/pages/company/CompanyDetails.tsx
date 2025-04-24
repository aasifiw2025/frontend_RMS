import Header from "../../components/companydetails/Header";
import CompanyProfileRight from "../../components/companydetails/CompanyProfileLeft";
import CompanyProfileLeft from "../../components/companydetails/CompanyProfileRight";

const CompanyDetails = () => {
  return (
    <main className="w-full py-4" id="company-details">
      {/* header */}
      <Header />
      {/* company profile grid */}
      <div className="mt-4 flex flex-col md:flex-row md:items-center gap-8 w-full lg:h-screen">
        {/* right */}
        <CompanyProfileRight />
        {/* left */}
        <CompanyProfileLeft />
      </div>
    </main>
  );
};

export default CompanyDetails;
