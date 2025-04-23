import { FaPlus } from "react-icons/fa";
import Header from "../../components/jobrole/Header";
import Button from "../../components/ui/Button";
import JobRoleCard from "../../components/jobrole/JobRoleCard";
import { useState } from "react";
import Modal from "../../components/ui/Dialog";
import Input from "../../components/ui/Input";

const JobRole = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [jobRoleName, setJobRoleName] = useState("");
  return (
    <main className="w-full" id="category-list">
      {/* header */}
      <Header />
      {/* heading list */}
      <div className="bg-[#F6F5F5] h-[80px] w-full rounded-md flex justify-between items-center px-4 mt-4">
        <div className="flex items-center gap-8">
          <p className=" text-sm font-[400] ">Role Name</p>
          <p className=" text-sm font-[400] ml-20">Language</p>
          <p className=" text-sm font-[400] ml-20">Add Another language</p>
          <p className=" text-sm font-[400] ml-30">Listed Jobs</p>
        </div>
        <div>
          <Button
            hasIcon
            icon={<FaPlus />}
            className="h-[35px] w-[220px] bg-[var(--bg-primary)]"
            onClick={() => setIsOpen(true)}
            title="create Role"
          />
        </div>
        <Modal
          children={
            <div className="p-4 w-full flex justify-center gap-4 items-center flex-col">
              <h2 className="text-[#CBCBCB] text-sm font-[700]">
                Create a Job Role
              </h2>
              <div className="h-[1px] bg-[#CBCBCB] w-full" />
              <div className="flex items-center justify-center gap-4 w-full">
                <Input
                  value={jobRoleName}
                  onChange={(e) => setJobRoleName(e.target.value)}
                  placeholder="Enter Job Role Name"
                  type="text"
                  id="search"
                  classname="wf h-[40px]"
                />
                <img
                  className="w-[90px] h-[40px] object-contain mt-2"
                  src="/assets/languages.png"
                  alt=""
                />
              </div>
              <Button
                hasIcon
                icon={<FaPlus />}
                className="h-[35px] w-[120px] bg-[var(--bg-primary)]"
                onClick={() => setIsOpen(false)}
                title="create"
              />
            </div>
          }
          classname="max-w-[450px] w-full rounded-[12px]"
          open={isOpen}
          setOpen={setIsOpen}
        />
      </div>
      <div className="mt-8 space-y-4">
        <JobRoleCard />
      </div>
    </main>
  );
};

export default JobRole;
