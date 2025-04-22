import Header from "../components/request/Header";
import RequestCard from "../components/request/RequestCard";

const Request = () => {
  return (
    <main className="w-full" id="requestlist">
      {/* header */}
      <Header />
      {/* heading */}
      <div className="mt-4 p-4">
        <h2 className="text-lg font-[700]">Become a Service Provider</h2>
      </div>
      {/* Request List Data */}
      <div>
        <div className="flex flex-row  px-5 items-center mt-4">
          <p className="text-sm font-[300] font-inter">Company</p>
          <p className="text-sm font-[300] font-inter ml-80 ">Contact</p>
          <p className="text-sm font-[300] font-inter ml-75">
            Accept/Reject Status
          </p>
        </div>
        <div className="pb-4 flex flex-col gap-4 mt-4">
          <RequestCard />
          <RequestCard />
          <RequestCard />
        </div>
      </div>
    </main>
  );
};

export default Request;
