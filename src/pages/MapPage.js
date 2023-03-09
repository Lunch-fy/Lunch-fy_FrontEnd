import React, { useEffect,useState } from 'react';
import KakaoMapApi from '../components/api/KakaoMapApi';
import logo from '../assets/logo2.svg';
import style from '../css/mappage.css';
import SearchResultCard from '../components/card/SearchResultCard';
import StoreInfoCard from '../components/card/StoreInfoCard';
import Spinners from '../components/loadSpinners/Spinners';
import axios from 'axios';
import useLocation from 'react-router-dom';

const MapPage = () => {
    // start 페이지에서 검색문장 가져오기
    const moveValue = useLocation();
    const searchQurey = moveValue.state.qurey;
    const nowLocation = moveValue.state.location;

    //response 값 할당 state
    const [resData, setResData] = useState({
      placeName: "",
      category: "",
      distance: "",
      phone: "",
      url: "",
      address: "",
      roadAddress: "",
      x: "",
      y: "",
    });
    const [resLocation, setResLocation] = useState("대림대학교");

    //서버 통신 값 가져오기
    useEffect(() => {
        const fetchData = async () => {
          try {
            if(searchQurey.includes('location=')){
              const response = await axios.get(`/api/lunch-fy/search-loc?${searchQurey}`);
              const location = await axios.get(`/api/lunch-fy/xy-loc?location=${nowLocation}`);
              setResData(response.data)
              setResLocation(location.data)
            }
            else if(searchQurey.includes('key=')){
              const response = await axios.get(`/api/lunch-fy/search-key?${searchQurey}`);
              const location = await axios.get(`/api/lunch-fy/xy-key?key=${nowLocation}`);
              setResData(response.data)
              setResLocation(location.data)
            } 
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

      if(resData[0]){
        return (
          <div>
              {/* logo 클릭시에 메인으로 다시 이동 */}
              <header><img src={logo}/></header>
              <div className='container'>
                  <div className='LeftNav'>
                    <StoreInfoCard resData={resData}/>
                  </div>
                  {/* respone 된 결과를 api로 전달 */}
                  <KakaoMapApi resData={resData} nowLocation={resLocation}/>  
              </div>                  
          </div>
        );
       }
      else{
        return(
          <>
          <Spinners/>
          </>
        )
      }
};

export default MapPage;
