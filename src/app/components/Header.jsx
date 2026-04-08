import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";

const Header = () => {
  return (
    <header className="flex items-center justify-between col-[content] py-5">
      <FaApple className="text-white" size={45} />
      <nav className="flex-1 flex justify-center">
        <ul className="flex gap-12 font-semibold text-white items-center">
          <li>
            <a href="">Mac</a>
          </li>
          <li>
            <a href="">Iphone</a>
          </li>
          <li>
            <a href="">Ipad</a>
          </li>
          <li className="bg-white text-[#b6ccda] px-5 rounded-full">
            <a href="">Iwatch</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4">
        <CiSearch className="text-white" size={30} />
        <span className="block w-[1px] h-[30px] bg-white"></span>
        <RiShoppingBag3Line className="text-white" size={30} />
      </div>
    </header>
  );
};

export default Header;
