import React from 'react';

const ShowPicture = ({ picture }) => {
    return (
        <div className='bg-info border p-3 rounded'>
            <img src={picture.img} alt="" style={{width: "250px", height: "200px"}} />
            <p style={{fontSize: "20px"}}>{picture.desc}</p>
        </div>
    );
};

export default ShowPicture;