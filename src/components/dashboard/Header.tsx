import { useState } from "react";
import Input from "../ui/Input";
import DropDownMenu from "../ui/Dropdown";
import Button from "../ui/Button";
import { FaPlus, FaSearch } from "react-icons/fa";

const Header = () => {
  const [formData, setFormData] = useState({
    searchVal: "",
    industryType: "",
    orgType: "",
  });
  return (
    <div className="flex items-center justify-between w-full gap-4 mt-2">
      <div className="flex items-center gap-4 w-full flex-9/12">
        <Input
          id="search"
          placeholder="Search"
          value={formData.searchVal}
          onChange={(e) =>
            setFormData({ ...formData, searchVal: e.target.value })
          }
          type="search"
          classname="h-10.75"
        />
        <DropDownMenu
          defaultOption={{ value: "", label: "Organization Type" }}
          value={formData.orgType}
          onChange={(e) =>
            setFormData({ ...formData, orgType: e.target.value })
          }
          id="orgType"
          options={[
            { value: "all", label: "All" },
            { value: "private", label: "Private" },
            { value: "public", label: "Public" },
          ]}
          classname="h-10.75"
        />
        <DropDownMenu
          defaultOption={{ value: "", label: "Industry Type" }}
          value={formData.industryType}
          onChange={(e) =>
            setFormData({ ...formData, industryType: e.target.value })
          }
          id="indType"
          options={[
            { value: "all", label: "All" },
            { value: "private", label: "Private" },
            { value: "public", label: "Public" },
          ]}
          classname="h-10.75"
        />
        <button className="border border-[#BBBBBB] rounded-lg p-3 flex justify-center items-center h-10.75">
          <FaSearch />
        </button>
      </div>
      <div className="w-full flex items-center justify-between  flex-3/12">
        <Button
          className="text-sm font-[700] h-[35px]"
          onClick={() => {}}
          title="Quick Create"
          hasIcon={true}
          icon={<FaPlus />}
        />
        <div className="flex items-center gap-4">
          <img
            className="w-[18px] h-[10px]"
            src="/assets/invertedArrow.png"
            alt="arrow"
          />
          <img
            className="w-[18px] h-[14px]"
            src="/assets/menu.png"
            alt="arrow"
          />
          <img
            className="w-[18px] h-[14px]"
            src="/assets/dotsquare.png"
            alt="arrow"
          />
          <img
            className="w-[18px] h-[14px]"
            src="/assets/square2.png"
            alt="arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
