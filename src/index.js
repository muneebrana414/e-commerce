import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import OurProduct from './OurProduct';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './AboutUs';
import Contact from './Contact';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/contact" component={Contact} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/product" component={OurProduct} />
      <Route path="/" component={App} />
    </Switch>
  </Router>

  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
