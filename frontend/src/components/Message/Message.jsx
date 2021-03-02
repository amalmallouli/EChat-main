import React, { Component } from 'react';
import './Message.scss';
//import ScrollToBottom from 'react-scroll-to-bottom';

class Message extends Component {
  constructor(props) {
    super(props);
    let temp = JSON.parse(this.props.message);
    this.state = {
      message: temp
    }
  }
  
  render() {
    return (
     // <ScrollToBottom>
        <div className='Message'>
        {this.state.message.body}
      </div>

     //</ScrollToBottom>
      
    );
  };

}

export default Message;
