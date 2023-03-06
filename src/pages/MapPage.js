import React, { useEffect,useState } from 'react';
import KakaoMapApi from '../components/api/KakaoMapApi';
import logo from '../assets/logo2.svg';
import style from '../css/mappage.css';
import TagButton from '../components/tag/TagButton';
import SearchResultCard from '../components/card/SearchResultCard';
import StoreInfoCard from '../components/card/StoreInfoCard';

const MapPage = () => {


    return (
        <div>
            <header> <img src={logo}/> </header>
            <div class='LeftNav'></div>
            <div calss='MapSection'><KakaoMapApi></KakaoMapApi></div>
                  
        </div>
    );
};

export default MapPage;