import React, { useEffect,useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import SearchResultCard from '../card/SearchResultCard';

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

    return (
      <Map
        center={{ lat: 37.4023, lng: 126.9303 }}
        style={{ float: 'right', width: "85%", height: "890px"}}
        level={4}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{color:"#000"}}>제주 아일랜드!</div>
         </MapMarker>

    </Map>
    );
};

export default KakaoMapApi;