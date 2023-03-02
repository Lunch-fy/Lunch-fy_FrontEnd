import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NavermapsProvider } from 'react-naver-maps';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // NaverMapsProvider는 api를 가져올때 필요한 id값, 루트를 렌더할때 묶어두는것이 인증하기 편한듯?
    <NavermapsProvider ncpClientId='z9o57yg5cj'> 
    <App />
    </NavermapsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
