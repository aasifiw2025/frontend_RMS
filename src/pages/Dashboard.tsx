import CompanyList from "../components/company/CompanyList";
import GridCards from "../components/dashboard/GridCards";
import Header from "../components/dashboard/Header";
import Stats from "../components/dashboard/Stats";
import Button from "../components/ui/Button";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 w-full pb-4">
      <Header />
      {/* grid cards */}
      <GridCards />
      {/* stats */}
      <Stats />
      {/* Recent Users */}
      <section
        aria-label="header"
        className="flex items-end justify-between w-full mt-4"
      >
        <div>
          <h1 className="text-black text-sm  font-[700] font-inter">
            Recently Users
          </h1>
          <hr className="h-[3px] border-0 w-[179px] bg-[#EE6C4D] my-1" />
        </div>
        <div className="flex items-center gap-4 ">
          <Button
            className="text-sm font-[700] h-[35px] bg-[var(--bg-primary)]"
            onClick={() => {}}
            title="Company"
          />
          <Button
            className="text-sm font-[700] h-[35px] bg-[var(--bg-primary)]"
            onClick={() => {}}
            title="Candidate"
          />
        </div>
      </section>
      <div className="flex flex-col gap-4">
        <CompanyList hashandLogo />
        <CompanyList hashandLogo />
        <CompanyList hashandLogo />
        <CompanyList hashandLogo />
        <CompanyList hashandLogo />
      </div>
    </div>
  );
};

export default Dashboard;
