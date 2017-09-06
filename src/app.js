import './styles.scss';
import React from 'react';
import ReactDom from 'react-dom';

import App from './component/App';

const root = document.getElementById('app-container');
ReactDom.render(<App text="this is a prop values"/>, root);