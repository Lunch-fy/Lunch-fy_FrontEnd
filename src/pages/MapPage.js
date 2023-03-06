import React, { useEffect,useState } from 'react';
import KakaoMapApi from '../components/api/KakaoMapApi';
import logo from '../assets/logo2.svg';
import style from '../css/Mappage.css';
import SearchResultCard from '../components/card/SearchResultCard';
import StoreInfoCard from '../components/card/StoreInfoCard';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const MapPage = () => {
    const moveValue = useLocation();
    const searchQurey = moveValue.state.values;
    const navigate = useNavigate();

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

    const onclickLogo = () => {
        navigate("/")
    }

    return (
        <div>
            {/* logo 클릭시에 메인으로 다시 이동 */}
            <header> <img src={logo} onClick={onclickLogo}/> </header>
            <div className='LeftNav'><StoreInfoCard /></div>
            {/* respone 된 결과를 api로 전달 */}
            <KakaoMapApi className='MapSection' props={response.data}></KakaoMapApi>                  
        </div>
    );
};

export default MapPage;