import PlugginCard from "../PlugginCard/PlugginCard";
import "./PlugginsSection.css";
function PlugginsSection() {
  return (
    <div className="pt-[30px] lg:py-[100px]">
      <div className="p-[10px]">
        <div className="flex flex-col items-center">
          <h2 className="soraText w-full pb-[10px] text-center  text-[25px] font-[500]  leading-[45px] text-[#EEE5FF]  md:w-[55%]  md:text-[30px] md:leading-[50px] lg:text-[35px]  lg:leading-[55px] min-[1366px]:text-[40px] min-[1366px]:leading-[60px]">
            An All-Round Plugin With Powerful Features
          </h2>
          <div className="w-full md:w-[55%]">
            <p className="outfitText px-0 text-center text-base font-[300] leading-[30px] text-[#EEE5FFBD] md:text-lg lg:px-[30px]">
              Whether you're a seasoned web designer or just starting out,
              Motion Art for Elementor seamlessly integrates with the Elementor
              platform, providing you with a seamless and intuitive experience.
            </p>
          </div>
        </div>

        <div className="block pt-[50px]  md:grid md:grid-cols-2 lg:grid-cols-3">
          <div className="m-0 flex justify-center md:m-[10px] lg:justify-start">
            <PlugginCard
              img="./motionarteffect-img9.png"
              title="Light Weight"
              content="Motion Art for Elementor is designed to be lightweight."
            />
          </div>
          <div className="mt-[20px] flex justify-center md:m-[10px]  ">
            <PlugginCard
              img="./motionarteffect-img6.png"
              title="100% Responsive"
              content="Create a consistent visual experience across all devices."
            />
          </div>
          <div className="mt-[20px] flex justify-center md:col-span-2  md:m-[10px] lg:col-span-1  lg:justify-end">
            <PlugginCard
              img="./motionarteffect-img7.png"
              title="User Friendly Interface"
              content="Ensure a smooth experience for both applicants and administrators."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlugginsSection;
