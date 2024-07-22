import ReactCountryFlag from "react-country-flag";
import { CiLocationOn } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoMdArrowDropdown, IoMdSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import amazonLogo from "../../assets/amazonLogo.png";
import "./navbar.scss";
function Navbar() {
    return (
        <div id="Navbar">
            <header>
                <a href="#">
                    <img src={amazonLogo} alt="" />
                    <span id="logo-link">.in</span>
                </a>

                <div className="location">
                    <CiLocationOn className="icons" />
                    <div className="address">
                        <p id="city">Delivering to Coimbatore 641014</p>
                        <p>Update location</p>
                    </div>
                </div>


                <div className="search">
                    <div className="all">
                        <span>All</span><IoMdArrowDropdown />
                    </div>

                    <input type="text" placeholder="Search Amazon.in" />

                    <div id="search">
                        <IoMdSearch className="drop_icon" />
                    </div>
                </div>

                <div className="country_code" >
                    <ReactCountryFlag countryCode="IN" svg />
                    <span>EN</span>
                    <IoMdArrowDropdown className="drop_icon" />
                </div>

                <div className="account">
                    <p>Hello, sign in</p>
                    <span>Accounts & Lists <IoMdArrowDropdown className="drop_icon" /></span>

                </div>

                <div className="account">
                    <p>Returns</p>
                    <span>& Orders</span>
                </div>

                <div className="cart">
                    <LuShoppingCart id="cart_icon" size="35px" />
                    <span>cart</span>
                </div>

            </header>
            <nav>
                <span><FiMenu size="20px" /> All</span>
                <span>Fresh</span>
                <span>Amazon miniTV</span>
                <span>Sell</span>
                <span>Best Sellers</span>
                <span>Today's Deals</span>
                <span>Mobiles</span>
                <span>Customer Service</span>
                <span>Prime <IoMdArrowDropdown id="icons" /></span>
                <span>Fashion</span>
                <span>New Releases</span>
                <span>Amazon Pay</span>
                <span>Home & Kitchen</span>
                <span>Computers</span>
                <span>Books</span>
            </nav>
            <footer>

            </footer>
        </div>
    )
}





export default Navbar;