
import React from 'react';
import { render, hydrate } from 'react-dom';

import App from './components/App';

hydrate(
  <App initialContests={window.initialData.contests} />,
  document.getElementById('root')
);