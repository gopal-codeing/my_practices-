import React from 'react';
import ReactDOM from 'react-dom/client';
import Parent from './Parent';
import Reactform from './Reactform';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Slider from './Slider';
// import FetchData from './FetchData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* < FetchData  /> */}
    {/* <Slider/> */}
        {/* <Parent/> */}
     <Reactform></Reactform>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();