import React, { useEffect,useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
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
    const location = props.nowLocation;
    const shopMapfunc = propsData.map((propsData) => <KakaoMapInfoWindow resData={propsData}/>)

    console.log(propsData);
    console.log("mapApi")
    return (
      <Map
        center={{ lat: location[1], lng: location[0] }}
        style={{float: 'right', flex: "auto", width:"100%", height: "850px"}}
        level={4}
      >
        <MapMarker position={{ lat: location[1], lng: location[0],}}/>
        <CustomOverlayMap
            position={{
                lat: location[1],
                lng: location[0],
            }}>
                <div className='customOverlay'>
                    <span className='customOverlaySearchTitle'>검색 위치
                    </span>
                    
                </div>
        </CustomOverlayMap>

        {shopMapfunc}
    </Map>
    );
};

export default KakaoMapApi;