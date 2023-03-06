import React from 'react';
import style from '../../css/Card.css';

const StoreInfoCard = (props) => {
    //데이터 형태 받아보고 키워드만 수정
    //css는 Card.css안에 있슴
    const props = this.props

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