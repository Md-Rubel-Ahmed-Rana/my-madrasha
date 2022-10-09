import React from 'react';
import { Link } from 'react-router-dom';
import "./Results.css"

const ShowResult = ({ allresult }) => {
    const { classes, year, result } = allresult;

    return (
        <div className='bg-success text-white d-flex justify-content-between align-items-center px-4 py-2 shadow-lg my-2' style={{borderRadius: "10px"}}>
            <h3>Class: {classes}</h3>
            <h5>Year: {year}</h5>
            <Link className=' download text-decoration-none text-white rounded border py-1 px-4' to={result} target="_blank" download>Download</Link>
        </div>
            
    );
};

export default ShowResult;