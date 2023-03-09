import React, { useEffect, useState } from 'react';
import {MapInfoWindow} from 'react-kakao-maps-sdk';

const KakaoMapInfoWindow = (props) => {

    const [shopInfo, setShopInfo] = useState({
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
    useEffect(() => {
        const propsData = props.resData;
        setShopInfo(propsData)
    },[]);

    return (
        <MapInfoWindow
            position={{
                lat: shopInfo.y,
                lng: shopInfo.x,
                }}>
            <div style={{color: "#000" }}>
                {shopInfo.placeName}
            </div>
        </MapInfoWindow>
    );
};

export default KakaoMapInfoWindow;