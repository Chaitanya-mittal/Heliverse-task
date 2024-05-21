import "./Intro.css";
function Intro() {
  return (
    <div className="my-[80px] flex w-full  flex-col md:flex-row ">
      <div className="flex w-full justify-center p-[10px] md:block md:w-[25%] ">
        <div className=" ps-[15px] max-[1366px]:max-w-[138.106px] md:max-w-[150px]">
          <p className="gradientText soraText mb-[10px]  text-[18px] font-[500] leading-7">
            Transform Your Website
          </p>
          <p className="outfitText text-[18px] font-[200] leading-6">
            With Motion Art Effect
          </p>
        </div>
        <div className="hidden md:col-auto md:block"></div>
      </div>
      <div className=" w-full p-[10px]  max-[480px]:text-center md:w-[54.33%]">
        <div className="mb-[15px] me-[10px] text-[35px] font-[500] leading-[55px] md:text-[40px] md:leading-[60px] lg:text-[55px] lg:leading-[75px] min-[1366px]:text-[65px] min-[1366px]:leading-[85px]">
          <p className="soraText  text-[#EEE2FF]">
            Attract Your Visitors Attention With Colorful{" "}
          </p>
          <p className="gradientText soraText pb-[10px] ">Motion Art Effect</p>
        </div>
        <p className="outfitText mt-[10px] text-base font-[300] leading-[26px] text-[#EEE5FFBD] md:text-[18px] md:leading-[1.6em] lg:pe-[100px]">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution for seamlessly integrating captivating animations
          into your website.
        </p>
      </div>
      <div className="hidden md:w-[20%]"></div>
    </div>
  );
}

export default Intro;
