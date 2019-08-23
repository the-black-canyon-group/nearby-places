import React from 'react';
import ReactDOM from 'react-dom';
import NearbyService from './components/NearbyService.jsx';

ReactDOM.render(<NearbyService />, document.querySelector('#app'));
window.NearbyService = NearbyService;
