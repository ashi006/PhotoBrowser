import $ from 'jquery';
import { useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaList, FaUsers, FaImages } from "react-icons/fa";

const Header = () => {
    const location = useLocation();

    useEffect(() => {
        initializeMenu();
        // eslint-disable-next-line
    }, []);

    const initializeMenu = () => {
        if (location.pathname==="/" || location.pathname==="/users" || location.pathname==="/albums") {
            var tabsNewAnim = $('#navbarSupportedContent');
            var activeItemNewAnim = tabsNewAnim.find('.active');
            var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
            var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
            var itemPosNewAnimTop = activeItemNewAnim.position();
            var itemPosNewAnimLeft = activeItemNewAnim.position();
            $(".hori-selector").css({
                "display": "inline-block",
                "top":itemPosNewAnimTop.top + "px", 
                "left":itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        } else {
            $(".hori-selector").css({"display": "none"});
        }
        $("#navbarSupportedContent").on("click","li",function(e) {
            $('#navbarSupportedContent ul li').removeClass("active");
            $(this).addClass('active');
            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();
            $(".hori-selector").css({
                "display": "inline-block",
                "top":itemPosNewAnimTop.top + "px", 
                "left":itemPosNewAnimLeft.left + "px",
                "height": activeWidthNewAnimHeight + "px",
                "width": activeWidthNewAnimWidth + "px"
            });
        });
    }

    window.addEventListener('resize', initializeMenu);

    const openMobileMenu = () => {
        $(".navbar-collapse").slideToggle(300);
        initializeMenu();
    }

    return (
        <nav className="navbar navbar-expand-custom navbar-mainbg">
            <span className="navbar-title">PhotoBrowser</span>
            <button className="navbar-toggler" type="button" onClick={openMobileMenu} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FaBars />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                    <li className={location.pathname==="/" ? "nav-item active" : "nav-item"}>
                        <Link to="/" className="nav-link"><FaList style={iconStyle} />All Photos</Link>
                    </li>
                    <li className={location.pathname==="/users" ? "nav-item active" : "nav-item"}>
                        <Link to="/users" className="nav-link"><FaUsers style={iconStyle} />Categorize by Users</Link>
                    </li>
                    <li className={location.pathname==="/albums" ? "nav-item active" : "nav-item"}>
                        <Link to="/albums" className="nav-link"><FaImages style={iconStyle} />Categorize by Albums</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

const iconStyle = {
    marginRight: '10px',
    fontSize:'16px', 
    verticalAlign: 'middle'
};

export default Header