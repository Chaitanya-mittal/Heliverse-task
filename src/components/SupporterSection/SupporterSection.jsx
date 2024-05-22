import "./SupporterSection.css";

function SupporterSection() {
  return (
    <div className="w-full p-[20px]">
      <div className="gradientBg2 flex w-full flex-col items-center rounded-[20px] px-[30px] py-[50px]">
        <h2 className="soraText mb-[20px] w-full text-center text-[20px] font-[500] leading-[40px]  text-[#EEE5FF] md:text-[25px]">
          Supported by All Popular Browsers
        </h2>
        <p className="outfitText w-full text-center text-[18px] font-[300] leading-[30px] text-[#EEE5FFBD] md:max-w-[427px] lg:w-[39%]">
          Rest assured, Motion Art is designed to be compatible with all major
          web browsers.
        </p>
        <div className="mt-[15px] flex w-full justify-center pt-[15px]">
          <img
            src="./motionarteffect-img8.png"
            alt="browsers"
            className="w-[90%]  max-w-full md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default SupporterSection;
