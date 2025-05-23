import DropDownMenu from "../components/ui/Dropdown";
import { FaPlus } from "react-icons/fa";
import Input from "../components/ui/Input";
import { useRef } from "react";
import { formLinkProps } from "../types/formlink";

const FormRight = ({ socials, setSocials }: formLinkProps) => {
  const logoRef = useRef<HTMLInputElement>(null);
  const bannerRef = useRef<HTMLInputElement>(null);
  const handleLogoSelect = () => {
    if (logoRef.current) {
      logoRef.current.click();
    }
  };

  const handleBannerSelect = () => {
    if (bannerRef.current) {
      bannerRef.current.click();
    }
  };

  return (
    <div className="w-full">
      <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-6">
        <span>Images</span>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
        <div className="w-full ">
          <span className={`font-inter text-sm font-[700]`}>Logo</span>
          <input ref={logoRef} type="file" className="hidden" />
          <button
            onClick={handleLogoSelect}
            className="w-full border border-[#BBBBBB] rounded-[10px] h-[120px] mt-4 flex flex-col justify-center items-center"
          >
            <img
              className="h-10 w-10 object-contain"
              src="/assets/file-upload.png"
              alt="logo-upload"
            />
            <span className="text-sm font-[400] font-inter text-[#6A6A6A] text-center mt-2">
              Drag and drop a file here or click to browse
            </span>
          </button>
        </div>
        <div className="w-full">
          <span className={`font-inter text-sm font-[700]`}>Banner</span>
          <input ref={bannerRef} type="file" className="hidden" />
          <button
            onClick={handleBannerSelect}
            className="w-full border border-[#BBBBBB] rounded-[10px] h-[120px] mt-4 flex flex-col justify-center items-center"
          >
            <img
              className="h-10 w-10 object-contain"
              src="/assets/file-upload.png"
              alt="logo-upload"
            />
            <span className="text-sm font-[400] font-inter text-[#6A6A6A] text-center mt-2">
              Drag and drop a file here or click to browse
            </span>
          </button>
        </div>
      </div>
      <div className="md:h-[220px]">
        <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-6">
          <span>Social Details</span>
        </div>
        <section className="flex flex-col justify-start gap-6 my-6  w-full">
          <DropDownMenu
            classname="h-[45px]"
            value={socials.instagram}
            onChange={(e) =>
              setSocials({ ...socials, instagram: e.target.value })
            }
            id="social-links"
            options={[
              { value: "Instagram", label: "Instagram" },
              { value: "Facebook", label: "Facebook" },
              { value: "LinkedIn", label: "LinkedIn" },
              { value: "Youtube", label: "Youtube" },
            ]}
          />
          <div className="flex flex-row items-center gap-4">
            <Input
              value={socials.link}
              onChange={(e) => setSocials({ ...socials, link: e.target.value })}
              id="social-link"
              classname="w-full h-[45px]"
              placeholder="paste Link here"
              type="email"
            />
            <button className="object-contain rounded-[10px] p-4 bg-[var(--bg-primary)] flex justify-center items-center">
              <FaPlus color="#fff" size={15} />
            </button>
          </div>
        </section>
        <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-14">
          <span>Plan Details</span>
        </div>

        <div className="mt-6 grid grid-cols-2">
          <DropDownMenu
            value={""}
            onChange={() => {}}
            label="Assign Plan"
            id="service-provider"
            options={[
              { value: "Basic", label: "Basic" },
              { value: "Pro", label: "Pro" },
            ]}
            classname="w-full h-[45px]"
            isRequired
          />
        </div>
      </div>
    </div>
  );
};

export default FormRight;
