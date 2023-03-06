import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KakaoMapApi = () => {


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