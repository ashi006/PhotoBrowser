import $ from 'jquery';
import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaList, FaUsers, FaImages } from "react-icons/fa";

const Header = () => {
    const location = useLocation();
    const [activeMenu, setMenu] = useState("/");

    if ((location.pathname==="/" || location.pathname==="/users" || location.pathname==="/albums") && location.pathname!==activeMenu) 
        setMenu(location.pathname);

    useEffect(() => {
        initializeMenu();
        // eslint-disable-next-line
    }, []);

    const initializeMenu = () => {
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

        $("#navbarSupportedContent").on("click", "li", function(e) {
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
    
    window.onpopstate = () => {
        initializeMenu();
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
                    <li id="PHOTOS" className={activeMenu==="/" ? "nav-item active" : "nav-item"}> 
                        <Link to="/" className="nav-link" onClick={() => setMenu("/")}><FaList style={iconStyle} />All Photos</Link>
                    </li>
                    <li id="USERS" className={activeMenu==="/users" ? "nav-item active" : "nav-item"}>
                        <Link to="/users" className="nav-link" onClick={() => setMenu("/users")}><FaUsers style={iconStyle} />Categorize by Users</Link>
                    </li>
                    <li id="ALBUMS" className={activeMenu==="/albums" ? "nav-item active" : "nav-item"}>
                        <Link to="/albums" className="nav-link" onClick={() => setMenu("/albums")}><FaImages style={iconStyle} />Categorize by Albums</Link>
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