import React, { useEffect,useState } from 'react';
import KakaoMapApi from '../components/api/KakaoMapApi';
import logo from '../assets/logo2.svg';
import style from '../css/mappage.css';
import SearchResultCard from '../components/card/SearchResultCard';
import StoreInfoCard from '../components/card/StoreInfoCard';
import axios from 'axios';
import { Navigate, useLocation } from 'react-router-dom';

const MapPage = () => {
    // start 페이지에서 검색문장 가져오기
    const moveValue = useLocation();
    const searchQurey = moveValue.state.values;
    console.log(searchQurey);

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

    console.log(apiData)
    return (
        <div>
            {/* logo 클릭시에 메인으로 다시 이동 */}
            <header><img src={logo}/></header>
            <div className='container'>
                <div className='LeftNav'>
                  <StoreInfoCard/>
                </div>
                {/* respone 된 결과를 api로 전달 */}
                <KakaoMapApi/>  
            </div>                  
        </div>
    );
};

export default MapPage;
