import React, { useEffect,useState } from 'react';
import KakaoMapApi from '../components/api/KakaoMapApi';
import logo from '../assets/logo2.svg';
import style from '../css/MapPage.css';
import SearchResultCard from '../components/card/SearchResultCard';
import StoreInfoCard from '../components/card/StoreInfoCard';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import KakaoMapInfoWindow from '../components/api/KakaoMapInfoWindow';

const MapPage = () => {
    // start 페이지에서 검색문장 가져오기
    const moveValue = useLocation();
    const searchQurey = moveValue.state.values;
    console.log(searchQurey)

    const [apiData, setapiData] = useState({});

    //서버 통신 값 가져오기
    useEffect(() => {
        const fetchData = async () => {
          try {
            if(searchQurey.includes('location=')){
              const response = await axios.get(`/api/lunch-fy/search-loc?${searchQurey}`);
              setapiData(response.data)
            }
            else if(searchQurey.includes('key=')){
              const response = await axios.get(`/api/lunch-fy/search-key?${searchQurey}`);
              setapiData(response.data)
            } 
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

    return (
        <div>
            <header><img src={logo}/></header>
              <div className='LeftNav'>
                <StoreInfoCard apiData={apiData}/>
              </div>
            <KakaoMapApi/>
        </div>
    );
};

export default MapPage;