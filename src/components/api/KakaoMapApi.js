import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KakaoMapApi = () => {
    // const navermaps = useNavermaps();

    // const [searchResult, setSearchResult] = useState({
    //     placeName: "",
    //     category: "",
    //     address: "",
    //     mapXY: [],
    //     imageUrl: []
    //   });

    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await axios.get(`/api/lunchfy/search?searchThing=$피자스쿨 안양비산점`);
    //         var resData = response.data[0];

    //         setSearchResult({
    //             placeName: resData.placeName,
    //             category: resData.category,
    //             address: resData.address,
    //             mapXY: resData.mapXY,
    //             imageUrl: resData.imageUrl,
    //         });
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     };
    //     fetchData();
    //   }, []);

    return (
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: "100%", height: "600px" }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{color:"#000"}}>Hello World!</div>
         </MapMarker>
    </Map>
    );
};

export default KakaoMapApi;