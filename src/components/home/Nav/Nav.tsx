import logo from "../../../assets/CML.png";
import { FaTwitter, FaInstagram} from "react-icons/fa";

function Nav() {
  return (
    <div className="h-24 px-8 pt-4 flex flex-col items-center justify-center">
      <div className="flex">
        <a
          href="https://twitter.com/CryptoMegaLeag"
          target="_blank"
          className="cursor-default"
        >
          <FaTwitter className="w-6 h-6 mx-2 cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/cryptomegaleague/"
          className="cursor-default"
          target="_blank"
        >
          <FaInstagram className="w-6 h-6 mx-2 cursor-pointer" />
        </a>
      </div>
      <h1 className="pb-6 text-lg">Crypto Mega League</h1>
    </div>
  );
}

export default Nav;
