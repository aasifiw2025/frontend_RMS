import DropDownMenu from "../components/ui/Dropdown";
import Input from "../components/ui/Input";
import { FaPlus } from "react-icons/fa";
import { formLinkProps } from "../types/formlink";

const SocialDetails = ({ socials, setSocials }: formLinkProps) => {
  return (
    <section className="flex flex-col md:flex-row md:justify-start gap-3 md:gap-6 md:my-6  w-full px-2 md:px-4 mt-4">
      <DropDownMenu
        value={socials.instagram}
        onChange={(e) => setSocials({ ...socials, instagram: e.target.value })}
        id="social-links"
        options={[
          { value: "Instagram", label: "Instagram" },
          { value: "Facebook", label: "Facebook" },
          { value: "LinkedIn", label: "LinkedIn" },
          { value: "Youtube", label: "Youtube" },
        ]}
        classname="h-[45px]"
      />
      <Input
        value={socials.link}
        onChange={(e) => setSocials({ ...socials, link: e.target.value })}
        id="social-link"
        classname="w-full h-[45px]"
        placeholder="paste Link here"
        type="email"
      />
      <button className="object-contain rounded-[10px] mt-4 p-4 bg-[var(--bg-primary)] flex justify-center items-center">
        <FaPlus color="#fff" size={15} />
      </button>
    </section>
  );
};

export default SocialDetails;
