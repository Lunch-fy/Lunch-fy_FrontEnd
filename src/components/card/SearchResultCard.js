import style from '../../css/Card.css';
import React from 'react';

const SearchResultCard = () => {

    return (
        
        <div id='searchResultCard'>
            <image id='Thumb' sr>
            </image>
            <section id='C_infoSection'>
                <p id='C_title'>Title</p>
                <p id='C_tag'>tag</p>
                <div className='divider'/>
                <p id='C_ad'>adress</p>
                <p id='C_tel'>Tel.</p>
            </section>
        </div>
    );
};

export default SearchResultCard;