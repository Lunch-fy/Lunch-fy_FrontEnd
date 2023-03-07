import React, { useEffect, useState } from 'react';
import {MapInfoWindow} from 'react-kakao-maps-sdk';

const KakaoMapInfoWindow = () => {
    return (
        <MapInfoWindow
            position={{
                lat: 37.4028, 
                lng: 126.9309,
                }}>
            <div style={{ padding: "5px", color: "#000" }}>MapInfoWindow 예</div>
        </MapInfoWindow>
    );
};

export default KakaoMapInfoWindow;