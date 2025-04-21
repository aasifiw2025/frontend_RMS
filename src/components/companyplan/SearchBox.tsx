import { useState } from "react";
import DropDownMenu from "../ui/Dropdown";
import { FaPlus } from "react-icons/fa";

const SearchBox = () => {
  const [recommededPackages, setRecommendedPackages] = useState("");
  const [defaultPackages, setDefaultPackages] = useState("");
  return (
    <div className="bg-[#F6F5F5] h-[114px] px-4 w-full flex justify-between gap-6 items-center rounded-[10px]">
      <div className="flex flex-row items-center w-full gap-4">
        <DropDownMenu
          label="Set Recommended Package"
          value={recommededPackages}
          onChange={(e) => setRecommendedPackages(e.target.value)}
          id="recommended-packages"
          options={[
            {
              value: "select one",
              label: "select one",
            },
            {
              value: "Select two",
              label: "Select two",
            },
          ]}
          classname="w-full"
        />
        <button className="bg-white border-[0.5px] border-[#CDD7E3] rounded-[8px] px-2.5 py-2.5 mt-6">
          update
        </button>
      </div>
      <div className="flex flex-row items-center w-full gap-4">
        <DropDownMenu
          label="Set Default Package"
          value={defaultPackages}
          onChange={(e) => setDefaultPackages(e.target.value)}
          id="default-packages"
          options={[
            {
              value: "select one",
              label: "select one",
            },
            {
              value: "Select two",
              label: "Select two",
            },
          ]}
          classname="w-full"
        />
        <button className="bg-white border-[0.5px] border-[#CDD7E3] rounded-[8px] px-2.5 py-2.5 mt-6">
          update
        </button>
      </div>
      <div className="flex flex-row justify-end items-end mt-6">
        <button
          type="submit"
          className="object-contain rounded-[10px] py-3 px-2 bg-[var(--bg-primary)] flex justify-center items-center"
        >
          <FaPlus color="#fff" size={15} className="inline" />
          <span className="inline ml-2 text-white text-sm">Create</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
