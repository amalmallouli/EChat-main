import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  
  render() {
    return (
      <div className='ChatInput'>
        <input onKeyDown={this.props.send} placeholder="Entrez votre message"/>
      </div>
    );
  };

}

export default ChatInput;
