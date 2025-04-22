const BillDetails = () => {
  return (
    <section
      id="bill"
      className="w-full bg-[#F6F5F5] flex flex-col gap-4 rounded-sm p-4 h-auto"
    >
      <div className="border-b-3 border-b-[#D9D9D9] pb-4 w-full">
        <h2 className="text-lg font-[700]">Billing Details</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm font-[300]">Billing Address:</p>
          <span className="text-sm font-[300]">Expert Recruitment-UAE</span>
        </div>
        <div>
          <p className="text-sm font-[300]">Payment Method:</p>
          <span className="text-sm font-[300]">Razorpay</span>
        </div>
        <div>
          <p className="text-sm font-[300]">Email:</p>
          <span className="text-sm font-[300]">
            info@expertrecruitement.com
          </span>
        </div>
      </div>
    </section>
  );
};

export default BillDetails;
