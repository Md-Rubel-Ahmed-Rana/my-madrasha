import React from 'react';
import "./Results.css"

const ShowResult = ({ allresult }) => {
    const {id,  classes, year, file } = allresult;
    return (
        <div className='bg-success text-white d-flex justify-content-between align-items-center px-4 py-2 shadow-lg my-2' style={{borderRadius: "10px"}}>
            <h3>Serial: {id}</h3>
            <h3>Class: {classes}</h3>
            <h5>Year: {year}</h5>
            <a className='download text-decoration-none text-white rounded border py-1 px-4' href={file} download>Download</a>
        </div>
            
    );
};

export default ShowResult;