import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {  injectGlobal } from 'styled-components';

import MainPage from './components/mainpage/MainPage';
import ContactPage from './components/contact/ContactPage';
import ErrorBoundary from './components/errorboundry/ErrorBoundary';

injectGlobal`
  body, html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Lato', 'Arial Narrow', Arial, sans-serif;
    font-weight: 400;
    line-height: 1.8em;
    color: #666;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
        <Switch>
          <Route exact path="/" component = { MainPage } />
        </Switch>

        <Route 
          path="/(.+)"
          render = {() => (
            <div>
              <Switch>
                <Route path="/contact" component = { ContactPage } />
              </Switch>
            </div>
          )}
        />
        </ErrorBoundary>
        
      </div>
    );
  }
}

export default App;
