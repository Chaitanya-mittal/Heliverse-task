import TrustCard from "../TrustCard/TrustCard";
import "./TrustedBox.css";
function TrustedBox() {
  return (
    <div className="w-full p-[10px]">
      <div className="outfitText mb-[20px] text-center text-[22px] leading-5 text-[#EEE5FF]">
        Trusted by thousands of users around the world
      </div>
      <div className="block pt-[50px] md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 ">
        <div className="flex justify-center lg:justify-start">
          <TrustCard img="./motionarteffect-img2.png" />
        </div>
        <div className="mt-[50px] flex justify-center md:mt-[0]">
          <TrustCard img="./motionarteffect-img1.png" />
        </div>
        <div className="mt-[50px] flex justify-center   md:col-span-2 lg:col-span-1 lg:mt-[0] lg:justify-end">
          <TrustCard img="./motionarteffect-img3.png" />
        </div>
      </div>
    </div>
  );
}

export default TrustedBox;
