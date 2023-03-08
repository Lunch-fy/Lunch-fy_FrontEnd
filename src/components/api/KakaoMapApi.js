import React, { useEffect,useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import SearchResultCard from '../card/SearchResultCard';
import KakaoMapInfoWindow from './KakaoMapInfoWindow';

// const KakaoMapApi = (props) => {
//   //마커 여러개 생성 중
//     let markers[] = props.index;
//     const position = props.position;
//   //커스텀오버레이 연결 test 필요
//     const CustomOveray = new kakao.maps.CustomOverlay({
//       position: position,
//       content: SearchResultCard,
//     });

const KakaoMapApi = (props) => {
    const propsData = props.resData;
    console.log(propsData);
    console.log("카카오맵 프롭스")


    return (
      <Map
        center={{ lat: 37.4028, lng: 126.9303 }}
        style={{ float: 'right', flex: "auto", width:"100%", height: "890px"}}
        level={4}
      >
         <KakaoMapInfoWindow/>
    </Map>
    );
};

export default KakaoMapApi;