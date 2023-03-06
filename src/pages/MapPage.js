import React, { useEffect,useState } from 'react';
import KakaoMapApi from '../components/api/KakaoMapApi';
import logo from '../assets/logo2.svg';
import style from '../css/Mappage.css';
import TagButton from '../components/tag/TagButton';
import SearchResultCard from '../components/card/SearchResultCard';
import StoreInfoCard from '../components/card/StoreInfoCard';

const MapPage = () => {


    return (
        <div>
            <header> <image src={logo}/> </header>
            <div calssName='LeftNav'><StoreInfoCard/></div>
            <KakaoMapApi calssName='MapSection'></KakaoMapApi>
                  
        </div>
    );
};

export default MapPage;