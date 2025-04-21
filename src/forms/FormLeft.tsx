import Input from "../components/ui/Input";
import DropDownMenu from "../components/ui/Dropdown";
import { FormProps } from "../types/form";

const FormLeft = ({ formData, setFormData }: FormProps) => {
  return (
    <div className="w-full">
      <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-6">
        <span>Account Details</span>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Input
          value={formData.companyName}
          onChange={(e) =>
            setFormData({ ...formData, companyName: e.target.value })
          }
          id="company-name"
          classname="w-full h-[45px]"
          placeholder="Company Name"
          type="text"
          label="Company Name"
          isRequired
        />
        <Input
          value={formData.userName}
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
          id="company-username"
          classname="w-full h-[45px]"
          placeholder="Company Username"
          type="text"
          label="Company Username"
        />
        <Input
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          id="company-email"
          classname="w-full h-[45px]"
          placeholder="Company Email"
          type="email"
          label="Email"
          isRequired
        />
        <Input
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          id="company-password"
          classname="w-full h-[45px]"
          placeholder="Password"
          type="password"
          label="Company Password"
        />
      </div>
      <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-6">
        <span>Company Location</span>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Input
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          id="company-city"
          classname="w-full h-[45px]"
          placeholder="City"
          type="text"
          label="City"
          isRequired
        />
        <Input
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          id="company-state"
          classname="w-full h-[45px]"
          placeholder="Company State"
          type="text"
          label="State"
          isRequired
        />
        <DropDownMenu
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
          label="Country"
          id="country"
          options={[
            { value: "India", label: "India" },
            { value: "USA", label: "USA" },
            { value: "UK", label: "UK" },
          ]}
          classname="w-full h-[45px]"
          isRequired
        />
        <Input
          value={formData.pincode}
          onChange={(e) =>
            setFormData({ ...formData, pincode: e.target.value })
          }
          id="company-pincode"
          classname="w-full h-[45px]"
          placeholder="text"
          type="text"
          label="pincode"
          isRequired
        />
      </div>
      <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-6">
        <span>Service Provider</span>
      </div>
      <div className="mt-6 grid grid-cols-2">
        <DropDownMenu
          value={""}
          onChange={() => {}}
          label="Service Provider"
          id="service-provider"
          options={[
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
          ]}
          classname="w-full h-[45px]"
          isRequired
        />
      </div>
    </div>
  );
};

export default FormLeft;
