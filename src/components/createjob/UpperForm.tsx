import { jobDetailProps, salaryDetailprops } from "../../types/jobProps";
import DropDownMenu from "../ui/Dropdown";
import Input from "../ui/Input";

interface UpperFormType {
  jobDetails: jobDetailProps;
  setJobDetails: (data: jobDetailProps) => void;
  salaryDetails: salaryDetailprops;
  setSalaryDetails: (data: salaryDetailprops) => void;
}

const UpperForm = ({
  jobDetails,
  salaryDetails,
  setJobDetails,
  setSalaryDetails,
}: UpperFormType) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center w-full">
      {/* left form */}
      <div className="w-full">
        {/* job details header*/}
        <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-6">
          <span>Job Details</span>
        </div>
        {/* form */}
        <div className="w-full mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            value={jobDetails.title}
            onChange={(e) =>
              setJobDetails({ ...jobDetails, title: e.target.value })
            }
            id="title"
            classname="w-full h-[45px]"
            placeholder="Title"
            type="text"
            label="Title"
            isRequired
          />
          <DropDownMenu
            value={jobDetails.company}
            onChange={(e) =>
              setJobDetails({ ...jobDetails, company: e.target.value })
            }
            label="Company"
            id="company"
            options={[
              { value: "India", label: "India" },
              { value: "USA", label: "USA" },
              { value: "UK", label: "UK" },
            ]}
            classname="w-full h-[45px]"
            isRequired
          />
          <DropDownMenu
            value={jobDetails.category}
            onChange={(e) =>
              setJobDetails({ ...jobDetails, category: e.target.value })
            }
            label="Category"
            id="category"
            options={[
              { value: "India", label: "India" },
              { value: "USA", label: "USA" },
              { value: "UK", label: "UK" },
            ]}
            classname="w-full h-[45px]"
            isRequired
          />

          <Input
            value={jobDetails.vacancies}
            onChange={(e) =>
              setJobDetails({ ...jobDetails, vacancies: e.target.value })
            }
            id="vacancies"
            classname="w-full h-[45px]"
            placeholder="Vacancies"
            type="text"
            label="Vacancies"
          />
          <Input
            value={jobDetails.deadline}
            onChange={(e) =>
              setJobDetails({ ...jobDetails, deadline: e.target.value })
            }
            id="deadline"
            classname="w-full h-[45px]"
            placeholder="Deadline"
            type="date"
            label="Deadline"
          />
        </div>
        {/* location header*/}
        <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-6">
          <span>Location (click to add a pointer)</span>
        </div>
        {/* location input and map */}
        <div className="w-full mt-4">
          <Input
            value={jobDetails.city}
            onChange={(e) =>
              setJobDetails({ ...jobDetails, city: e.target.value })
            }
            id="location"
            classname="w-full h-[45px]"
            placeholder="City name"
            type="text"
            label="City"
          />
          {/* Todo: Add a dynamic map */}
          <img
            className="w-full h-[250px] object-contain"
            src="/assets/map.png"
            alt=""
          />
        </div>
      </div>
      {/* right form */}
      <div className="w-full space-y-4">
        <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-6">
          <span>Salary Details</span>
        </div>
        {/* salary radio buttons */}
        <div className="w-full flex items-center justify-center gap-32 mt-8">
          <div className="flex items-center gap-2">
            <input
              className="accent-[#EE6C4D]"
              type="radio"
              name="salaryType"
              value="range"
              checked={salaryDetails.salaryCategory === "range"}
              onChange={() =>
                setSalaryDetails({
                  ...salaryDetails,
                  salaryCategory: "range",
                })
              }
            />
            <span className="text-sm font-[700]">Salary Range</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="accent-[#EE6C4D]"
              type="radio"
              name="salaryType"
              value="custom"
              checked={salaryDetails.salaryCategory === "custom"}
              onChange={() =>
                setSalaryDetails({
                  ...salaryDetails,
                  salaryCategory: "custom",
                })
              }
            />
            <span className="text-sm font-[700]">Custom Salary</span>
          </div>
        </div>
        {/* min and max salary inputs */}
        <div className="grid grid-cols-2 w-full gap-4 mt-4">
          <Input
            value={salaryDetails.minSalary}
            onChange={(e) =>
              setSalaryDetails({
                ...salaryDetails,
                minSalary: e.target.value,
              })
            }
            id="min-salary"
            classname="h-[45px] w-full"
            placeholder="Min Salary"
            type="text"
            label="Min Salary"
          />
          <Input
            value={salaryDetails.maxSalary}
            onChange={(e) =>
              setSalaryDetails({
                ...salaryDetails,
                maxSalary: e.target.value,
              })
            }
            id="max-salary"
            classname="h-[45px]"
            placeholder="Max Salary"
            type="text"
            label="Max Salary"
          />
        </div>
        {/* Salary Type Dropdown */}
        <DropDownMenu
          value={salaryDetails.salaryType}
          onChange={(e) =>
            setSalaryDetails({
              ...salaryDetails,
              salaryType: e.target.value,
            })
          }
          label="Salary Type"
          id="salary type"
          options={[
            { value: "India", label: "India" },
            { value: "USA", label: "USA" },
            { value: "UK", label: "UK" },
          ]}
          classname="w-full h-[45px]"
          isRequired
        />

        <div className="mt-19 h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 ">
          <span>Candidate Options</span>
        </div>

        {/* application received Dropdown */}
        <DropDownMenu
          value={salaryDetails.recieveApplication}
          onChange={(e) =>
            setSalaryDetails({
              ...salaryDetails,
              recieveApplication: e.target.value,
            })
          }
          label="Recieve Application"
          id="receive application"
          options={[
            { value: "India", label: "India" },
            { value: "USA", label: "USA" },
            { value: "UK", label: "UK" },
          ]}
          classname="w-full h-[45px]"
          isRequired
        />

        {/* others */}
        <div className="flex flex-col items-end justify-end w-full">
          <div className="mt-19 h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 ">
            <span>Others</span>
          </div>

          {/* others radio buttons */}
          <div className="w-full flex items-center justify-center gap-8 mt-8">
            <div className="flex items-center gap-2">
              <input
                className="accent-[#EE6C4D]"
                type="radio"
                name="others"
                value="featured"
                checked={salaryDetails.others === "featured"}
                onChange={() =>
                  setSalaryDetails({
                    ...salaryDetails,
                    others: "featured",
                  })
                }
              />
              <span className="text-sm font-[700]">Featured</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="accent-[#EE6C4D]"
                type="radio"
                name="others"
                value="highlighted"
                checked={salaryDetails.others === "highlighted"}
                onChange={() =>
                  setSalaryDetails({
                    ...salaryDetails,
                    others: "highlighted",
                  })
                }
              />
              <span className="text-sm font-[700]">Highlighted</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                className="accent-[#EE6C4D]"
                type="radio"
                name="others"
                value="remote"
                checked={salaryDetails.others === "remote"}
                onChange={() =>
                  setSalaryDetails({
                    ...salaryDetails,
                    others: "remote",
                  })
                }
              />
              <span className="text-sm font-[700]">Remote</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperForm;
