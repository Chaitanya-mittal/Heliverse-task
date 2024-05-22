import Navbar from "../Navbar/Navbar";
import { useEffect } from "react";
import Main from "../Main/Main";
import LocomotiveScroll from "locomotive-scroll";
function AppLayout() {
  useEffect(() => {
    new LocomotiveScroll();
  }, []);
  return (
    <div className="h-screen w-screen ">
      <Navbar />
      <div className=" h-full w-screen pt-[54px]  " data-scroll-container>
        <Main />
      </div>
    </div>
  );
}

export default AppLayout;
