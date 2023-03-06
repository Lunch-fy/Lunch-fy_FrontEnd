import style from '../../css/Card.css';
import React from 'react';

const SearchResultCard = (props) => {

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