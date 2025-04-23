import { FaPlus } from "react-icons/fa";
import Header from "../../components/jobcategory/Header";
import Button from "../../components/ui/Button";
import JobCategoryCard from "../../components/jobcategory/JobCategoryCard";
import { useRef, useState } from "react";
import Modal from "../../components/ui/Dialog";
import Input from "../../components/ui/Input";

const JobCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  return (
    <main className="w-full" id="category-list">
      {/* header */}
      <Header />
      {/* heading list */}
      <div className="bg-[#F6F5F5] h-[80px] w-full rounded-md flex justify-between items-center px-4 mt-4">
        <div className="flex items-center gap-8">
          <p className=" text-sm font-[400] ">Icon</p>
          <p className=" text-sm font-[400] ml-8">CategoryName</p>
          <p className=" text-sm font-[400] ml-8">Language</p>
          <p className=" text-sm font-[400]">Add Another language</p>
        </div>
        <div>
          <Button
            hasIcon
            icon={<FaPlus />}
            className="h-[35px] w-[220px] bg-[var(--bg-primary)]"
            onClick={() => setIsOpen(true)}
            title="create category"
          />
        </div>
        <Modal
          children={
            <form className="p-4 w-full flex justify-center gap-4 items-center flex-col">
              <h2 className="text-[#CBCBCB] text-sm font-[700]">
                Create Category
              </h2>
              <div className="h-[1px] bg-[#CBCBCB] w-full" />

              <div className="flex items-center justify-center gap-4 w-full">
                <Input
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="Enter Category Role Name"
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
            </form>
          }
          classname="max-w-[450px] w-full rounded-[12px]"
          open={isOpen}
          setOpen={setIsOpen}
        />
      </div>
      <div className="mt-8 space-y-4">
        <JobCategoryCard />
      </div>
    </main>
  );
};

export default JobCategory;
