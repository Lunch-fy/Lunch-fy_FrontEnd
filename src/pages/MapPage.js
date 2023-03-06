import React, { useEffect,useState } from 'react';
import KakaoMapApi from '../components/api/KakaoMapApi';
import logo from '../assets/logo2.svg';
import TagButton from '../components/tag/TagButton';
import SearchResultCard from '../components/card/SearchResultCard';
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