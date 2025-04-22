import BillDetails from "../components/orderdetails/BillDetails";
import Header from "../components/orderdetails/Header";
import OrderBox from "../components/orderdetails/OrderBox";
import PlanDetails from "../components/orderdetails/PlanDetails";
import TransactionDetails from "../components/orderdetails/TransactionDetails";

const OrderDetails = () => {
  return (
    <main className="w-full py-4" id="order-details">
      {/* Header */}
      <Header />
      {/* order Box */}
      <OrderBox />
      {/* Transaction details */}
      <TransactionDetails />
      {/* Bill and Plan Details */}
      <section
        id="bill-plan-details"
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 items-start"
      >
        <BillDetails />
        <PlanDetails />
      </section>
    </main>
  );
};

export default OrderDetails;
