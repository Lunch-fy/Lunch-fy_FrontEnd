import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import SearchResultCard from '../card/SearchResultCard';

const KakaoMapApi = (props) => {
  //마커 여러개 생성 중
    let markers[] = props.index;
    const position = props.position;
  //커스텀오버레이 연결 test 필요
    const CustomOveray = new kakao.maps.CustomOverlay({
      position: position,
      content: SearchResultCard,
    });


    return (
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ position: 'absolute', width: "1150px", height: "890px", left: '290px',
        top: '134px'}}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{color:"#000"}}>제주 아일랜드!</div>
         </MapMarker>

    </Map>
    );
};

export default KakaoMapApi;