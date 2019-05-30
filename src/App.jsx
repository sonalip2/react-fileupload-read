import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UploadReadFiles from './pages/UploadReadFiles';
import { Provider } from 'react-redux';
import store from './store'
import './styles/base.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <>
        <Route exact path="/" component={UploadReadFiles} />
      </>
    </Router>
  </Provider>
);

export default App;
