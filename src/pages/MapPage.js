import React, { useEffect,useState } from 'react';
import KakaoMapApi from '../components/api/KakaoMapApi';
import logo from '../assets/logo2.svg';
import style from '../css/Mappage.css';
import SearchResultCard from '../components/card/SearchResultCard';
import StoreInfoCard from '../components/card/StoreInfoCard';

const MapPage = () => {


    return (
        <div>
            <header> <img src={logo}/> </header>
            <div className='LeftNav'><StoreInfoCard/></div>
            <KakaoMapApi className='MapSection'></KakaoMapApi>                  
        </div>
    );
};

export default MapPage;