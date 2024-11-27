import React from 'react';
import './header.css';
import logo from '../Assets/logo.png';
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiTwotoneShopping } from "react-icons/ai";
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";

export const Header = () => {
    const [datas, setDatas] = useState([]); // State to display filtered data
    const [filter, setFilter] = useState([]); // State to store all fetched data
    const [toggle, setToggle] = useState(false);
    const [toggle1, setToggle1] = useState(false);
    const [showResults, setShowResults] = useState(false);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                setDatas(data.products); // Store the products array
                setFilter(data.products); // Keep a copy for filtering
            })
            .catch((err) => console.error(err));
    }, []);

    const handle = (e) => {
        const value = e.target.value.toLowerCase(); // Capture input value
        if (value === "") {
            setDatas([]); // Hide results when input is cleared
            setShowResults(false); // Hide results
        } else {
            const res = filter.filter((f) =>
                f.title.toLowerCase().includes(value)
            );
            setDatas(res); // Update filtered results
            setShowResults(true); // Show results
        }
    };

    const notify = () => toast("Cart is empty!");
    const menu = [
        {
            "name": "Cloth & Shoes",
            "link": "/nopage",
        },
        {
            "name": "Jewelry & Accessories",
            "link": "/about",
        },
        {
            "name": "Home & Living",
            "link": "/blog",
        },
        {
            "name": "Arts & Collections",
            "link": "/blog",
        },
        {
            "name": "Wedding & Party",
            "link": "/blog",
        }
    ]

    return (
        <header className='header-blk'>
            <div className='header-flex'>
                <div className='container'>
                    <div className="haeder-pare d-flex align-items-center">
                        <div className='logo'>
                            <img src={logo}></img>
                        </div>
                        <div className='burger'></div>
                        <div className='search-blk d-flex'>
                            <div className="search-par">
                                <div className="drp-blk">
                                    <button type='button' onClick={() => setToggle((prev) => !prev)}>All Categories <MdKeyboardArrowDown /></button>
                                    {
                                        toggle &&
                                        <div className="submenu">
                                            <ul>
                                                <li><Link to='/about'>Shoes</Link></li>
                                                <li><Link to='/about'>Arts & Collections</Link></li>
                                            </ul>
                                        </div>
                                    }
                                </div>
                                <div className="input-blk">
                                    <input type='text' placeholder='Serach anything' onChange={handle}></input>
                                    <FaSearch />
                                    {
                                        showResults &&
                                        <div className="search-results">
                                            <ul>
                                                {datas.map((d, i) => (
                                                    <li><Link to="/about" className='d-flex'>
                                                        <div className="pd-img">
                                                            <img src={d.thumbnail} alt="" />
                                                        </div>
                                                        <div className="pd-details">
                                                            <span>{d.title}</span>
                                                            <b>${d.price}</b>
                                                        </div>
                                                    </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    }
                                </div>
                            </div>
                            <span>Get help</span>
                        </div>
                        <div className="profile-cart">
                            <ul className='d-flex'>
                                <li><button onClick={() => setToggle1((prev) => !prev)}><RiAccountCircleLine />Account</button>
                                    {
                                        toggle1 &&
                                        <div className="submenu">
                                            <ul>
                                                <li><Link to='/about'>View</Link></li>
                                                <li><Link to='/about'>Logout</Link></li>
                                            </ul>
                                        </div>
                                    }
                                </li>
                                <li><button onClick={notify}><AiTwotoneShopping />Shopping</button><span>0</span></li>
                                <ToastContainer position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="menus-blk">
                    <div className="container">
                        <ul className='d-flex'>
                            {menu?.map((item, index) => (
                                <li>
                                    <NavLink to={item.link} className={({ isActive }) => (isActive ? "active" : "")}>{item?.name}</NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>

    )
}
