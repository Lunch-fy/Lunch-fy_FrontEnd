import React, { useEffect,useState } from 'react';
import KakaoMapApi from '../components/api/KakaoMapApi';
import logo from '../assets/logo2.svg';
import style from '../css/MapPage.css';
import SearchResultCard from '../components/card/SearchResultCard';
import StoreInfoCard from '../components/card/StoreInfoCard';

const MapPage = () => {


    return (
<<<<<<< HEAD
        <>
            <header> <img src={logo}/> </header>
            <div className='LeftNav'><StoreInfoCard/></div>
            <KakaoMapApi className='MapSection'></KakaoMapApi>  
        </>
=======
        <div>
            <header> <img src={logo}/> </header>
            <div className='LeftNav'><StoreInfoCard/></div>
            <KakaoMapApi className='MapSection'></KakaoMapApi>                  
        </div>
>>>>>>> 785764dfbf3034eb067bd377723c518706f96f63
    );
};

export default MapPage;