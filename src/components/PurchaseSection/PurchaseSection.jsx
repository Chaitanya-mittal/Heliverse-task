import { FaArrowRightLong } from "react-icons/fa6";
// import { Link } from "react-router-dom";
import "./PurchaseSection.css";
function PurchaseSection() {
  return (
    <div className="pt-[100px] md:grid md:grid-cols-5 ">
      <div className="p-[10px] max-[480px]:text-center md:col-span-3">
        <h1 className="soraText mb-[10px] text-[25px] font-[500] leading-[45px] text-[#EEE5FF] md:text-[30px]  md:leading-[50px] lg:text-[35px] lg:leading-[55px]">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h1>
        <p className="outfitText mb-[20px] mt-[5px] text-base font-[300] leading-8 text-[#EEE5FFBD] md:m-0 md:text-lg">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <div className=" mx-auto  flex justify-center pt-[10px] md:inline-block">
          <a
            href="/https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
            target="_blank"
            className="gradientBg soraText flex items-center rounded-[20px] p-[20px] font-[300] text-white  md:px-[35px] md:py-[20px] "
          >
            <span className="text-[20px] leading-[1.4rem]">
              Purchase From Envanto
            </span>
            <span className="ms-[20px]">
              <FaArrowRightLong />
            </span>
          </a>
        </div>
      </div>
      <div className="p-[10px] md:col-span-2">
        <img
          src="./motionarteffect-img5.png"
          alt="wand"
          className="mx-auto md:ms-auto"
        />
      </div>
    </div>
  );
}

export default PurchaseSection;
