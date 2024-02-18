import React, { useState } from 'react'
import './Navbar.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

const Navbar = () => {


    const [navIcon, setNavIcon] = useState(true) //conditional rendring of hamburger icon



    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/Images/logo.png" alt="logo" className='img-fluid logo' />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setNavIcon(!navIcon)}>
                        {navIcon ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mainNavUl">
                            <li className="nav-item">
                                <Link className="nav-link px-3 active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to="/speciality">Speciality</Link>
                            </li>
                            <li className="nav-item  dropdown">
                                <a className="nav-link px-3 dropdown-toggle" data-bs-auto-close="outside" href="#project" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dishes
                                </a>
                                <ul className="dropdown-menu mt-2">
                                    <li className="dropend">
                                        <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#project">Main Course</a>
                                        <ul className="dropdown-menu  ">
                                            <li> <Link to="/dishes/biriyani" className="dropdown-item">Biriyani</Link> </li>
                                            <li> <Link to="/dishes/fried-rice" className="dropdown-item">Mixed Fired Rice</Link> </li>
                                            <li> <Link to="/dishes/jeera-rice" className="dropdown-item"> Jeera Rice</Link> </li>
                                        </ul>
                                    </li>
                                    <li className="dropend">
                                        <a className="dropdown-item dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown" href="#">Side Dish</a>
                                        <ul className="dropdown-menu  ">

                                            <li className="dropend">
                                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Chicken</a>
                                                <ul className="dropdown-menu ">
                                                    <li> <Link to="/dishes/chicken-dopiyaza" className="dropdown-item"> <span className="text-danger">Chicken</span> Dopiyaza</Link> </li>
                                                    <li> <Link to="/dishes/chicken-chap" className="dropdown-item"> <span className="text-danger">Chicken</span> Chap</Link> </li>
                                                    <li> <Link to="/dishes/chili-chicken" className="dropdown-item"> Chili  <span className="text-danger">Chicken</span> </Link> </li>
                                                    <li> <Link to="/dishes/chicken-butter-masala" className="dropdown-item"> <span className="text-danger">Chicken</span> Butter Masala </Link> </li>
                                                    <li> <Link to="/dishes/chicken-curry" className="dropdown-item">Chicen Curry </Link> </li>
                                                    <li> <Link to="/dishes/chicken-resala" className="dropdown-item"> <span className="text-danger">Chicken</span> Resala </Link> </li>
                                                </ul>
                                            </li>
                                            <li className="dropend">
                                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Mutton</a>
                                                <ul className="dropdown-menu ">
                                                    <li> <Link to="/dishes/mutton-chap" className="dropdown-item"> <span className="text-danger">Mutton</span> Chap</Link> </li>
                                                    <li> <Link to="/dishes/mutton-curry" className="dropdown-item"> <span className="text-danger">Mutton</span> Curry</Link> </li>
                                                </ul>
                                            </li>
                                            <li className="dropend">
                                                <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Paneer</a>
                                                <ul className="dropdown-menu ">
                                                    <li> <Link to="/dishes/chili-paneer" className="dropdown-item">Chili  <span className="text-danger">Paneer</span></Link> </li>
                                                    <li> <Link to="/dishes/paneer-butter-masala" className="dropdown-item"> <span className="text-danger">Paneer</span> Butter Masala</Link> </li>
                                                    <li> <Link to="/dishes/matar-paneer" className="dropdown-item">Matar  <span className="text-danger">Paneer</span> </Link> </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropend">
                                        <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Snacks</a>
                                        <ul className="dropdown-menu  ">
                                            <li> <Link to='/dishes/chicken-pakora' className="dropdown-item">Chicken Pakora</Link> </li>
                                            <li> <Link to='/dishes/chicken-nuggets' className="dropdown-item">Chicken Nuggets</Link> </li>
                                            <li> <Link to='/dishes/pizza' className="dropdown-item"> Pizza</Link> </li>
                                            <li> <Link to='/dishes/pasta-pizza' className="dropdown-item"> Pasta Pizza</Link> </li>
                                            <li> <Link to='/dishes/moghlai' className="dropdown-item"> Moghlai</Link> </li>
                                            <li> <Link to='/dishes/baby-corn-munchurian' className="dropdown-item"> Babycorn Munchurian</Link> </li>
                                            <li> <Link to='/dishes/paneer-pakora' className="dropdown-item">Paneer Pakora</Link> </li>
                                        </ul>
                                    </li>

                                    <li className="dropend">
                                        <a className="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" href="#">Beverages</a>
                                        <ul className="dropdown-menu  ">
                                            <li> <Link to="/dishes/cold-coffee" className="dropdown-item">Cold Coffee</Link> </li>
                                            <li> <Link to="/dishes/mango-lassi" className="dropdown-item"> Mango Lassi</Link> </li>
                                            <li> <Link to="/dishes/badam-lassi" className="dropdown-item">Badam Lassi</Link> </li>
                                            <li> <Link to="/dishes/watermelon-shake" className="dropdown-item">Watermelon Shake</Link> </li>
                                        </ul>
                                    </li>

                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link px-3" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
