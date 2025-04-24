import { useState } from "react";
import DropDownMenu from "../components/ui/Dropdown";
import Input from "../components/ui/Input";

const ProfileDetails = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    mobile: "",
    orgType: "",
    password: "",
    website: "",
    serviceProvider: false,
    secondaryEmail: "",
    secondaryMobile: "",
    indType: "",
    country: "India",
    userName: "",
    city: "",
    state: "",
    pincode: "",
  });
  return (
    <section className="flex flex-col md:flex-row md:justify-between w-full gap-4 md:gap-8">
      <div className="mt-6 w-full flex flex-col gap-4">
        <DropDownMenu
          isRequired
          value={formData.orgType}
          onChange={(e) =>
            setFormData({ ...formData, orgType: e.target.value })
          }
          label="Organization Type"
          id="orgType"
          options={[
            { value: "all", label: "All" },
            { value: "private", label: "Private" },
            { value: "public", label: "Public" },
          ]}
          classname="h-[45px]"
        />
        <DropDownMenu
          isRequired
          value={formData.orgType}
          onChange={(e) =>
            setFormData({ ...formData, orgType: e.target.value })
          }
          label="Team Size"
          id="teamSize"
          options={[
            { value: "all", label: "All" },
            { value: "private", label: "Private" },
            { value: "public", label: "Public" },
          ]}
          classname="h-[45px]"
        />
        <Input
          value={formData.website}
          onChange={(e) =>
            setFormData({ ...formData, website: e.target.value })
          }
          id="company-website"
          classname="w-full h-[45px]"
          placeholder="text"
          type="date"
          label="website"
        />
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-black text-sm font-[700] font-inter">Bio</h2>
          <textarea
            placeholder="type your text here"
            className="h-[235px] w-full border-[1px] border-[#CBCBCB] rounded-lg p-4"
          ></textarea>
        </div>
      </div>
      <div className="w-full mt-6 ">
        <DropDownMenu
          isRequired
          value={formData.indType}
          onChange={(e) =>
            setFormData({ ...formData, indType: e.target.value })
          }
          label="Industry Type"
          id="indType"
          options={[
            { value: "all", label: "All" },
            { value: "private", label: "Private" },
            { value: "public", label: "Public" },
          ]}
          classname="h-[45px] mb-4"
        />
        <Input
          value={formData.pincode}
          onChange={(e) =>
            setFormData({ ...formData, pincode: e.target.value })
          }
          id="company-esb-date"
          classname="w-full h-[45px]"
          placeholder="text"
          type="date"
          label="Establishment Date"
        />
        <div className="flex flex-col gap-4 w-full mt-28">
          <h2 className="text-black text-sm font-[700] font-inter">Vision</h2>
          <textarea
            placeholder="type your text here"
            className="h-[235px] w-full border-[1px] border-[#CBCBCB] rounded-lg p-4"
          ></textarea>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
