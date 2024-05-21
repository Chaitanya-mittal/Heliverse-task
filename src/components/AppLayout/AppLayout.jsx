import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";

import { Outlet } from "react-router-dom";
function AppLayout() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div className="h-screen w-screen ">
      <Navbar />
      <div className=" h-full w-screen pt-[54px]  " data-scroll-container>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
