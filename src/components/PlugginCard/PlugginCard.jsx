function PlugginCard({ img, content, title }) {
  return (
    <div className="gradientBg2  w-full rounded-[20px] p-[30px] pb-[40px] ">
      <div className="mb-[20px] ms-[-40px] mt-[-20px]">
        <img src={img} alt="features"></img>
      </div>
      <h2 className="soraText mb-[10px] text-[20px] font-[500] leading-[45px] text-[#EEE5FF] md:text-[23px] lg:text-[25px]">
        {title}
      </h2>
      <p className="outfitText text-base font-[300] leading-[30px] text-[#EEE5FFBD] md:text-lg">
        {content}
      </p>
    </div>
  );
}

export default PlugginCard;
