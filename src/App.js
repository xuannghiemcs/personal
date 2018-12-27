import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  constructor(props)
  {
    super(props);


    // save the users in the state
    this.state = {
      searchOnOff: 0,
    };

  this.handleClicks = this.handleClicks.bind(this);


  }

  handleClicks(){
if(this.state.searchOnOff === 0){
  this.setState({searchOnOff: 1});
} else {
  this.setState({searchOnOff: 0});

}


  }

  render() {

    var searchbar;

if(this.state.searchOnOff === 1){
searchbar = (      <input type="text" class="searchTerm" placeholder="password"/>);

}

    return (
      <div className="App">
        <header className="App-header">
          <p onClick = {this.handleClicks}>
          Portfolio
          </p>
                {searchbar}
        </header>
      </div>
    );
  }
}

export default App;
