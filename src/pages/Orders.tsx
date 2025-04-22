import Header from "../components/orders/Header";
import Order from "../components/orders/Order";
import SearchBox from "../components/orders/SearchBox";

const Orders = () => {
  return (
    <main className="w-full" id="orders">
      {/* header */}
      <Header />
      {/* Orders search form */}
      <SearchBox />
      {/* orders Data table */}
      <div>
        <div className="flex flex-row justify-start px-5 items-center mt-4">
          <p className="text-sm font-[300] font-inter">Orders & Transactions</p>
          <p className="text-sm font-[300] font-inter ml-28">Company</p>
          <p className="text-sm font-[300] font-inter ml-52">Plan & Amount</p>
          <p className="text-sm font-[300] font-inter ml-24">Payment Method</p>
          <p className="text-sm font-[300] font-inter ml-10">
            payment Status & Created Time
          </p>
        </div>
        <div className="pb-4 flex flex-col gap-4 mt-4">
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
          <Order />
        </div>
      </div>
    </main>
  );
};

export default Orders;
