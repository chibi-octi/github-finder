import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

class App extends Component {
  foo = () => 'Bars';

  render() {

    return (
      <div className="App">
        <Navbar /> 
        <UserItem />
      </div>
    );
  }
}

export default App;
