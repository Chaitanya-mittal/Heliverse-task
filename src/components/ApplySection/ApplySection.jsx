import "./ApplySection.css";
import ApplyCard from "../ApplyCard/ApplyCard";
function ApplySection() {
  return (
    <div className="pt-[80px] lg:py-[100px]">
      <div className="soraText p-[10px]">
        <h2 className="flex flex-col pb-[10px] text-center text-[25px] font-[500] leading-[55px] text-[#EEE5FF]  md:text-[30px] md:leading-[50px] lg:text-[35px]  lg:leading-[55px] min-[1366px]:text-[40px] min-[1366px]:leading-[60px]">
          <span>Apply On Any Section Or Enable</span>
          <span>For Whole Page</span>
        </h2>
        <div className="pt-[50px] md:grid md:grid-cols-2">
          <div className="m-0 pt-[10px] md:mx-[10px] md:mb-[120px]">
            <ApplyCard
              name="Section"
              description="Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. "
              img="./motionarteffect-img11.png"
            />
          </div>
          <div className="m-0 pb-[10px] pt-[20px] md:mt-[80px] md:px-[10px]">
            <ApplyCard
              name="Page"
              description="Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation."
              img="./motionarteffect-img10.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplySection;
