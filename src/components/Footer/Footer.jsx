import "./Footer.css";
function Footer() {
  return (
    <footer className="gradientBg outfitText pointer-events-auto relative bottom-0 z-[100] w-screen pt-[10px]  text-sm">
      <div className=" mx-auto grid max-w-[80rem] grid-cols-1 lg:grid-cols-2">
        <div className="order-3 p-[10px] lg:order-1">
          <p className="text-center text-[#EEE5FFB8] lg:text-left">
            © 2023 Copywrite. All rights reserved by QodeMatrix
          </p>
        </div>
        <ul className="order-1 mx-[-15px] flex justify-center p-[10px] lg:order-3 lg:justify-end">
          <li className="mx-[15px] text-[#EEE5FFB8] transition-all duration-[0.3s] hover:text-[#EEE5FF]">
            <a
              href="https://qodematrix.com/docs/motion-art-for-elementor/"
              className="block"
              target="_blank"
            >
              Documentation
            </a>
          </li>
          <li className="mx-[15px] text-[#EEE5FFB8] transition-all duration-[0.3s] hover:text-[#EEE5FF]">
            <a
              href="https://qodematrix.com/docs/motion-art-for-elementor/"
              className="block"
              target="_blank"
            >
              Support
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
