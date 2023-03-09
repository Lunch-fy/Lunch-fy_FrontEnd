import React, { useEffect, useState } from 'react';
import style from '../../css/Card.css';

const StoreInfoCard = (props) => {

    const propsData = props.resData;


    return (
        <a href={propsData.url} target='_blank'>
        <div className='StoreInfoCard'>
            <div className='I_infoSection'>
                <p className='I_title'>{propsData.placeName}</p>
                <p className='I_tag'>{propsData.category}</p>
                <p className='I_roadAddress'>{propsData.roadAddress}</p>
            </div>
        </div>
        </a>
    );
}

export default StoreInfoCard;