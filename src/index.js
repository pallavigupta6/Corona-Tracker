import React from "react";
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />,document.getElementById('root'))
export { default as Cards } from './components/Cards/Card';
export { default as Chart } from './components/Chart/Chart';
export { default as CovidPicker } from './components/CountryPicker/CountryPicker';
