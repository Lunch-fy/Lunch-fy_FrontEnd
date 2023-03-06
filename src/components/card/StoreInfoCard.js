import React from 'react';
import style from '../../css/Card.css';

const StoreInfoCard = (props) => {

    return (
        <div className='StoreInfoCard'>
            <img className='smallThumb' src={props.image}>
            </img>
            <div className='I_infoSection'>
                <p className='I_title'>{props.title}</p>
                <p className='I_tag'>{props.category}</p>
            </div>
        </div>
    );

}

export default StoreInfoCard;