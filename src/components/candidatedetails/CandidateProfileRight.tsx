import { CiMail } from "react-icons/ci";
import { FaPhoneAlt, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import SwitchComponent from "../ui/Switch";

const CandidateProfileRight = () => {
  return (
    <div className="flex-4/12 bg-[#F5F4F4] h-full p-4 rounded-md">
      {/* profile */}
      <div className="flex items-center gap-4">
        <img
          src="/assets/candidate-profile.png"
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
      {/* candidate contact address */}
      <div className="py-4 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <CiMail />
          <a href="mailto:namesurname@gmail.com" className="text-xs font-[400]">
            namesurname@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <a href="tel:+91123456789" className="text-xs font-[400]">
            <span className="font-[700]">+91 123456789</span>
          </a>
        </div>
      </div>
      {/* candidate Location Details */}
      <p className="text-sm font-[400] pt-4 pb-2">Candidate Location Details</p>
      <div className="space-y-4 pl-2">
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-[400]">City</p>
          <p className="text-sm font-[700]">Surat</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-[400]">State</p>
          <p className="text-sm font-[700]">Gujurat</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-[400]">Country</p>
          <p className="text-sm font-[700]">India</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-[400]">Pincode</p>
          <p className="text-sm font-[700]">123456</p>
        </div>
      </div>
      {/* candidate personal details */}
      <div className="w-full space-y-6 mt-4">
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-[400]">Profoession</p>
          <p className="text-sm font-[700]">Engineer</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-[400]">Job Role</p>
          <p className="text-sm font-[700]">Manager</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-[400]">Experience</p>
          <p className="text-sm font-[700]">5+ Years</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-[400]">Gender</p>
          <p className="text-sm font-[700]">Male</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-[400]">DOB</p>
          <p className="text-sm font-[700]">10 October 2002</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-[400]">Marital Status</p>
          <p className="text-sm font-[700]">Single</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-[400]">Resume</p>
          <p className="text-sm font-[700]">resume.pdf</p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-[400]">Email Verification</p>
          <div className="flex items-center gap-2">
            <SwitchComponent />
            <p className="text-sm font-[700]">Verified</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <img
              className="h-7.5 w-7.5 object-contain"
              src="/assets/setting-hand.png"
              alt="setting-hand"
            />
            <p className="text-sm font-[400]">Service Provider</p>
          </div>
          <div className="flex items-center gap-2">
            <SwitchComponent />
            <p className="text-sm font-[700]">Yes</p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-[400]">Account Status</p>
          <div className="flex items-center gap-2">
            <SwitchComponent />
            <p className="text-sm font-[700]">Active</p>
          </div>
        </div>
        <div className="flex items-center justify-end w-full gap-2">
          <button className="text-sm font-[700] text-black font-inter h-[45px] w-[50px] py-2 px-2.5 border-[0.5px] border-[#CDD7E3] rounded-lg shadow-md flex justify-center items-center">
            <FaRegEdit />
          </button>
          <button className="text-sm font-[700] text-black font-inter h-[45px] w-[50px] py-2 px-2.5 border-[0.5px] border-[#CDD7E3] rounded-lg shadow-md flex justify-center items-center">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfileRight;
