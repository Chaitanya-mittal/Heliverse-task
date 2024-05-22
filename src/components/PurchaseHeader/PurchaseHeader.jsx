import "./PurchaseHeader.css";

function PurchaseHeader() {
  return (
    <div className="flex w-full items-center lg:grid lg:grid-cols-5  ">
      <div className="relative flex  w-[50%] items-center p-[10px] lg:col-span-1">
        <img src="MotionArtEffect-logo.png" alt="motion-logo" />
      </div>
      <div className="block w-[50%]  lg:hidden"></div>
      <div className="hidden  items-center justify-end p-[10px]  lg:col-span-4 lg:flex ">
        {" "}
        <a
          href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
          target="_blank"
          className="purchaseBtn font-outfit pointer-events-auto ms-[10px] rounded-[5px] border-2 border-white bg-white text-stone-900 hover:bg-transparent  hover:text-white  active:bg-transparent active:text-black "
        >
          <span>Purchase Now</span>
        </a>
      </div>
    </div>
  );
}

export default PurchaseHeader;
