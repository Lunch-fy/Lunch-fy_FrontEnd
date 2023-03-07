import React from 'react';
import style from '../../css/Card.css';

const SearchResultCard = (props) => {

    return (
        
        <div id='searchResultCard'>
            <img id='Thumb' src={props.image}>
            </img>
            <section id='C_infoSection'>
                <p id='C_title'>{props.Title}</p>
                <p id='C_tag'>{props.category}</p>
                <div className='divider'/>
                <p id='C_ad'>{props.address}</p>
                <p id='C_tel'>{props.phone}</p>
            </section>
        </div>
    );
};

export default SearchResultCard;