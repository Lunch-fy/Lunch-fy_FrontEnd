import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { Container as MapDiv, Marker, NaverMap, useNavermaps } from 'react-naver-maps';

const NaverMapApi = () => {
    const navermaps = useNavermaps();

    const [searchResult, setSearchResult] = useState({
        placeName: "",
        category: "",
        address: "",
        mapXY: [],
        imageUrl: []
      });

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`/api/lunchfy/search?searchThing=피자스쿨 안양비산점`);
            var resData = response.data[0];

            setSearchResult({
                placeName: resData.placeName,
                category: resData.category,
                address: resData.address,
                mapXY: resData.mapXY,
                imageUrl: resData.imageUrl,
            });
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, []);

    return (
        <MapDiv style={{width: '100%', height: '700px'}}>
            <NaverMap defaultCenter={new navermaps.LatLng(37.4033679, 126.9297888)} defaultZoom={18}>
                <Marker position={new navermaps.LatLng(searchResult.mapXY[0], searchResult.mapXY[1])}></Marker>
            </NaverMap>
        </MapDiv> 
    );
};

export default NaverMapApi;