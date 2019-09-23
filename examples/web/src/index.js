/* global document */
import '@babel/polyfill';
import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ModelProvider } from '@collateral/react-models';

ReactDOM.render((
  <ModelProvider>
    <App />
  </ModelProvider>
), document.getElementById('root'));