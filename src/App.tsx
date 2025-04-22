import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProfilesLayout from "./layouts/Profiles";
import Company from "./pages/Company";
import CreateCompany from "./pages/CreateCompany";
import CompanyPriceplan from "./pages/CompanyPriceplan";
import NotFound from "./pages/NotFound";
import JobsLayout from "./layouts/Jobs";
import CompanyPlan from "./pages/CompanyPlan";
import CandidatePlan from "./pages/CandidatePlan";
import RootLayout from "./layouts/RootLayout";
import Candidate from "./pages/Candidate";
import Role from "./pages/Role";
import Request from "./pages/Request";
import Orders from "./pages/Orders";
import JobList from "./pages/JobList";
import JobCategory from "./pages/JobCategory";
import JobRole from "./pages/JobRole";
import CreateCandidate from "./pages/CreateCandidate";
import OrderDetails from "./pages/OrderDetails";
import CompanyDetails from "./pages/CompanyDetails";
import CandidateDetails from "./pages/CandidateDetails";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {/* Dashboard Section */}
        <Route index element={<Dashboard />} />

        {/* Profiles Section */}
        <Route path="profiles" element={<ProfilesLayout />}>
          <Route path="company" element={<Company />} />
          <Route path="candidate" element={<Candidate />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:orderId" element={<OrderDetails />} />
          <Route path="request" element={<Request />} />
          <Route path="role" element={<Role />} />
          <Route path="create-company" element={<CreateCompany />} />
          <Route path="create-candidate" element={<CreateCandidate />} />
          <Route path="companypriceplan" element={<CompanyPriceplan />} />
          <Route path="company/:companyId" element={<CompanyDetails />} />
          <Route path="candidate/:candidateId" element={<CandidateDetails />} />
        </Route>

        {/* Jobs Section */}
        <Route path="jobs" element={<JobsLayout />}>
          <Route path="list" element={<JobList />} />
          <Route path="category" element={<JobCategory />} />
          <Route path="role" element={<JobRole />} />
          <Route path="priceplan">
            <Route path="company" element={<CompanyPlan />} />
            <Route path="candidate" element={<CandidatePlan />} />
          </Route>
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
