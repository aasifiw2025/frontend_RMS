import { CiImageOn } from "react-icons/ci";
import { IoIosCall, IoIosGlobe } from "react-icons/io";

const CandidateProfileLeft = () => {
  return (
    <div className="flex-8/12 w-full space-y-4 h-full">
      <div className=" relative">
        <div className="w-full h-[200px] bg-[#F3F3F3] rounded-md flex justify-center items-center">
          <CiImageOn color="#fff" size={25} />
        </div>
        <div className="w-full bg-white rounded-md h-[100px] shadow-md border border-[#98C1D9] ">
          <div className="flex items-center gap-32 justify-end mr-16 mt-4">
            <div>
              <h2 className="text-xl font-[500]">Name Surname</h2>
              <p className="text-sm font-[400]">Destination/Degree</p>
              <p className="text-sm font-[400]">organization/institute</p>
            </div>

            <div className="flex flex-col items-center justify-center  space-y-4 ">
              <img
                className="w-[40px] h-[40px] object-contain"
                src="/assets/video.png"
                alt=""
              />
              <p className="text-sm font-[400]">Video Resume</p>
            </div>
          </div>
        </div>
        <img
          className="h-[220px] w-[220px] rounded-full absolute top-[70px] translate-x-[50px] "
          src="/assets/candidate-profile.png"
          alt=""
        />
      </div>
      <div className="mt-8  py-8 border-1 shadow-md border-[#D9D9D9] rounded-md  px-16 grid grid-cols-2 justify-items-end">
        <div className="space-y-8 ">
          <div>
            <h2 className="text-sm font-[700]">Bio</h2>
            <span className="text-sm font-[400]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              deleniti sint sed perferendis repudiandae adipisci accusantium
              tempora rerum consequuntur magni neque sequi, nisi unde.
            </span>
          </div>
          <div className="h-full space-y-2">
            <div className="flex items-center gap-2">
              <IoIosCall size={20} />
              <a href="tel:+91-123056789" className="text-sm font-[400]">
                +91-123056789
              </a>
            </div>
            <div className="flex items-center gap-2">
              <IoIosGlobe size={20} />
              <a
                href="https://www.companyname.com"
                className="text-sm font-[400]"
              >
                www.companyname.com
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-full flex items-end gap-8">
            <div className="flex items-center gap-2">
              <img
                src="/assets/location.png"
                className="h-6 w-6 object-contain"
                alt=""
              />
              <p className="text-sm font-[400]">India</p>
            </div>
            <p className="text-[#2671CB] text-[10px] font-[400] border border-[#2671CB] rounded-md px-2 py-1">
              portfolio
            </p>
          </div>
          <div className="w-full flex items-end gap-8">
            <div className="flex items-center gap-2">
              <img
                src="/assets/candidate2.png"
                className="h-6 w-6 object-contain"
                alt=""
              />
              <p className="text-sm font-[400]">Male</p>
            </div>
            <p className="text-[#2671CB] text-[10px] font-[400] border border-[#2671CB] rounded-md px-2 py-1">
              Linkedin
            </p>
          </div>
          <div className="w-full flex items-end gap-8">
            <div className="flex items-center gap-2">
              <img
                src="/assets/cake.png"
                className="h-6 w-6 object-contain"
                alt=""
              />
              <p className="text-sm font-[400]">25</p>
            </div>
            <p className="text-[#2671CB] text-[10px] font-[400] border border-[#2671CB] rounded-md px-2 py-1">
              Instagram
            </p>
          </div>
        </div>
      </div>
      <div className="h-[3px] bg-[#EE6C4D] w-full my-8" />
      <div className=" w-1/2 space-y-4 px-16 pb-8">
        <div>
          <h2 className="text-sm font-[700]">Skills</h2>
          <span className="text-sm font-[400]">
            Skill 1, Skill 2, Technical Skill 1, Technical Skill 2, Software x,
            Software y, Software z, Soft Skill 1, Soft Skill 2, Soft Skill 3
          </span>
        </div>
        <div>
          <h2 className="text-sm font-[700]">Languages</h2>
          <p className="text-sm text-black font-[400]">
            Language 1, Language 2, Language 3
          </p>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfileLeft;
