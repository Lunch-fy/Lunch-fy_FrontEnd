import React from 'react';
import style from './Middle.css';
import logo from '../../assets/logo.png';

const Middle = () => {


    return (
        <div className='mid'>
            <img src={logo} className='logo'/>
            <p className='script'>점심메뉴를 추천 드려요!</p>
            <p className='discript'>
                아래 버튼을 클릭해서 주소나 건물이름과 함께 먹고싶은 음식 카테고리를 선택해서 검색을 하면<br/>
                &nbsp;&nbsp;선택하신 카테고리중에서 하나를 랜덤으로 선택하여, 주변에 관련있는 가게들을 보여드려요!
            </p>
        </div>
    );
};

export default Middle;