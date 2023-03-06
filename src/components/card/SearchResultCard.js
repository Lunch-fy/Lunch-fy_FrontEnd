import style from '../../css/Card.css';
import React from 'react';

const SearchResultCard = (props) => {

    //데이터 형태 받아보고 키워드만 수정
    //css는 Card.css안에 있슴
    const props = this.props

    return (
        
        <div id='searchResultCard'>
            <image id='Thumb' src={props.image}>
            </image>
            <section id='C_infoSection'>
                <p id='C_title'>{props.Title}</p>
                <p id='C_tag'>{props.category}</p>
                <div className='divider'/>
                <p id='C_ad'>{props.adress}</p>
                <p id='C_tel'>{props.phone}</p>
            </section>
        </div>
    );
};

export default SearchResultCard;