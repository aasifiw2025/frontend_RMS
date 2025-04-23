import Header from "../../components/createcompany/Header";

import { FaPlus } from "react-icons/fa";
import AccountDetails from "../../forms/AccountDetails";
import SocialDetails from "../../forms/SocialDetails";
import FormLeft from "../../forms/FormLeft";
import FormRight from "../../forms/FormRight";
import { FormEvent, useState } from "react";
import Button from "../../components/ui/Button";

const CreateCompany = () => {
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
  const handleSubmitForm = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  };

  const [socials, setSocials] = useState({
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    youtube: "",
    link: "",
  });
  return (
    <form onSubmit={handleSubmitForm} className="w-full pb-8">
      <Header />
      <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-6">
        <span>Account Details</span>
      </div>
      <AccountDetails formData={formData} setFormData={setFormData} />
      <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-6">
        <span>Social Details</span>
      </div>
      <SocialDetails socials={socials} setSocials={setSocials} />
      <div className="flex justify-center items-center w-full">
        <Button
          className="text-sm font-[700] h-[35px] bg-[var(--bg-primary)]"
          onClick={() => {}}
          title="Quick Create"
          hasIcon={true}
          icon={<FaPlus />}
        />
      </div>
      <section
        aria-label="header"
        className="flex items-end justify-between w-full"
      >
        <div className="w-full h-[53px] flex items-start flex-col justify-end">
          <h1 className="text-black text-sm  font-[700] font-inter">Create</h1>
          <hr className="h-[3px] border-0 w-full  bg-[#EE6C4D] my-1" />
        </div>
      </section>

      <section className="flex flex-row justify-between w-full gap-8">
        <FormLeft formData={formData} setFormData={setFormData} />
        <FormRight socials={socials} setSocials={setSocials} />
      </section>
      <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-6">
        <span>Profile Details</span>
      </div>
      <div className="flex justify-center items-center mt-4">
        <Button
          className="text-sm font-[700] h-[35px] bg-[var(--bg-primary)]"
          onClick={() => {}}
          title="Submit"
          hasIcon={true}
          icon={<FaPlus />}
        />
      </div>
    </form>
  );
};

export default CreateCompany;
