import { useState } from "react";
import DropDownMenu from "../ui/Dropdown";
import Input from "../ui/Input";

const SearchBox = () => {
  const [formData, setFormData] = useState({
    search: "",
    orgType: "",
    indType: "",
    emailVerification: "",
    sortBy: "",
  });
  return (
    <section
      className="md:h-[105px] py-4 md:py-0 bg-[#F6F5F5] w-full mt-6 flex flex-row items-center justify-between px-4 rounded-[5px]"
      aria-label="search-box"
    >
      <form
        action=""
        className="flex flex-col md:flex-row md:items-center gap-4 w-full"
      >
        <div className="w-full">
          <Input
            value={formData.search}
            onChange={(e) =>
              setFormData({ ...formData, search: e.target.value })
            }
            placeholder="Search"
            type="text"
            label="Search"
            id="search"
            classname=" h-[40px]"
          />
        </div>

        <div className="w-full flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <DropDownMenu
            value={formData.emailVerification}
            onChange={(e) =>
              setFormData({ ...formData, emailVerification: e.target.value })
            }
            label="Email Verification"
            id="email-verification"
            options={[
              { value: "all", label: "All" },
              { value: "private", label: "Private" },
              { value: "public", label: "Public" },
            ]}
            classname="h-[40px]"
          />
          <DropDownMenu
            value={formData.sortBy}
            onChange={(e) =>
              setFormData({ ...formData, sortBy: e.target.value })
            }
            label="Sort By"
            id="sortby"
            options={[
              {
                value: "latest",
                label: "latest",
              },
              {
                value: "oldest",
                label: "oldest",
              },
            ]}
            classname="h-[40px]"
          />
        </div>
      </form>
    </section>
  );
};

export default SearchBox;
