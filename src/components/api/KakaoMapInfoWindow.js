import React, { useEffect, useState } from 'react';
import {CustomOverlayMap, MapInfoWindow, MapMarker} from 'react-kakao-maps-sdk';
import CloseIcon from '@mui/icons-material/Close';
import style from '../../css/KakaoCustomOverlay.css';

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
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const propsData = props.resData;
        setShopInfo(propsData)
    },[]);

    return (
        <>
            <MapMarker position={{ lat: shopInfo.y, lng: shopInfo.x,}} onClick={() => setIsOpen(true)}/>
            {isOpen && (
                <CustomOverlayMap
                    position={{
                        lat: shopInfo.y,
                        lng: shopInfo.x,
                    }}>
                        <div className='customOverlay'>
                            <span className='customOverlayTitle'>
                                {shopInfo.placeName}
                                    <div 
                                        className='customOverlayClose' 
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <CloseIcon/>
                                    </div>
                            </span>
                            <div 
                                className='customOverlayDiscription'
                                style={{fontWeight:"lighter"}}
                            >
                                거리 : {shopInfo.distance}m
                                <br/>
                                전화번호 : {shopInfo.phone}
                                <br/>
                                주소 : {shopInfo.address}
                            </div>
                        </div>
                </CustomOverlayMap>
            )}
        </>
    )
}

export default KakaoMapInfoWindow;