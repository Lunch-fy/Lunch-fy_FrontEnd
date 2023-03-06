import style from './Card.css';
import React from 'react';

const SearchResultCard = () => {

    return (
        
        <div id='searchResultCard'>
            <image id='Thumb' sr>
            </image>
            <section id='infoSection'>
                <p id='C_title'>Title</p>
                <p id='C_tag'>tag</p>
                <div class='divider'/>
                <p id='C_ad'>adress</p>
                <p id='C_tel'>Tel.</p>
            </section>
        </div>
    );
};

export default SearchResultCard;