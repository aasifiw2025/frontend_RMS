import { FaRegEdit } from "react-icons/fa";

const PricingCard = ({
  name,
  title,
  price,
  title1,
  des,
}: {
  title: string;
  name: string;
  price: number;
  title1: string;
  des?: string;
}) => {
  return (
    <div className="h-[660px] w-[300px] px-2 bg-[#F6F5F5] border border-[#CBCBCB] rounded-md">
      <h1 className="text-2.5xl font-[700] text-center mt-4 font-inter">
        {name}
      </h1>
      <div className="py-2 w-full flex items-center mt-2">
        <div className="h-[3px] w-full bg-[#D9D9D9]" />
        <div className="h-[31px] w-[87px] bg-white rounded-full border border-[#BBBBBB] flex items-center justify-center p-2">
          <span className="text-sm text-[#6A6A6A] text-center">{title}</span>
        </div>
        <div className="h-[3px] w-full bg-[#D9D9D9]" />
      </div>
      <div className="py-4 flex justify-center items-center">
        <h2 className="text-5xl font-[400] font-inter">$ {price}</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-sm font-[700] font-inter text-center">{title1}</h4>
        <span className="text-sm font-[400] font-inter text-center">{`${
          des === undefined
            ? "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            : des
        }`}</span>
      </div>
      <ul className="py-24 flex flex-col gap-4 items-center">
        <li className="flex flex-row justify-start items-center w-full gap-4">
          <img
            src="/assets/check.png"
            alt="check"
            className="h-4.5 w-4.5 object-contain"
          />
          <span className="text-sm font-[400] font-inter text-center">
            Jobs upto 3
          </span>
        </li>
        <li className="flex flex-row justify-start items-center w-full gap-4">
          <img
            src="/assets/check.png"
            alt="check"
            className="h-4.5 w-4.5 object-contain"
          />
          <span className="text-sm font-[400] font-inter text-center">
            Featured Jobs upto 3
          </span>
        </li>
        <li className="flex flex-row justify-start items-center w-full gap-4">
          <img
            src="/assets/check.png"
            alt="check"
            className="h-4.5 w-4.5 object-contain"
          />
          <span className="text-sm font-[400] font-inter text-center">
            Highlighted Job Posts upto 3
          </span>
        </li>
        <li className="flex flex-row justify-start items-center w-full gap-4">
          <img
            src="/assets/check.png"
            alt="check"
            className="h-4.5 w-4.5 object-contain"
          />
          <span className="text-sm font-[400] font-inter text-center">
            50 candidates CV Preview
          </span>
        </li>
      </ul>
      <div className="flex items-center gap-2">
        <input type="checkbox" name="" id="" />
        <span className="text-sm font-[400] font-inter text-center">
          Show this package on Frontend
        </span>
      </div>
      <div className="flex justify-center items-center py-4">
        <button className="p-2 bg-white shadow-md rounded-md  flex items-center justify-center">
          <FaRegEdit size={20} color="#433E3F" />
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
