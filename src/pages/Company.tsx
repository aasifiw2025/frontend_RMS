import CompanyList from "../components/company/CompanyList";
import Header from "../components/company/Header";
import SearchBox from "../components/company/SearchBox";

const Company = () => {
  return (
    <main className="w-full">
      <Header />
      <SearchBox />
      <div>
        <div className="flex flex-row justify-start px-5 items-center mt-4">
          <p className="text-sm font-[300] font-inter">Company</p>
          <p className="text-sm font-[300] font-inter ml-72">Contact</p>
          <p className="text-sm font-[300] font-inter ml-50">Account Status</p>
          <p className="text-sm font-[300] font-inter ml-20">
            Email Verification
          </p>
        </div>
        <div className="pb-4 flex flex-col gap-4 mt-4">
          <CompanyList hashandLogo={true} />
          <CompanyList hashandLogo={true} />
          <CompanyList hashandLogo={false} />
          <CompanyList hashandLogo={false} />
          <CompanyList hashandLogo={true} />
          <CompanyList hashandLogo={false} />
          <CompanyList hashandLogo={true} />
        </div>
      </div>
    </main>
  );
};

export default Company;
