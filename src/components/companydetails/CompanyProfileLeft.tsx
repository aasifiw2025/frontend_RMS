import { IoIosCall, IoIosGlobe } from "react-icons/io";

const CompanyProfileLeft = () => {
  return (
    <div className="flex-8/12 space-y-4 h-full">
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
      <div className="flex items-start justify-between gap-8 w-full">
        <div className="space-y-8">
          <div>
            <h2 className="text-sm font-[700]">Bio</h2>
            <span className="text-sm font-[400]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              deleniti sint sed perferendis repudiandae adipisci accusantium
              tempora rerum consequuntur magni neque sequi, nisi unde?
              Reprehenderit, tenetur amet nesciunt minima nisi perferendis, in
              cum deleniti fuga quia saepe ipsam nihil numquam sapiente. Nobis
              illum sunt ad, praesentium error dolorem reiciendis molestiae.
            </span>
          </div>
          <div>
            <h2 className="text-sm font-[700]">Vision</h2>
            <span className="text-sm font-[400]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              deleniti sint sed perferendis repudiandae adipisci accusantium
              tempora rerum consequuntur magni neque sequi, nisi unde?
              Reprehenderit.
            </span>
          </div>
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
    </div>
  );
};

export default CompanyProfileLeft;
