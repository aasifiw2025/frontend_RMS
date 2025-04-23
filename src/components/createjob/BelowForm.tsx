import DropDownMenu from "../ui/Dropdown";
import { descriptionProps } from "../../types/jobProps";
import Textarea from "../ui/TextArea";

interface descriptionPropType {
  description: descriptionProps;
  setDescription: (data: descriptionProps) => void;
}

const BelowForm = ({ description, setDescription }: descriptionPropType) => {
  return (
    <div className="w-full space-y-4">
      <div className="h-[50px] w-full bg-[#F5F4F4] rounded-lg border-[1px] border-[#CBCBCB] flex justify-start items-center pl-4 mt-6">
        <span>Description</span>
      </div>
      {/* form grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div className="w-full space-y-4">
          <DropDownMenu
            value={description?.experience}
            onChange={(e) =>
              setDescription({
                ...description,
                experience: e.target.value,
              })
            }
            label="Experience"
            id="experience"
            options={[
              { value: "India", label: "India" },
              { value: "USA", label: "USA" },
              { value: "UK", label: "UK" },
            ]}
            classname="w-full h-[45px]"
            isRequired
          />
          <DropDownMenu
            value={description?.jobRole}
            onChange={(e) =>
              setDescription({
                ...description,
                jobRole: e.target.value,
              })
            }
            label="Job Role"
            id="job role"
            options={[
              { value: "India", label: "India" },
              { value: "USA", label: "USA" },
              { value: "UK", label: "UK" },
            ]}
            classname="w-full h-[45px]"
            isRequired
          />
          <DropDownMenu
            value={description?.education}
            onChange={(e) =>
              setDescription({
                ...description,
                education: e.target.value,
              })
            }
            label="Education"
            id="education"
            options={[
              { value: "India", label: "India" },
              { value: "USA", label: "USA" },
              { value: "UK", label: "UK" },
            ]}
            classname="w-full h-[45px]"
            isRequired
          />
        </div>
        <div className="w-full space-y-4">
          <DropDownMenu
            value={description?.tags}
            onChange={(e) =>
              setDescription({
                ...description,
                tags: e.target.value,
              })
            }
            label="Tags"
            id="tags"
            options={[
              { value: "India", label: "India" },
              { value: "USA", label: "USA" },
              { value: "UK", label: "UK" },
            ]}
            classname="w-full h-[45px]"
          />
          <DropDownMenu
            value={description?.benefit}
            onChange={(e) =>
              setDescription({
                ...description,
                benefit: e.target.value,
              })
            }
            label="Benefit"
            id="benefit"
            options={[
              { value: "India", label: "India" },
              { value: "USA", label: "USA" },
              { value: "UK", label: "UK" },
            ]}
            classname="w-full h-[45px]"
            isRequired
          />
          <DropDownMenu
            value={description?.jobType}
            onChange={(e) =>
              setDescription({
                ...description,
                jobType: e.target.value,
              })
            }
            label="Job Type"
            id="jobtype"
            options={[
              { value: "India", label: "India" },
              { value: "USA", label: "USA" },
              { value: "UK", label: "UK" },
            ]}
            classname="w-full h-[45px]"
            isRequired
          />
        </div>
      </div>
      <Textarea
        label="Responsibilities"
        value={description?.responsibilities}
        onChange={(e) =>
          setDescription({
            ...description,
            responsibilities: e.target.value,
          })
        }
        id="responsibilities"
        placeholder="Type your responsibilities"
      />
    </div>
  );
};

export default BelowForm;
