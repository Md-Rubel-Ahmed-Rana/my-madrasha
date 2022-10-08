import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowPicture from './ShowPicture';
import "./Gallery.css"

const Gallery = () => {
    const pictures = useLoaderData();
    return (
        <div className='m-4'>
            <h2>Welcome Our Gallery</h2>
            <div className='gallery m-2'>
                {
                    pictures.map((picture) => <ShowPicture picture={picture} key={picture.id} />)
                }
            </div>
        </div>
    );
};


export default Gallery;