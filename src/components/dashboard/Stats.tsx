import { FaEye } from "react-icons/fa";
import Button from "../ui/Button";

const Stats = () => {
  const recentJobs = [
    {
      id: 1,
      title: "InternShip-Frontend Developer",
      company: "Idab Tech UK- Remote",
      designation: "HR Tech",
      date: "20 feb 2024",
    },
    {
      id: 2,
      title: "InternShip-Frontend Developer",
      company: "Idab Tech UK- Remote",
      designation: "HR Tech",
      date: "20 feb 2024",
    },
  ];

  const recentPurchases = [
    {
      id: "#iDAB2422uk10",
      price: 60,
      title: "Startup & SME",
      designation: "Razorpay",
      status: "paid",
      date: "21:15, 20 feb 2024",
    },
    {
      id: "#iDAB2422uk10",
      price: 60,
      title: "Startup & SME",
      designation: "Razorpay",
      status: "paid",
      date: "21:15, 20 feb 2024",
    },
    {
      id: "#iDAB2422uk10",
      price: 60,
      title: "Startup & SME",
      designation: "Razorpay",
      status: "paid",
      date: "21:15, 20 feb 2024",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8">
      <div className="w-full">
        {/* header */}
        <section
          aria-label="header"
          className="flex items-end justify-between w-full"
        >
          <div>
            <h1 className="text-black text-sm  font-[700] font-inter">
              Recently Published Jobs
            </h1>
            <hr className="h-[3px] border-0 w-[179px] bg-[#EE6C4D] my-1" />
          </div>
          <Button
            className="text-sm font-[700] h-[35px] bg-[var(--bg-primary)]"
            onClick={() => {}}
            title="View All"
          />
        </section>
        {/* recent Jobs */}
        <div className="w-full flex flex-col gap-4 mt-4">
          {recentJobs?.map((item, id) => {
            return (
              <div
                key={id}
                className="w-full flex items-center justify-between h-[46px]"
              >
                <div className="flex items-center gap-2">
                  <img
                    className="w-[49px] h-full object-contain"
                    src="/assets/company.png"
                    alt="company-logo"
                  />
                  <div>
                    <p className="text-xs font-[700]">{item?.title}</p>
                    <p className="text-xs font-[400]">{item?.company}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-[400]">{item?.designation}</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-xs font-[400]">{item?.date}</p>
                  <button className="h-[45px] w-[50px] shadow-lg bg-white flex justify-center items-center rounded-lg">
                    <FaEye />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* Recent Orders header */}
        <section
          aria-label="header"
          className="flex items-end justify-between w-full mt-8"
        >
          <div>
            <h1 className="text-black text-sm  font-[700] font-inter">
              Recently Purchased Orders
            </h1>
            <hr className="h-[3px] border-0 w-[179px] bg-[#EE6C4D] my-1" />
          </div>
          <Button
            className="text-sm font-[700] h-[35px] bg-[var(--bg-primary)]"
            onClick={() => {}}
            title="View All"
          />
        </section>
        {/* recent purchased orders */}
        <div className="w-full flex flex-col gap-4 mt-4">
          {recentPurchases?.map((order, id) => {
            return (
              <div
                key={id}
                className="w-full flex items-center justify-between h-[46px]"
              >
                <span className="text-xs font-[400]">{order?.id}</span>
                <div>
                  <p className="text-xs font-[700]">{`$${order?.price}`}</p>
                  <p className="text-xs font-[300]">{order?.title}</p>
                </div>
                <p className="text-sm font-[400]">{order?.designation}</p>
                <div className="flex items-start gap-2">
                  <div className="h-2 w-2 bg-[#7EFFB1] rounded-full mt-2" />
                  <div>
                    {order?.status === "paid" && (
                      <p className="text-sm font-[700]">Paid</p>
                    )}
                    <span className="text-[10px] font-[300]">
                      {order?.date}
                    </span>
                  </div>
                </div>
                <button className="h-[45px] w-[50px] shadow-lg bg-white flex justify-center items-center rounded-lg">
                  <FaEye />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full border-2 border-dashed rounded-lg border-[#AB999980] h-[450px] py-2 px-4">
        <div>
          <h1 className="text-black text-sm  font-[700] font-inter">
            Recently Published Jobs
          </h1>
          <hr className="h-[3px] border-0 w-[179px] bg-[#EE6C4D] my-1" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
