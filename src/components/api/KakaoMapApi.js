import React, { useEffect,useState } from 'react';
import { Map, MapMarker, MapInfoWindow} from 'react-kakao-maps-sdk';
import KakaoMapInfoWindow from './KakaoMapInfoWindow';

const KakaoMapApi = (props) => {

    return (
      <Map
        center={{ lat: 37.4023, lng: 126.9303 }}
        style={{ float: 'right', width: "85%", height: "890px"}}
        level={4}
      >
        <KakaoMapInfoWindow/>
      </Map>
    );
};

export default KakaoMapApi;