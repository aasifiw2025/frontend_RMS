import Order from "../orders/Order";

const OrderBox = () => {
  return (
    <section
      id="order-box"
      className="h-[180px] w-full bg-[#F6F5F5] flex flex-col p-4 gap-4 mt-4 rounded-sm"
    >
      <div>
        <div className="flex flex-row justify-start px-5 items-center mt-4 border-b-3 border-b-[#D9D9D9] pb-4">
          <p className="text-sm font-[300] font-inter">Orders & Transactions</p>
          <p className="text-sm font-[300] font-inter ml-28">Company</p>
          <p className="text-sm font-[300] font-inter ml-52 col-span-2">
            Plan & Amount
          </p>
          <p className="text-sm font-[300] font-inter ml-24">Payment Method</p>
          <p className="text-sm font-[300] font-inter ml-10">
            payment Status & Created Time
          </p>
        </div>

        <div className="pb-4 flex flex-col gap-4 mt-4">
          <Order />
        </div>
      </div>
    </section>
  );
};

export default OrderBox;
