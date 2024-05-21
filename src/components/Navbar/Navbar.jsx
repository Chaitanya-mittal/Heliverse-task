import "./Navbar.css";
function Navbar() {
  return (
    <nav className="fixed z-10 flex h-[54px] w-full items-center justify-between bg-[#262626] ps-[10px]">
      <img
        src="logo.svg"
        alt="logo"
        className="w-[8rem] ps-[10px] md:w-[10rem]"
      />
      <div className="flex h-full items-center justify-center pe-[10px] md:px-[20px]">
        <a
          href="https://codecanyon.net/checkout/102342108/create_account"
          className="buyBtn font-helvetica rounded-[4px] border-0 bg-[#82b440]  px-[20px] py-[5px] font-[300] text-white hover:bg-[#6f9a37]"
        >
          Buy now
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
