import React, { Component } from 'react';
import logo from './awards-boxed.png';
import './App.css';
import {Button, InputGroup, FormControl} from 'react-bootstrap';

import makeSense from './makeSense';

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
      searchValueMsg: '',
      saveMsg: [],
      inCorrectResp:['Invalid password', 'Incorrect password', 'No',
      'That is not the pw.', 'You are guessing.',
      'You havent been given permission.',
      'That is not correct.', 'Stop.', 'Please ask for the password.'],
      staticErr: 0,
      errCount: -1,
    };

    this.handleClicks = this.handleClicks.bind(this);
    this.handleSuppClicks = this.handleSuppClicks.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMsg = this.handleChangeMsg.bind(this);
    this.handleClicksMsg = this.handleClicksMsg.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleMessageKeyPress = this.handleMessageKeyPress.bind(this);
  }



  handleKeyPress(event){
    if(event.key == 'Enter'){
      this.setState({staticErr: 0, errCount: 0});
    }
  }


  handleMessageKeyPress(event){
    if(event.key == 'Enter'){

      if(this.state.searchValueMsg != ''){
        this.state.saveMsg.push(
  <p className = "usr"><mark>{this.state.searchValueMsg}</mark></p>
  );

var response = makeSense(this.state.searchValueMsg);
  this.state.saveMsg.push(
        <p><mark className = "comp">{response}</mark></p>
        );


        this.setState({searchValueMsg: ''});
      }

    }

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

    if(e.target.value !== ''){
        this.state.errCount += 1;
    }

    this.setState({searchValue: e.target.value, proKey: val});

  }


  handleChangeMsg(e){

    this.setState({searchValueMsg: e.target.value});


  }

  handleClicksMsg(){

    if(this.state.searchValueMsg != ''){
      this.state.saveMsg.push(  <p className = "usr"><mark>{this.state.searchValueMsg}</mark></p>);
      this.setState({searchValueMsg: ''});
    }


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
        onKeyPress={this.handleKeyPress}
        />
        </InputGroup>
        </div>
      );

    }


    var errMessage = '';

    if(this.state.proKey === String(4322212)){
      window.open("https://resumex.herokuapp.com/","_self")

    } else if (this.state.searchValue !== "" && this.state.searchValueMsg === ''){
      this.state.countErr += 1;



      if(this.state.errCount >= 0 && this.state.errCount <= 5){

        if(this.state.errCount === 0){
          var errLength = this.state.inCorrectResp.length - 1;
          this.state.staticErr = Math.round(Math.random()*100 % errLength);

        }
        errMessage = this.state.inCorrectResp[this.state.staticErr];
      } else
      {

        var dotcount = this.state.errCount % 7;
        for (var i = 0; i <= dotcount; i++ ){
          errMessage += '.';
        }


      }



    } else {

      var dotcount = this.state.errCount % 7;
      for (var i = 0; i <= dotcount; i++ ){
        errMessage += '.';
      }

    }
    var support = '';

    if(this.state.countErr >= 30){
      support = (    <header className = "iconFloat">    <img src={logo} alt="cherry"
      width="120" height="120" onClick = {this.handleSuppClicks}/>
      </header>);

    }



    var messages = [];
    if(this.state.saveMsg !== []){
      for(var i = 0; i < this.state.saveMsg.length; i++){


          messages.push(      this.state.saveMsg[i]);



      }


    }


    var centerImage = "App-header";
    var app = "App";
    var msge = '';
    if(this.state.suppOnOff === 0){
      centerImage += " App-header1";

    } else {
      msge = (

         <div  class="Chat-header">

         <InputGroup className="mb-3">
           <FormControl
           value={this.state.searchValueMsg}
           placeholder="message"
           aria-label="message"
           aria-describedby="basic-addon2"
           onChange = {this.handleChangeMsg.bind(this)}
           onKeyPress={this.handleMessageKeyPress}
           />
           <InputGroup.Append>
           <Button variant="outline-secondary"
           onClick = {this.handleClicksMsg}>Button</Button>
           </InputGroup.Append>
           </InputGroup>

      <div className="containmsg">
      <div className="messenger">
      <p><mark className = "comp">Hi there,
      Looks like you haven't been given access.
      </mark></p>


  {messages}

      </div>

    </div></div>
      );
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
