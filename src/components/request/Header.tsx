import { FaPlus } from "react-icons/fa";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/profiles/create-candidate");
  };
  return (
    <section
      aria-label="header-request"
      className="flex items-end justify-between w-full mt-2"
    >
      <div>
        <h1 className="text-black text-sm  font-[700] font-inter">
          Request List
        </h1>
        <hr className="h-[3px] border-0 w-[179px] bg-[#EE6C4D] my-1" />
      </div>
      <Button
        onClick={handleNavigate}
        title="Quick Create"
        className=" h-[35px] bg-[var(--bg-primary)]"
        hasIcon
        icon={<FaPlus />}
      />
    </section>
  );
};

export default Header;
