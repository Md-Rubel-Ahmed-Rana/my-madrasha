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
                <nav className={` ${open ? "d-none d-md-block" : null}`}>
                    <NavLink className="d-block d-md-inline" to="/home">Home</NavLink>
                    <NavLink className="d-block d-md-inline" to="/admission">Admission</NavLink>
                    <NavLink className="d-block d-md-inline" to="/results">Results</NavLink>
                    <NavLink className="d-block d-md-inline" to="/notice">Notice</NavLink>
                    <NavLink className="d-block d-md-inline" to="/gallery">Gallery</NavLink>
                    <NavLink className="d-block d-md-inline" to="/about">About</NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Header;