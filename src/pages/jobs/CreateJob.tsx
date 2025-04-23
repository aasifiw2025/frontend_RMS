import Header from "../../components/createjob/Header";
import { useState } from "react";
import UpperForm from "../../components/createjob/UpperForm";
import {
  descriptionProps,
  jobDetailProps,
  salaryDetailprops,
} from "../../types/jobProps";
import BelowForm from "../../components/createjob/BelowForm";
import Button from "../../components/ui/Button";
import { FaPlus } from "react-icons/fa";

const CreateJob = () => {
  const [jobDetails, setJobDetails] = useState<jobDetailProps>({
    title: "",
    company: "",
    category: "",
    vacancies: "",
    deadline: "",
    city: "",
  });

  const [salaryDetails, setSalaryDetails] = useState<salaryDetailprops>({
    salaryCategory: "range",
    minSalary: "",
    maxSalary: "",
    salaryType: "",
    recieveApplication: "our-platform",
    others: "featured",
  });

  const [description, setDescription] = useState<descriptionProps>({
    experience: "",
    tags: "",
    jobRole: "",
    benefit: "",
    education: "",
    jobType: "",
    responsibilities: "",
  });

  return (
    <main id="create-job" className="w-full pb-4">
      {/* header */}
      <Header />
      {/* form Grid */}
      <form className="w-full" id="create-job-form">
        {/* form upper */}
        <UpperForm
          jobDetails={jobDetails}
          setJobDetails={setJobDetails}
          salaryDetails={salaryDetails}
          setSalaryDetails={setSalaryDetails}
        />
        {/* Form bottom */}
        <BelowForm description={description} setDescription={setDescription} />
        <div className="flex justify-center items-center mt-4">
          <Button
            hasIcon
            icon={<FaPlus />}
            type="submit"
            onClick={() => {}}
            className="h-[35px] w-[120px] bg-[var(--bg-primary)]"
            title="create"
          />
        </div>
      </form>
    </main>
  );
};

export default CreateJob;
