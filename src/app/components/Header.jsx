import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      <FaApple size={45} color="white" />
      <nav>
        <ul>
          <li>
            <a href="">Mac</a>
          </li>
          <li>
            <a href="">Iphone</a>
          </li>
          <li>
            <a href="">Ipad</a>
          </li>
          <li>
            <a href="">Iwatch</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
        </ul>
      </nav>
      <div className="right">
        <CiSearch size={30} color="white" />
        <span></span>
        <RiShoppingBag3Line size={30} color="white" />
      </div>
    </header>
  );
};

export default Header;
