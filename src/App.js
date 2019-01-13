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
      proKey:'',
      suppOnOff: 0,
    };

  this.handleClicks = this.handleClicks.bind(this);
    this.handleSuppClicks = this.handleSuppClicks.bind(this);
  this.handleChange = this.handleChange.bind(this);

  }

  handleClicks(){
if(this.state.searchOnOff === 0){
  this.setState({searchOnOff: 1});
} else {
  this.setState({searchOnOff: 0});

}


  }


handleSuppClicks(){
if(this.state.suppOnOff === 0){

    this.setState({suppOnOff: 1});
} else {
  this.setState({suppOnOff: 0});


}



}


  handleChange(e){
var temp;
var val;
var max = 0;
for(var i = 0; i < e.target.value.length; i++){
temp = e.target.value[i].charCodeAt(0).toString(2);
if(i === 0){

val = temp;
max = val.length;

} else {



if(temp.length > max){
  var diff = temp.length - max;
  var tempval = '';

for (var j = diff; j < temp.length; j++){
  tempval += String(parseInt(val[j])+ parseInt(temp[j]));


}

    val = tempval;

} else {

var diff = max - temp.length;
var tempval = '';
  for (var k = 0; k < temp.length; k++){
tempval += String(parseInt(val[diff + k])+ parseInt(temp[k]));

  }

    val = tempval;

}

}


}

  this.setState({searchValue: e.target.value, proKey: val});

  }

  render() {

    var searchbar;

if(this.state.searchOnOff === 1){
searchbar = (      <input type="text" class="searchTerm" height="48" placeholder="password" onChange = {this.handleChange.bind(this)}/>);

}


var errMessage = '';

if(this.state.proKey === String(4430312)){
window.open("https://cherry-pick-1.herokuapp.com/","_self")

} else if (this.state.searchValue !== ""){
this.state.countErr += 1;
  errMessage = "Invalid";

}
var support = '';

if(this.state.countErr >= 30){
support = (    <header className = "iconFloat">    <img src={logo} alt="cherry"
                        width="120" height="120" onClick = {this.handleSuppClicks}/>
                        </header>);

}

var centerImage = "App-header";
var app = "App";
if(this.state.suppOnOff === 0){
centerImage += " App-header1";

} else {

centerImage += " App-header2";
app += " AppLeft";
}



    return (
      <div className={app}>

        <header className={centerImage}>
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
