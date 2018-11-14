import React, { ConcurrentMode, Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <ConcurrentMode>
    <Suspense fallback="loading">
      <App />
    </Suspense>
  </ConcurrentMode>,
  document.getElementById('root')
);
// registerServiceWorker();
