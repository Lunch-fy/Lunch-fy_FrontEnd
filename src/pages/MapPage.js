import React, { useEffect,useState } from 'react';
import KakaoMapApi from '../components/api/KakaoMapApi';
import TagButton from '../components/tag/TagButton';
import SearchResultCard from '../components/card/SearchResultCard';
const MapPage = () => {


    return (
        <div>
            <TagButton></TagButton>
            <SearchResultCard></SearchResultCard>
        </div>
    );
};

export default MapPage;