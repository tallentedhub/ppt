const chatBox = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', function() {
  const message = messageInput.value;

  // Send the message to the server.

  // Clear the message input.
  messageInput.value = '';

  // Update the chat box.
  chatBox.innerHTML += `<li>${message}</li>`;
});
