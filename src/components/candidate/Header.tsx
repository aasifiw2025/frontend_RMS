import { FaPlus } from "react-icons/fa";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/profiles/create-candidate");
  };
  return (
    <header
      aria-label="header"
      className="flex flex-col md:flex-row gap-4 md:gap-0 md:items-end md:justify-between w-full"
    >
      <div>
        <h1 className="text-black text-sm  font-[700] font-inter">
          Candidate List
        </h1>
        <hr className="h-[3px] border-0 w-[179px] bg-[#EE6C4D] my-1" />
      </div>
      <Button
        onClick={handleNavigate}
        title="Create Candidate"
        className=" h-[35px] bg-[var(--bg-primary)]"
        hasIcon
        icon={<FaPlus />}
      />
    </header>
  );
};

export default Header;
