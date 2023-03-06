import React, { useEffect,useState } from 'react';
import KakaoMapApi from '../components/api/KakaoMapApi';
import logo from '../assets/logo2.svg';
import style from '../css/MapPage.css';
import SearchResultCard from '../components/card/SearchResultCard';
import StoreInfoCard from '../components/card/StoreInfoCard';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const MapPage = () => {
    const moveValue = useLocation();
    const searchQurey = moveValue.state.values;

    useEffect(() => {
        const fetchData = async () => {
          try {
            //api 제작 후 수정
            const response = await axios.get(`/api/lunch-fy/search-key?${searchQurey}`);
            console.log(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);
    return (
        <div>
            <header> <img src={logo}/> </header>
            <div className='LeftNav'><StoreInfoCard/></div>
            <KakaoMapApi className='MapSection'></KakaoMapApi>                  
        </div>
    );
};

export default MapPage;