

import sitelogo from "../assets/images/main_logo.svg"


export function Navbar() {
    return (
        <div className="navbar-wrapper">
            <div className="container custom-container-lg">
                <div className="nav-inner ">
                    <a href="" className="main_logo"><img src={sitelogo} alt="" /></a>
                    <div id="nav_collapse" className="nav-collapse side-menu">
                        <ul>
                            <li><a href="" className="nav-links-hover">Home</a></li>
                            <li><a href="" className="nav-links-hover">Services</a></li>
                            <li><a href="" className="nav-links-hover">Blogs</a></li>
                            <li><a href="" className="nav-links-hover">Pages</a></li>
                            <li><a href="" className="nav-links-hover">Our Team</a></li>
                            <li><a href="" className="nav-links-hover">Dashboard</a></li>
                        </ul>
                    </div>
                    <button className="ham_btn"><i className="icon-hamburger"></i></button>
                    {/* icon-ham_close_btn */}
                </div>
            </div>
        </div>
    )
}