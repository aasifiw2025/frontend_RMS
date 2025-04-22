const PlanDetails = () => {
  return (
    <section
      id="plan"
      className="w-full bg-[#F6F5F5] flex flex-col gap-4 rounded-sm p-4"
    >
      <div className="border-b-3 border-b-[#D9D9D9] pb-4 w-full">
        <h2 className="text-lg font-[700]">Plan Details</h2>
      </div>
      <div className="space-y-4">
        <p className="text-sm font-[300]">Name:</p>
        <p className="text-sm font-[300]">Description:</p>
        <p className="text-sm font-[300]">Price:</p>
      </div>
      <div className="border-b-3 border-b-[#D9D9D9] pb-4 w-full">
        <h2 className="text-lg font-[700]">Plan Benefits</h2>
      </div>
      <div className="space-y-4">
        <p className="text-sm font-[300]">Job Posts Limit:</p>
        <p className="text-sm font-[300]">Featured Job Posts Limit:</p>
        <p className="text-sm font-[300]">Highlighted Job Posts Limit:</p>
        <p className="text-sm font-[300]">Candidate CV preview Limit:</p>
      </div>
    </section>
  );
};

export default PlanDetails;
