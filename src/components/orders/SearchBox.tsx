import { useState } from "react";
import DropDownMenu from "../ui/Dropdown";

const SearchBox = () => {
  const [orderDetails, setOrderDetails] = useState({
    companies: "",
    paymentProvider: "",
    plan: "",
    sortBy: "",
  });
  return (
    <section
      className="h-[105px] bg-[#F6F5F5] w-full mt-4 flex flex-row items-center justify-between px-4 rounded-[5px]"
      aria-label="search-box-ordees"
    >
      <form action="" className="flex items-center gap-4 w-full">
        <DropDownMenu
          value={orderDetails?.companies}
          onChange={(e) =>
            setOrderDetails({ ...orderDetails, companies: e.target.value })
          }
          label="Companies"
          id="companies"
          options={[
            { value: "all", label: "All" },
            { value: "private", label: "Private" },
            { value: "public", label: "Public" },
          ]}
          classname="h-[40px]"
        />
        <DropDownMenu
          value={orderDetails?.paymentProvider}
          onChange={(e) =>
            setOrderDetails({
              ...orderDetails,
              paymentProvider: e.target.value,
            })
          }
          label="Payment Proivder"
          id="payment provider"
          options={[
            { value: "all", label: "All" },
            { value: "private", label: "Private" },
            { value: "public", label: "Public" },
          ]}
          classname="h-[40px]"
        />
        <DropDownMenu
          value={orderDetails?.plan}
          onChange={(e) =>
            setOrderDetails({ ...orderDetails, plan: e.target.value })
          }
          label="Plan"
          id="plan"
          options={[
            { value: "all", label: "All" },
            { value: "private", label: "Private" },
            { value: "public", label: "Public" },
          ]}
          classname="h-[40px]"
        />
        <DropDownMenu
          value={orderDetails?.sortBy}
          onChange={(e) =>
            setOrderDetails({ ...orderDetails, sortBy: e.target.value })
          }
          label="SortBy"
          id="sortby"
          options={[
            { value: "all", label: "All" },
            { value: "private", label: "Private" },
            { value: "public", label: "Public" },
          ]}
          classname="h-[40px]"
        />
      </form>
    </section>
  );
};

export default SearchBox;
