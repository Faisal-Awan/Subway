import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (

        <div className="postionSticky">

            <nav className="navbar navbar-expand-lg navbar-dark">

                <div className="container">

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item mr-7">
                                <NavLink className="nav-link" exact to="/">
                                    6 Inch
                                </NavLink>
                            </li>
                            <li className="nav-item mr-30px">
                                <NavLink className="nav-link" exact to="./Chouto">
                                    CHOTU
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="./Drinks">
                                    DRINKS
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="./FootLong">
                                    FOOT LONG
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="./Fountaindrink">
                                    FOUNTAIN DRINK
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="./Platter">
                                    PLATTER
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="./Addon">
                                    ADD ON
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="./Deals">
                                    DEALS
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="./Combo">
                                    COMBO
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" exact to="./Salad">
                                    SALAD
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>

        </div>


    )
}

export default Navbar
