import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render( // ReactDom은 Virtual Dom으로 가상이기에 빠르다
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('potato') // Id가 potato인 좌표에 App으로부터 가져온 내용을 삽입
);
