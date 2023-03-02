import axios from 'axios';
import React, { useEffect,useState } from 'react';
import NaverMapApi from '../components/api/NaverMapApi';

const MapPage = () => {


    return (
        <div>
            <NaverMapApi location={searchResult.mapXY}></NaverMapApi>
        </div>
    );
};

export default MapPage;