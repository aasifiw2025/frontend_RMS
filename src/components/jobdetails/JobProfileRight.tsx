import { FaRegEdit } from "react-icons/fa";
import SwitchComponent from "../ui/Switch";
import { MdDelete } from "react-icons/md";

const JobProfileRight = () => {
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
    <div className="flex-4/12 bg-[#F5F4F4] h-full p-4 space-y-4">
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

      <div>
        <h2 className="text-sm font-[400]">Job Description</h2>
      </div>

      {/* job descriptions */}
      <div className="w-full space-y-4 px-4">
        {descriptions?.map((item, id) => (
          <div key={id} className="flex items-center justify-between w-full">
            <span className="text-sm font-[400]">{item?.title}</span>
            <p className="text-sm font-[700]">{item?.value}</p>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-sm font-[400]">Job Responsibilities</h2>
      </div>
      {/* responsibilities */}
      <div className="w-full space-y-4 px-4">
        <p className="text-sm font-[400]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, voluptatum, voluptatem, quae quia quos quidem quas
          voluptatibus voluptatibus voluptatibus voluptatibus voluptatibus
        </p>
      </div>

      {/* switches */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <SwitchComponent />
          <span className="text-xs font-[700]">Featured</span>
        </div>
        <div className="flex items-center gap-2">
          <SwitchComponent />
          <span className="text-xs font-[700]">Remote</span>
        </div>
        <div className="flex items-center gap-2">
          <SwitchComponent />
          <span className="text-xs font-[700]">Highlight</span>
        </div>
      </div>

      {/* Job Status */}
      <div className="flex items-center justify-between w-full">
        <span className="text-sm font-[400]">Job Status</span>
        <div className="flex items-center gap-2">
          <SwitchComponent />
          <span className="text-xs font-[700]">Published</span>
        </div>
      </div>

      {/* action buttons */}

      <div className="flex items-center justify-end w-full gap-2">
        <button className="text-sm font-[700] text-black font-inter h-[45px] w-[50px] py-2 px-2.5 border-[0.5px] border-[#CDD7E3] rounded-lg shadow-md flex justify-center items-center">
          <FaRegEdit />
        </button>
        <button className="text-sm font-[700] text-black font-inter h-[45px] w-[50px] py-2 px-2.5 border-[0.5px] border-[#CDD7E3] rounded-lg shadow-md flex justify-center items-center">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default JobProfileRight;
