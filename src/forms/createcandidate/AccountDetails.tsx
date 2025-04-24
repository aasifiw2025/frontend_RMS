import Input from "../../components/ui/Input";
import DropDownMenu from "../../components/ui/Dropdown";
import { candidateAccountDetailProps } from "../../types/candidate/AccountDetails";

import { Dispatch, SetStateAction } from "react";
import Button from "../../components/ui/Button";
import { FaPlus } from "react-icons/fa";

interface candidateAccountDetailPropTypes {
  accountDetails: candidateAccountDetailProps;
  setAccountDetails: Dispatch<SetStateAction<candidateAccountDetailProps>>;
}

const AccountDetails = ({
  accountDetails,
  setAccountDetails,
}: candidateAccountDetailPropTypes) => {
  return (
    <section className="flex flex-col md:flex-row justify-start gap-6 my-6  w-full px-4">
      <div className="space-y-4 w-[350px]">
        <Input
          value={accountDetails.name}
          onChange={(e) =>
            setAccountDetails({
              ...accountDetails,
              name: e.target.value,
            })
          }
          id="candidate-name"
          classname="w-full h-[45px]"
          placeholder="Candidate Name"
          type="text"
          label="Candidate Name"
          isRequired
        />
        <Input
          value={accountDetails.email}
          onChange={(e) =>
            setAccountDetails({ ...accountDetails, email: e.target.value })
          }
          id="company-email"
          classname="w-full h-[45px]"
          placeholder="Email"
          type="text"
          label="Email"
          isRequired
        />
        <DropDownMenu
          value={accountDetails.country}
          onChange={(e) =>
            setAccountDetails({ ...accountDetails, country: e.target.value })
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
      <div className=" space-y-4 w-[350px]">
        <Input
          value={accountDetails.mobile}
          onChange={(e) =>
            setAccountDetails({ ...accountDetails, mobile: e.target.value })
          }
          id="company-phone"
          classname="w-full h-[45px]"
          placeholder="mobile"
          type="tel"
          label="mobile"
        />
        <Input
          value={accountDetails.password}
          onChange={(e) =>
            setAccountDetails({ ...accountDetails, password: e.target.value })
          }
          id="company-password"
          classname="w-full h-[45px]"
          placeholder="********"
          type="password"
          label="Password"
        />
        <div className="w-full flex items-center justify-between gap-2">
          <Input
            value={accountDetails.links}
            onChange={(e) =>
              setAccountDetails({
                ...accountDetails,
                links: e.target.value,
              })
            }
            id="company-links"
            classname="w-full h-[45px]"
            placeholder="Paste Links Here"
            type="url"
            label="Links (personal website, portfolio etc.)"
          />

          <Button
            onClick={() => {}}
            hasIcon
            icon={<FaPlus />}
            className="h-[45px] mt-4 bg-[var(--bg-primary)]"
          />
        </div>
      </div>
    </section>
  );
};

export default AccountDetails;
