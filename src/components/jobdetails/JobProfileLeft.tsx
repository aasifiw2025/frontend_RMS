import Button from "../ui/Button";

const JobProfileLeft = () => {
  const descriptions = [
    {
      id: 1,
      title: "Experience",
      value: "+3 Years",
    },
    {
      id: 2,
      title: "Job Role",
      value: "Frontend Developer",
    },
    {
      id: 3,
      title: "Education",
      value: "B. Tech",
    },
    {
      id: 4,
      title: "Tags",
      value: "123456",
    },
    {
      id: 5,
      title: "Benefits",
      value: "123456",
    },
    {
      id: 6,
      title: "Job type",
      value: "Internship",
    },
    {
      id: 7,
      title: "Job Category",
      value: "HR Tech",
    },
  ];
  return (
    <div className="flex-8/12 space-y-4 h-full">
      {/* header banner */}
      <div className="relative w-full">
        <img
          className="w-full h-[180px]"
          src="/assets/company-banner.png"
          alt="company banner"
        />
        <img
          className="h-[175px] w-[175px] object-contain absolute left-10 top-25"
          src="/assets/company-logo.png"
          alt=""
        />
      </div>
      {/* header job details */}
      <div className="flex items-center justify-center gap-16 ml-16">
        <div>
          <h2 className="text-xl font-[500]">Karma Mark Start llp</h2>
          <p className="text-sm font-[400]">Business Consultancy</p>
          <div className="flex items-center gap-2 mt-2">
            <p className="text-[#2671CB] text-[10px] font-[400] border border-[#2671CB] rounded-md px-2 py-1">
              Website
            </p>
            <p className="text-[#2671CB] text-[10px] font-[400] border border-[#2671CB] rounded-md px-2 py-1">
              Linkedin
            </p>
            <p className="text-[#2671CB] text-[10px] font-[400] border border-[#2671CB] rounded-md px-2 py-1">
              Instagram
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <img
              className="h-6 w-6 object-contain"
              src="/assets/location.png"
              alt=""
            />
            <p className="text-sm font-[400]">Gujrat, India</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="h-6 w-6 object-contain"
              src="/assets/candidate2.png"
              alt=""
            />
            <p className="text-sm font-[400]">10 Members</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              className="h-6 w-6 object-contain"
              src="/assets/cake.png"
              alt=""
            />
            <p className="text-sm font-[400]">10 Oct, 2015</p>
          </div>
        </div>
      </div>
      <div className="h-[3px]  bg-[#EE6C4D] w-full" />
      {/* job  details card */}
      <div className="py-4 mt-8 border-1 border-[#CBCBCB] w-full bg-[#F5F4F4] rounded-md grid grid-cols-1 md:grid-cols-3 justify-items-center">
        {/* profile */}
        <div className="flex items-center gap-4">
          <img
            src="/assets/logo2.png"
            className="w-[70px]  h-[70px] object-contain"
            alt="logo 2"
          />
          <div className="space-y-2">
            <h2 className="text-sm font-[700]">Karma Mark Start LLP</h2>
            <div className="flex items-center gap-2">
              <img
                className="h-5 w-5 object-contain"
                src="/assets/location.png"
                alt="lcoation"
              />
              <p className="text-xs font-[400]">Gujrat, India</p>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="flex flex-col items-start justify-center gap-2">
          <h2 className="text-xs font-[700]">Internship-Frontend Developer</h2>
          <p className="text-xs font-[400]">Karma Mark Start llp - Remote</p>
          <p className="text-xs font-[400]">HR Tech</p>
        </div>
        {/* responsibilities */}
        <div className="flex flex-col gap-2 items-start justify-center">
          <h2 className="text-xs font-[700]">Responsibilities</h2>
          <span className="text-xs font-[400]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
            labore officia! Suscipit cupiditate veritatis provident!
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-sm font-[700]">Job Description</h2>
      </div>
      {/* Job description Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        <div className="w-full space-y-4 px-4">
          {descriptions?.map((item, id) => (
            <div key={id} className="flex items-center justify-between w-full">
              <span className="text-sm font-[400]">{item?.title}</span>
              <p className="text-sm font-[700]">{item?.value}</p>
            </div>
          ))}
        </div>
        <div className="w-full  space-y-4">
          <div className="w-full flex items-center gap-4 px-4">
            <Button
              textClassName="text-sm font-[700] text-black"
              onClick={() => {}}
              className="border-[0.5px] border-[#CDD7E3] h-[45px] w-[130px] shadow-md"
              title="Featured"
            />
            <Button
              textClassName="text-sm font-[700] text-black"
              onClick={() => {}}
              className="border-[0.5px] border-[#CDD7E3] h-[45px] w-[130px] shadow-md"
              title="Remote"
            />
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-[400]">Salary Range</span>
            <p className="text-sm font-[700]">100-300 USD</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-[400]">Deadline</span>
            <p className="text-sm font-[700]">20 Feb, 2024</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-[400]">Vacancies</span>
            <p className="text-sm font-[700]">2 positions</p>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-sm font-[400]">Recieve Application</span>
            <p className="text-sm font-[700]">on our platform</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobProfileLeft;
