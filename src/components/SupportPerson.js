import React, { Component } from 'react';
import logo from './../awards-boxed.png';

class SupportPerson extends Component {

  constructor(props)
  {
    super(props);

    // save the users in the state
    this.state = {

      userGuessResumeKey: this.props.userGuessResumeKey,
      resumeKey: this.props.resumeKey,
      portfolioSearchBoxValue: '',
      userChatBoxValue: this.props.userChatBoxValue,
      turnSupportPersonOnOff: 0,
      countUserKeyPress: 0,
      countUserGuessResumeKey: this.props.countUserGuessResumeKey,
      handleSuppClicks: this.props.handleSuppClicks

    };

  }

  componentDidUpdate(e, p){
    this.state.userGuessResumeKey = e.userGuessResumeKey
    this.state.resumeKey = e.resumeKey;
    this.state.portfolioSearchBoxValue = e.portfolioSearchBoxValue;
    this.state.userChatBoxValue = e.userChatBoxValue;
    this.state.countUserGuessResumeKey = e.countUserGuessResumeKey;
    this.state.handleSuppClicks = e.handleSuppClicks;
  }


  render() {

    var support = '';

    if(this.state.userGuessResumeKey === this.state.resumeKey){


    } else if (this.state.portfolioSearchBoxValue !== ""
    && this.state.userChatBoxValue === ''){

      if(this.state.turnSupportPersonOnOff === 0){
        this.state.countUserKeyPress += 1;

        if(this.state.countUserKeyPress >= 30){
          this.state.turnSupportPersonOnOff = 1;

        }

      }

    } else {

    }

    if(this.state.turnSupportPersonOnOff === 1){
      support = (
        <div>
        <header className = "iconFloat">
        <img src={logo} alt="cherry" width="120" height="120"
        onClick = {this.state.handleSuppClicks}/>
        </header>
        </div>);

      }

      return (
        support
      );

    }
  }

  export default SupportPerson;
