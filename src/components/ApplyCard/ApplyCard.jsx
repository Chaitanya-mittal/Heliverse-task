import "./ApplyCard.css";

function ApplyCard({ name, description, img }) {
  return (
    <div className="gradientBg2 rounded-[20px] p-[30px]">
      <h3 className="soraText mb-[10px] text-[20px] font-[500] leading-[40px] text-[#EEE5FF] md:text-[25px] md:leading-[45px]">
        Apply on {name}
      </h3>
      <p className="outfitText text-base font-[300] leading-[30px] text-[#EEE5FFBD] md:text-[18px]">
        {description}
      </p>
      <div className="mt-[30px] flex justify-center">
        <img src={img} alt="cardImg" />
      </div>
    </div>
  );
}

export default ApplyCard;
