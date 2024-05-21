import ApplySection from "../ApplySection/ApplySection";
import Footer from "../Footer/Footer";
import Intro from "../Intro/Intro";
import PlugginsSection from "../PlugginsSection/PlugginsSection";
import PurchaseHeader from "../PurchaseHeader/PurchaseHeader";
import PurchaseSection from "../PurchaseSection/PurchaseSection";
import SupporterSection from "../SupporterSection/SupporterSection";
import TrustedBox from "../TrustedBox/TrustedBox";

function Home() {
  return (
    <div className=" pointer-events-none relative top-0  mx-auto flex   h-full max-w-[80rem] flex-col items-center pt-[20px] text-lg text-white ">
      <PurchaseHeader />
      <Intro />
      <TrustedBox />
      <PurchaseSection />
      <ApplySection />
      <SupporterSection />
      <PlugginsSection />
      <Footer />
    </div>
  );
}

export default Home;
