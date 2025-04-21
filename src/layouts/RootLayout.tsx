import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidbebar/Sidebar";
import { useLocation } from "react-router-dom";
import { IoIosMoon } from "react-icons/io";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const RootLayout = () => {
  const { pathname } = useLocation();
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const param = pathname === "/" ? "Dashboard" : pathname.split("/")[1];

  return (
    <main
      id="root-layout"
      className="flex flex-row w-full p-5 h-screen overflow-hidden"
    >
      <Sidebar />
      <article
        id="main"
        className="flex-1 px-4 overflow-y-auto h-screen flex flex-col gap-2"
      >
        <div className="h-[73px] flex w-full items-center justify-between gap-4">
          {/* Left Section */}
          <div className="flex items-center gap-2 px-4 h-full rounded-md bg-[var(--bg-primary)] flex-1">
            <img
              src="/assets/bag.png"
              className="h-6 w-6 object-contain"
              alt="bag"
            />
            <span className="font-inter text-2xl font-medium text-white capitalize">{`RMS-${param}`}</span>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <IoIosMoon size={26} />
            <Switch checked={checked} onChange={handleChange} />

            <img
              className="h-[31px] w-[87px] object-contain"
              src="/assets/languages.png"
              alt="languages"
            />
            <img
              className="h-[31px] w-[42px] object-contain"
              src="/assets/notification.png"
              alt="notification"
            />
            <img
              className="h-[22px] w-[22px] object-contain"
              src="/assets/signout.png"
              alt="signout"
            />

            {/* Profile */}
            <div className="flex flex-col items-center">
              <img
                className="h-[39px] w-[39px] object-contain"
                src="/assets/circle.png"
                alt="profile"
              />
              <span className="text-xs font-normal font-inter">idabadmin</span>
            </div>
          </div>
        </div>

        <div className="py-4">
          <Outlet />
        </div>
      </article>
    </main>
  );
};

export default RootLayout;
