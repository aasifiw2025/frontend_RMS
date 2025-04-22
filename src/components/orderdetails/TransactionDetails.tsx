import { FaDownload } from "react-icons/fa";

const TransactionDetails = () => {
  return (
    <section
      id="transaction-details"
      className="h-[160px] w-full bg-[#F6F5F5] flex flex-col items-center justify-center gap-4 mt-4 rounded-sm p-4"
    >
      <div className="border-b-3 border-b-[#D9D9D9] pb-4 w-full">
        <h2 className="text-lg font-[700]">Transaction Details</h2>
      </div>

      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="inline text-[12px] font-[400] text-black font-inter">
              #iDab2422uk10
            </span>
            <p className="text-[12px] font-[700] text-black font-inter">
              transaction: <span className="font-[700]">tr_64729274ac42</span>
            </p>
          </div>
          <div className="flex items-start gap-2">
            <div className="h-2 w-2 bg-[#7EFFB1] rounded-full mt-2" />
            <div>
              <p className="text-sm font-[700]">Paid</p>
              <span className="text-[10px] font-[300]">
                21:15, 25th June, 2024
              </span>
            </div>
          </div>
        </div>
        <div>
          <button className="text-sm font-[700] text-black font-inter h-[45px]  py-2 px-2.5 border-[0.5px] border-[#CDD7E3] rounded-lg shadow-md flex justify-center items-center">
            <FaDownload size={18} />
            <span className="ml-4 text-sm font-[700]">Download Invoice</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransactionDetails;
