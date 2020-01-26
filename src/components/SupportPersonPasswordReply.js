import React, { Component } from 'react';

class SupportPersonPasswordReply extends Component {

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
      respondToWrongPassword: ['Invalid password', 'Ask support for help.',
      'Incorrect password', 'No, that is not correct.',
      'Incorrect Response', 'You are guessing.',
      'You have not been given permission.',
      'That is not correct.', 'Do not guess',
      'Please ask support for help.'],
      randomWrongPWIndex: 0,
      randomNum: Math.round(Math.random()*100) % 10 + 1,
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

    this.state.randomNum = p.randomNum;
  }


  componentWillUpdate(e, p){
    this.state.countUserGuessResumeKey = e.countUserGuessResumeKey;
  }

  render() {

    var wrongPasswordErrorMessage = '';

    if(this.state.userGuessResumeKey === this.state.resumeKey){
    

    } else if (this.state.portfolioSearchBoxValue !== ""
    && this.state.userChatBoxValue === ''){

      if(this.state.countUserGuessResumeKey === 0
        || this.state.countUserGuessResumeKey%this.state.randomNum === 0){


            var respondToWrongPasswordLength = this.state.respondToWrongPassword.length - 1;
            this.state.randomWrongPWIndex = Math.round(Math.random()*100 % respondToWrongPasswordLength);
            this.state.randomNum = Math.round(Math.random()*100) % 10 + 1;

          wrongPasswordErrorMessage =

          (<div>{this.state.respondToWrongPassword[this.state.randomWrongPWIndex]}</div>);

        } else
        {

          var idleDot = this.state.countUserGuessResumeKey % 7;
          if(idleDot > 0){
            wrongPasswordErrorMessage = "..";
          }
          for (var i = 0; i <= idleDot; i++ ){
            wrongPasswordErrorMessage += '.';
          }
        }

      } else {

        var idleDot = this.state.countUserGuessResumeKey % 7;
        if(idleDot > 0){
          wrongPasswordErrorMessage = "..";
        }
        for (var i = 0; i <= idleDot; i++ ){
          wrongPasswordErrorMessage += '.';
        }

        wrongPasswordErrorMessage =
        (<div><p>{wrongPasswordErrorMessage}</p></div>);

      }

      return (
        wrongPasswordErrorMessage

      );
    }
  }

  export default SupportPersonPasswordReply;
