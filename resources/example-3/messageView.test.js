/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');


describe('MessageView', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  })

  it('clicks the button', () => {
    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
  });

  it('hides the message', () => {
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click()
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click()
    expect(document.querySelector('#message')).toBeNull()
  })
});