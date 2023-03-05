import style from './Card.css';
import React from 'react';

const SearchResultCard = () => {

    return (
        
        <div id='searchResultCard'>
            <image id='Thumb'>
            </image>
            <section id='infoSection'>
                <h3 id='C_title'>Title</h3>
                <p id='C_tag'>tag</p>
                <hr/>
                <p id='C_ad'>adress</p>
                <p id='C_tel'>Tel.</p>
            </section>
        </div>
    );
};

export default SearchResultCard;