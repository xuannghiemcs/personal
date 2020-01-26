import React, { Component } from 'react';
import {Button, InputGroup, FormControl} from 'react-bootstrap';
import logo from './../awards-boxed.png';
import React, { Component } from 'react';

import './App.css';
import {Button, InputGroup, FormControl} from 'react-bootstrap';

class SupportMessenger extends Component {


  constructor(props)
  {
    super(props);



    // save the users in the state
    this.state = {




    };



  }




  componentDidUpdate(e, p){

    this.state.userGuessResumeKey = e.userGuessResumeKey
    this.state.resumeKey = e.resumeKey;
    this.state.portfolioSearchBoxValue = e.portfolioSearchBoxValue;
    this.state.userChatBoxValue = e.userChatBoxValue;
  //  this.state.turnSupportPersonOnOff = p.turnSupportPersonOnOff;
  //  this.state.countUserKeyPress = p.countUserKeyPress;
    this.state.countUserGuessResumeKey = e.countUserGuessResumeKey;
  //  this.state.inCorrectResp = p.inCorrectResp;
  //  this.state.staticErr = p.staticErr;
    this.state.handleSuppClicks = e.handleSuppClicks;
  }




  render() {










    return (
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
  }
}

export default SupportMessenger;
