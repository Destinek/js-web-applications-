class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.containerEl= document.querySelector('#main-container')

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
    this.hideButtonEl.addEventListener('click', () => {
       this.hideMessage();
    });
  }

  displayMessage() {
    // console.log('Thanks for clicking me!');
       const message = document.createElement('div');
      message.id = 'message';
      message.innerText='This message displayed by JavaScript.'
      this.containerEl.append(message);
  }

  hideMessage() { 
    const message = document.querySelector('div#message')
    message.remove()
  }
}

module.exports = MessageView;