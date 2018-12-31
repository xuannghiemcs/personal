import React, { Component } from 'react';
import logo from './awards-boxed.png';
import './App.css';

class App extends Component {


  constructor(props)
  {
    super(props);


    // save the users in the state
    this.state = {
      searchOnOff: 0,
      searchValue: '',
      countErr: 0,
    };

  this.handleClicks = this.handleClicks.bind(this);
  this.handleChange = this.handleChange.bind(this);

  }

  handleClicks(){
if(this.state.searchOnOff === 0){
  this.setState({searchOnOff: 1});
} else {
  this.setState({searchOnOff: 0});

}


  }

  handleChange(e){
  this.setState({searchValue: e.target.value});

  }

  render() {

    var searchbar;

if(this.state.searchOnOff === 1){
searchbar = (      <input type="text" class="searchTerm" height="48" placeholder="password" onChange = {this.handleChange.bind(this)}/>);

}


var errMessage = '';

if(this.state.searchValue === "test"){


} else if (this.state.searchValue !== ""){
this.state.countErr += 1;
  errMessage = "Invalid";

}
var support = '';

if(this.state.countErr >= 50){
support = (      <img src={logo} alt="cherry"
                        width="120" height="120"/>);

}

    return (
      <div className="App">
        <header className="App-header">
      {support}
          <p onClick = {this.handleClicks}>
          Portfolio
          </p>
                {searchbar}
    {errMessage}
        </header>

      </div>
    );
  }
}

export default App;
