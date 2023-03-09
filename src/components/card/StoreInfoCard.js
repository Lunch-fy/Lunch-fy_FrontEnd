import React, { useEffect, useState } from 'react';
import style from '../../css/Card.css';

const StoreInfoCard = (props) => {

    //데이터 형태 받아보고 키워드만 수정
    //css는 Card.css안에 있슴

    // const propsData = props.resData;
    // console.log(propsData);
    // console.log("인포카드 프롭스")

    return (
        // <a href={redirectURL} target='_blank'>
        <div className='StoreInfoCard'>
            <div className='I_infoSection'>
                <p className='I_title'>대림대학교</p>
                <p className='I_tag'>전문대</p>
                <p className='I_roadAddress'>동안구 임곡로 29</p>
            </div>
        </div>
        //</a>
    );
}

export default StoreInfoCard;