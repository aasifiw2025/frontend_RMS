import { useState } from "react";
import DropDownMenu from "../ui/Dropdown";
import Input from "../ui/Input";

const SearchBox = () => {
  const [jobDetails, setJobDetails] = useState({
    search: "",
    jobCategory: "",
    jobType: "",
    experience: "",
    sortBy: "",
    filterBy: "",
  });
  return (
    <section
      className="h-[105px] bg-[#F6F5F5] w-full mt-4 flex flex-row items-center justify-between px-4 rounded-[5px]"
      aria-label="search-box"
    >
      <form action="" className="flex items-center gap-4 w-full">
        <Input
          value={jobDetails.search}
          onChange={(e) =>
            setJobDetails({ ...jobDetails, search: e.target.value })
          }
          placeholder="Search"
          type="text"
          label="Search"
          id="search"
          classname=" h-[40px]"
        />
        <DropDownMenu
          value={jobDetails.jobCategory}
          onChange={(e) =>
            setJobDetails({ ...jobDetails, jobCategory: e.target.value })
          }
          label="Job Category"
          id="job category"
          options={[
            { value: "all", label: "All" },
            { value: "private", label: "Private" },
            { value: "public", label: "Public" },
          ]}
          classname="h-[40px]"
        />
        <DropDownMenu
          value={jobDetails.jobType}
          onChange={(e) =>
            setJobDetails({ ...jobDetails, jobType: e.target.value })
          }
          label="Job Type"
          id="job type"
          options={[
            { value: "all", label: "All" },
            { value: "private", label: "Private" },
            { value: "public", label: "Public" },
          ]}
          classname="h-[40px]"
        />
        <DropDownMenu
          value={jobDetails.experience}
          onChange={(e) =>
            setJobDetails({ ...jobDetails, experience: e.target.value })
          }
          label="Experience"
          id="experience"
          options={[
            { value: "all", label: "All" },
            { value: "private", label: "Private" },
            { value: "public", label: "Public" },
          ]}
          classname="h-[40px]"
        />
        <DropDownMenu
          value={jobDetails.sortBy}
          onChange={(e) =>
            setJobDetails({ ...jobDetails, sortBy: e.target.value })
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
        <DropDownMenu
          value={jobDetails.filterBy}
          onChange={(e) =>
            setJobDetails({ ...jobDetails, filterBy: e.target.value })
          }
          label="Filter By"
          id="filter by"
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
      </form>
    </section>
  );
};

export default SearchBox;
