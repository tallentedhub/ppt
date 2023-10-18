const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', function() {
  const message = messageInput.value;

  // Add the message to the chat box.
  chatBox.innerHTML += `<li>${message}</li>`;

  // Clear the message input.
  messageInput.value = '';
});
