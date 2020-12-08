import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main'

class App extends React.Component{
  render(){
    return(
      <div className="app">
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;
