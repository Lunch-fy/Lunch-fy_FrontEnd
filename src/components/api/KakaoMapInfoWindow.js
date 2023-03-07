import React, { useEffect, useState } from 'react';
import {MapInfoWindow} from 'react-kakao-maps-sdk';

const KakaoMapInfoWindow = (props) => {

    return (
        <MapInfoWindow
            position={{
                lat: null, 
                lng: null,
                }}>
            <div style={{ padding: "5px", color: "#000" }}>Hello World!</div>
        </MapInfoWindow>
    );
};

export default KakaoMapInfoWindow;