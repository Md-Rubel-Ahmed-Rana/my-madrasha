import React from 'react';
import "./Home.css"
import image1 from "../../images/image-5.png"

const Home = () => {
    return (
        <div className='d-md-flex m-2 gap-4 p-3'>
            <div className='home'>
                <img src={image1} alt="" />
            </div>
            <div className='simple-info'>
                <h4 className='fw-bolder'>Biswanath Darul Ulum Islamiya Kamil Madrasha</h4>
                <p>Assalamu Alaikum, this is the official website of our madrasha. Our madrasha is one of the famous institute is Bangladesh. We have super expart teacher. Teachers of our madrasha are trained from government institute. We provide a lot of opportunity to our students specially the talented student gets the super help from us and gets schoolarship. And who come from poor family we always try support him/her with financially.
                </p>
            </div>
        </div>
    );
};

export default Home;