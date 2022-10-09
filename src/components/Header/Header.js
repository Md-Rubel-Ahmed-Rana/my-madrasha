import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => {
        setOpen(!open)
    }
    const style = ({ isActive }) => {
    return {
        color: isActive ? "white" : "inherit",
        backgroundColor: isActive ? "blue" : "inherit",
        borderRadius: isActive ? "5px" : "inherit",
    };
}
    return (
        <div className='d-md-flex px-md-5 px-3 py-2 justify-content-between align-items-center  bg-danger'>
            <div className='d-flex justify-content-between align-items-center'>
                <h2 className='text-white'>B.D.U.I Kamil Madrasha</h2>
                <div onClick={handleOpen} className='d-md-none text-white cursor-pointer'>
                    {
                        open ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} /> 
                    }
                </div>
            </div>
            <div>
                <nav className={` ${open ? "d-none d-md-block mt-md-0 mt-2" : null}`}>
                    <NavLink style={style} className="d-block d-md-inline px-2 py-1 text-white" to="/home" >Home</NavLink>
                    <NavLink style={style} className="d-block d-md-inline px-2 py-1 text-white" to="/admission">Admission</NavLink>
                    <NavLink style={style} className="d-block d-md-inline px-2 py-1 text-white" to="/results">Results</NavLink>
                    <NavLink style={style} className="d-block d-md-inline px-2 py-1 text-white" to="/notice">Notice</NavLink>
                    <NavLink style={style} className="d-block d-md-inline px-2 py-1 text-white" to="/gallery">Gallery</NavLink>
                    <NavLink style={style} className="d-block d-md-inline px-2 py-1 text-white" to="/about">About</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;