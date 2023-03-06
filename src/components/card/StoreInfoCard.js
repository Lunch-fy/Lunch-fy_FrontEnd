import React from 'react';
import style from '../../css/Card.css';

const StoreInfoCard = () => {

    return (
        <div className='StoreInfoCard'>
            <img className='smallThumb'>
            </img>
            <div className='I_infoSection'>
                <p className='I_title'>Title</p>
                <p className='I_tag'>tag</p>
            </div>
        </div>
    );

}

export default StoreInfoCard;