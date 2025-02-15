import React, { useState } from "react";

// react icon
import { BiSearch, BiCaretUp, BiArrowToTop } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

const NavItem = () => {
    const [dropDown, setDropdown] = useState(false);

    return (
        <>
            <div className="Main-Navbar">
                <div className="LeftNav">
                    <ul className="Navbar">
                        <li className="NavItem"><NavLink className="NavLink nav-link" activeClassName="nav-link--active" to="/" >হোম</NavLink></li>
                        <li className="NavItem"><NavLink className="NavLink nav-link" activeClassName="nav-link--active" to="/theam"> থিম ডাউনলোড</NavLink></li>
                        <li className="NavItem"><NavLink className="NavLink nav-link" activeClassName="nav-link--active" to="service">সার্ভিস সমূহ</NavLink></li>
                        <li className="NavItem"><NavLink className="NavLink nav-link" activeClassName="nav-link--active" to="contact">যোগাযোগ</NavLink></li>
                        <li className="NavItem" onClick={() => setDropdown(!dropDown)}><NavLink className="NavLink" href="#">সব ক্যাটেগরি<i className="ms-1 icond" id={dropDown ? "iconDropdown" : ""}><BiCaretUp /></i></NavLink>
                            <ul className="DropDown" id={dropDown ? "ShowDropDown" : ""}><li className="NavItem"><NavLink className="NavLink nav-link" href="/home"> টেকনলজি</NavLink></li>
                                <li className="NavItem"><NavLink className="NavLink nav-link" activeClassName="nav-link--active" to="/about"> ফ্রিল্যান্সিং গপ্প</NavLink></li>
                                <li className="NavItem"><NavLink className="NavLink nav-link" activeClassName="nav-link--active" to="/about">Programming</NavLink></li>
                                <li className="NavItem"><NavLink className="NavLink nav-link" activeClassName="nav-link--active" to="/about">Tips and Tricks</NavLink></li>
                                <li className="NavItem"><NavLink className="NavLink nav-link" activeClassName="nav-link--active" to="/about">Tech News</NavLink></li>
                                <li className="NavItem"><NavLink className="NavLink nav-link" activeClassName="nav-link--active" to="/about">Web Development</NavLink></li>
                            </ul>
                        </li>
                        <li className="NavItem"><NavLink className="NavLink nav-link" activeClassName="nav-link--active" to="/save-post">পোস্ট করুন</NavLink></li>
                    </ul>
                </div>
                <div className="RightNav">
                    <ul className="Navbar">
                        <li className="NavItem">
                            <BiSearch />
                        </li>
                        <li className="NavItem">
                            <a className="NavLink text-light" href="">
                                <CgProfile size="20" />
                            </a>
                        </li>
                        {/* <li className="NavItem">
                            <BiSearch />
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavItem;
