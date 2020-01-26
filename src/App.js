import React, { Component } from 'react';

import './App.css';
import {Button, InputGroup, FormControl} from 'react-bootstrap';

import SupportPerson from './components/SupportPerson';
import SupportPersonPasswordReply from './components/SupportPersonPasswordReply';

import makeSense from './makeSense';

class App extends Component {


  constructor(props)
  {
    super(props);


    // save the users in the state
    this.state = {
      resumeKey: "4422212",
      turnPortfolioSearchBarOnOff: 0,
      portfolioSearchBoxValue: '',
      userGuessResumeKey:'',
      turnSupportMessengerOnOff: 0,
      userChatBoxValue: '',
      saveMsg: [],
      staticErr: 0,
      countUserGuessResumeKey: -1,
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
      this.setState({staticErr: 0, countUserGuessResumeKey: 0});
    }
  }


  handleMessageKeyPress(event){
    if(event.key == 'Enter'){

      if(this.state.userChatBoxValue != ''){
        this.state.saveMsg.push(
          <p className = "usr"><mark>{this.state.userChatBoxValue}</mark></p>
        );

        var response = makeSense(this.state.userChatBoxValue);
        this.state.saveMsg.push(
          <p><mark className = "comp">{response}</mark></p>
        );


        this.setState({userChatBoxValue: ''});
      }

    }

  }

  handleClicks(){
    if(this.state.turnPortfolioSearchBarOnOff === 0){
      this.setState({turnPortfolioSearchBarOnOff: 1});
    } else {
      this.setState({turnPortfolioSearchBarOnOff: 0});

    }


  }


  handleSuppClicks(){
    if(this.state.turnSupportMessengerOnOff === 0){

      this.setState({turnSupportMessengerOnOff: 1});
    } else {
      this.setState({turnSupportMessengerOnOff: 0});


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
      this.state.countUserGuessResumeKey += 1;
    }

    this.setState({portfolioSearchBoxValue: e.target.value, userGuessResumeKey: val});

  }


  handleChangeMsg(e){

    this.setState({userChatBoxValue: e.target.value});


  }

  handleClicksMsg(){

    if(this.state.userChatBoxValue != ''){
      this.state.saveMsg.push(  <p className = "usr"><mark>{this.state.userChatBoxValue}</mark></p>);
      this.setState({userChatBoxValue: ''});
    }


  }

  render() {

    // login with password
    var portfolioSearchBar;

    // prints error message when user types the wrong login
    var wrongPasswordErrorMessage;
    var support;

    if(this.state.turnPortfolioSearchBarOnOff === 1){
      portfolioSearchBar = (
        <div width = "20%">
        <InputGroup className="mb-3">
        <FormControl
        placeholder="password"
        aria-label="password"
        aria-describedby="basic-addon2"
        value={this.state.portfolioSearchBoxValue}
        onChange = {this.handleChange.bind(this)}
        onKeyPress={this.handleKeyPress}
        />
        </InputGroup>
        </div>
      );

      if(this.state.userGuessResumeKey === this.state.resumeKey){
        window.open("https://resumex.herokuapp.com/","_self");

      }

      var supportPersonPasswordReply = <SupportPersonPasswordReply
      userGuessResumeKey = {this.state.userGuessResumeKey}
      resumeKey = {this.state.resumeKey}
      portfolioSearchBoxValue = {this.state.portfolioSearchBoxValue}
      countUserGuessResumeKey = {this.state.countUserGuessResumeKey }
      userChatBoxValue = {this.state.userChatBoxValue}
      handleSuppClicks = {this.handleSuppClicks}
      />

      wrongPasswordErrorMessage = supportPersonPasswordReply;

    }



    var supportPerson = (<SupportPerson
      userGuessResumeKey = {this.state.userGuessResumeKey}
      resumeKey = {this.state.resumeKey}
      portfolioSearchBoxValue = {this.state.portfolioSearchBoxValue}
      countUserGuessResumeKey = {this.state.countUserGuessResumeKey }
      userChatBoxValue = {this.state.userChatBoxValue}
      handleSuppClicks = {this.handleSuppClicks}
      />);

      support = supportPerson;

      var messages = [];
      if(this.state.saveMsg !== []){
        for(var i = 0; i < this.state.saveMsg.length; i++){
          messages.push(      this.state.saveMsg[i]);
        }
      }

      var centerImage = "App-header";
      var app = "App";
      var msge = '';
      if(this.state.turnSupportMessengerOnOff === 0){
        centerImage += " App-header1";

      } else {
        msge = (

          <div  class="Chat-header">

          <InputGroup className="mb-3">
          <FormControl
          value={this.state.userChatBoxValue}
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
        {portfolioSearchBar}
        {wrongPasswordErrorMessage}

        </div>
        </div>
        {msge}

        </div>
      );
    }
  }

  export default App;
