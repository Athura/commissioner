import React, { Component } from 'react';
import NavBar from '../nav/NavBar';
import Body from '../body/Body';
import Header from '../header/Header';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Header />
        <Body /> 
      </div>
    )
  }
}
