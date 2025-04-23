import { FormEvent, useState } from "react";
import Header from "../../components/createcandidate/Header";
import AccountDetails from "../../forms/createcandidate/AccountDetails";
import SocialDetails from "../../forms/SocialDetails";
import FormLeft from "../../forms/createcandidate/FormLeft";
import FormRight from "../../forms/createcandidate/FormRight";
import { FaPlus } from "react-icons/fa";
import Button from "../../components/ui/Button";
import ProfileDetails from "../../forms/createcandidate/ProfileDetails";

const CreateCandidate = () => {
  const [accountDetails, setAccountDetails] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    mobile: "",
    links: "",
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

  const [createProps, setCreateProps] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    country: "",
    city: "",
    state: "",
    pincode: "",
    profile: "",
    links: "",
  });
  return (
    <form onSubmit={handleSubmitForm} id="create-candidate" className="py-4">
      <Header />
      <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-6">
        <span>Account Details</span>
      </div>
      <AccountDetails
        accountDetails={accountDetails}
        setAccountDetails={setAccountDetails}
      />
      <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-6">
        <span>Social Details</span>
      </div>
      <SocialDetails socials={socials} setSocials={setSocials} />
      <div className="flex justify-center items-center w-full">
        <Button
          title="Quick Create"
          onClick={() => {}}
          className="h-[35px]"
          hasIcon
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
        <FormLeft formData={createProps} setFormData={setCreateProps} />
        <FormRight socials={socials} setSocials={setSocials} />
      </section>
      <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-6">
        <span>Profile Details</span>
      </div>

      <ProfileDetails />
    </form>
  );
};

export default CreateCandidate;
