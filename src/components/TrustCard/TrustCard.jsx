import "./TrustCard.css";
function TrustCard({ img }) {
  return (
    <div className="flex items-center ">
      <img src={img} alt="img1" className="rounded-full bg-[#0E0F1B]"></img>
      <div className="ps-[15px]">
        <img
          src="motionarteffect-img4.png"
          alt="img4"
          className="mb-[20px] ps-[-15px]"
        ></img>
        <p className="soraText text-sm text-[#EEE5FFBD]">
          <span className="font-bold">4.5</span> Score , 9 reviews
        </p>
      </div>
    </div>
  );
}

export default TrustCard;
