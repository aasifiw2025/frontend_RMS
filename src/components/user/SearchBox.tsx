import { FaPlus } from "react-icons/fa";
import Button from "../ui/Button";
import DropDownMenu from "../ui/Dropdown";
import { useState } from "react";

const SearchBox = () => {
  const [userDetails, setUserDetails] = useState({
    recommendedPackage: "",
    defaultPackage: "",
  });
  return (
    <form
      id="search-box-user"
      className="w-full bg-[#F6F5F5] min-h-[100px] flex items-center gap-8 justify-between px-4 mt-4 rounded-md"
    >
      <div className="w-full flex items-center gap-4">
        <DropDownMenu
          value={userDetails?.recommendedPackage}
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              recommendedPackage: e.target.value,
            })
          }
          label="Set Recommended Package"
          id="reommended package"
          options={[
            { value: "one", label: "Select One" },
            { value: "two", label: "Select Two" },
          ]}
          classname="h-[40px]"
        />
        <Button
          textClassName="text-black"
          onClick={() => {}}
          title="Update"
          className="bg-white h-[40px] text-sm font-[700] text-black mt-4"
        />
      </div>
      <div className="w-full flex items-center gap-4">
        <DropDownMenu
          value={userDetails?.defaultPackage}
          onChange={(e) =>
            setUserDetails({
              ...userDetails,
              defaultPackage: e.target.value,
            })
          }
          label="Set Default Package"
          id="defulat package"
          options={[
            { value: "one", label: "Select One" },
            { value: "two", label: "Select Two" },
          ]}
          classname="h-[40px]"
        />
        <Button
          textClassName="text-black"
          onClick={() => {}}
          title="Update"
          className="bg-white h-[40px] text-sm font-[700] text-black mt-4"
        />
      </div>
      <div>
        <Button
          onClick={() => {}}
          hasIcon
          icon={<FaPlus />}
          title="Create"
          className="bg-[var(--bg-primary)] h-[40px] mt-4"
        />
      </div>
    </form>
  );
};

export default SearchBox;
