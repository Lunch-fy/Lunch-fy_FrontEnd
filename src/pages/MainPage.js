import axios from 'axios';
import { object } from 'prop-types';
import React, { useState, useEffect } from 'react';
import Middle from '../components/start/Middle';

const MainPage = () => {
    const bgZip = {
        1 : `/img/bg1.png`,
        2 : `/img/bg2.png`,
        3 : `/img/bg3.png`,
        4 : `/img/bg4.png`,
        5 : `/img/bg5.png`,
        6 : `/img/bg6.png`,
        7 : `/img/bg7.png`,
        8 : `/img/bg8.png`,
        9 : `/img/bg9.png`,
    }
    const rndBackImg = Math.floor(Math.random() * 9 + 1);

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         //api 제작 후 수정
    //         const response = await axios.get(`/api/lunch-fy/search-key?key=대림대학&tag=햄버거`);
    //         console.log(response.data);
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     };
    //     fetchData();
    //   }, []);
    
    return (
        <div style={{
            display: `flex`,
            justifyContent: `center`,
            width: `100vw`,
            height : `100vh`,
            backgroundImage: `url(${bgZip[rndBackImg]})`,
            backgroundRepeat: `no-repeat`,
            backgroundposition: `top center`,
            backgroundSize: `cover`,
        }}>
            <Middle/>
        </div>
    );
};

export default MainPage;