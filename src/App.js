import React, { Component } from 'react';
import logo from './awards-boxed.png';
import './App.css';
import {Button, InputGroup, FormControl} from 'react-bootstrap';



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
      searchbar = (
<div width = "20%">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="password"
            aria-label="password"
            aria-describedby="basic-addon2"
            onChange = {this.handleChange.bind(this)}
          />
        </InputGroup>
</div>
);

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
    var msge = '';
    if(this.state.suppOnOff === 0){
      centerImage += " App-header1";

    } else {
msge = (      <div  className="Chat-header">

        <InputGroup className="mb-3">
          <FormControl
            placeholder="message"
            aria-label="message"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Append>
        </InputGroup>

        <div className="messenger">
          <p>Hi there, looks like you weren't given access.</p>
        </div>

      </div>);
      centerImage += " App-header2";
      app += " AppLeft";
    }



    return (
      <div>
      <div className={app}>
      <div className={centerImage}>
      {support}
      <p onClick = {this.handleClicks}>
      Portfolio
      </p>
      {searchbar}
      {errMessage}
      </div>
      </div>
{msge}
      </div>
    );
  }
}

export default App;
