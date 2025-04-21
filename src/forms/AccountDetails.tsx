import Input from "../components/ui/Input";
import DropDownMenu from "../components/ui/Dropdown";

import { FormProps } from "../types/form";

const AccountDetails = ({ formData, setFormData }: FormProps) => {
  return (
    <section className="flex flex-row justify-start gap-6 my-6  w-full px-4">
      <div className="space-y-4 w-[350px]">
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
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          id="company-email"
          classname="w-full h-[45px]"
          placeholder="Email"
          type="text"
          label="Email"
          isRequired
        />
        <Input
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
          id="company-phone"
          classname="w-full h-[45px]"
          placeholder="mobile"
          type="tel"
          label="mobile"
        />
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
        <Input
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, orgType: e.target.value })
          }
          id="company-password"
          classname="w-full h-[45px]"
          placeholder="********"
          type="password"
          label="Password"
        />
        <Input
          value={formData.website}
          onChange={(e) =>
            setFormData({ ...formData, website: e.target.value })
          }
          id="company-website"
          classname="w-full h-[45px]"
          placeholder="website"
          type="text"
          label="Website"
        />
      </div>
      <div className=" space-y-4 w-[350px]">
        <div className="h-[70px] flex justify-end items-start gap-4 flex-col">
          <label
            htmlFor={"service-provider"}
            className={`font-inter text-sm font-[700]`}
          >
            Service Provider
            <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center gap-4">
            <div>
              <input
                checked={formData.serviceProvider}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    serviceProvider: e.target.checked,
                  })
                }
                type="radio"
                name={"service-provider"}
                id={"service-provider"}
              />
              <span>Yes</span>
            </div>
            <div>
              <input
                checked={formData.serviceProvider}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    serviceProvider: !e.target.checked,
                  })
                }
                type="radio"
                name={"service-provider"}
                id={"no-service-provider"}
              />
              <span>No</span>
            </div>
          </div>
        </div>
        <Input
          value={formData.secondaryEmail}
          onChange={(e) =>
            setFormData({ ...formData, secondaryEmail: e.target.value })
          }
          id="company-secondary-email"
          classname="w-full h-[45px]"
          placeholder="Secondary Email"
          type="email"
          label="Secondary Email"
        />
        <Input
          value={formData.secondaryMobile}
          onChange={(e) =>
            setFormData({ ...formData, secondaryMobile: e.target.value })
          }
          id="company-secondary-mobile"
          classname="w-full h-[45px]"
          placeholder="Secondary Mobile"
          type="email"
          label="Secondary Mobile"
        />
        <DropDownMenu
          isRequired
          value={formData.indType}
          onChange={(e) =>
            setFormData({ ...formData, indType: e.target.value })
          }
          label="Industry Type"
          id="indtype"
          options={[
            { value: "all", label: "All" },
            { value: "private", label: "Private" },
            { value: "public", label: "Public" },
          ]}
          classname="w-full h-[45px]"
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
        />
      </div>
    </section>
  );
};

export default AccountDetails;
