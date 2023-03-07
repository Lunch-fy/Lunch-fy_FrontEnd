import React, { useEffect, useState } from 'react';
import style from '../../css/Card.css';

const StoreInfoCard = (props) => {
    //데이터 형태 받아보고 키워드만 수정
    //css는 Card.css안에 있슴
    const props = this.props

    const [data , setData] = useState();
    useEffect(() => {
        setData(props.apiData[0]);
    },[]);
    return (
        // <a href={redirectURL} target='_blank'>
        <div className='StoreInfoCard'>
            <div className='I_infoSection'>
                <p className='I_title'></p>
                <p className='I_tag'></p>
                <p className='I_roadAddress'></p>
            </div>
        </div>
        //</a>
    );
}

export default StoreInfoCard;