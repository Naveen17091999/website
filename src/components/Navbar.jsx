import "./navbar.scss"
import amazon from "../assets/amazonLogo.png"
import { CiLocationOn } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import ReactCountryFlag from "react-country-flag"
import { BsCart2 } from "react-icons/bs";

function Navbar() {
    return (
        <div id="navbar">
            <header>
                <a href="#">
                    <img src={amazon} alt="" />
                    <span>.in</span>
                </a>

                <div id="address">
                    <CiLocationOn />
                    <div className="block">
                        <span>Delivering to Coimbatore 641004</span>
                        <span>Update location</span>
                    </div>
                </div>


                <div className="search">
                    <div className="all">
                        <span>All</span>
                        <MdArrowDropDown />
                    </div>
                    <input type="text" placeholder="Search Amazon.in" />
                    <div className="search_div">
                        <IoMdSearch size="25px" />
                    </div>
                </div>

                <div className="country">
                    <ReactCountryFlag countryCode="IN" svg />
                    <span>EN</span>
                    <MdArrowDropDown />
                </div>

                <div className="block">
                    <span>Hello, sign in</span>
                    <span>Account & Lists <MdArrowDropDown size="15px" /></span>

                </div>

                <div className="block">
                    <span>Returns</span>
                    <span>& Orders</span>
                </div>

                <div className="cart">
                    <BsCart2 size="30px"/>
                    <span id="count">0</span>
                    <span>Cart</span>
                </div>

            </header>
        </div>
    )
}

export default Navbar;