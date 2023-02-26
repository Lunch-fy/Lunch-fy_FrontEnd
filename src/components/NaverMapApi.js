import React from 'react';
import { Container as MapDiv, Marker, NaverMap, useNavermaps } from 'react-naver-maps';

const NaverMapApi = () => {
    const navermaps = useNavermaps();

    return (
        <MapDiv style={{width: '100%', height: '600px'}}>
            <NaverMap defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)} defaultZoom={17}>
                <Marker position={new navermaps.LatLng(37.3595704, 127.105399)}></Marker>
            </NaverMap>
        </MapDiv>
    );
};

export default NaverMapApi;