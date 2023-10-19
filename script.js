const signInForm = document.getElementById('sign-in-form');
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Sign in as a guest.
signInForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const guestId = document.getElementById('guest-id').value;

  // Join the chat room.
  // ...

  // Hide the sign in form and show the chat box.
  signInForm.style.display = 'none';
  chatBox.style.display = 'block';
});

// Send a message.
sendButton.addEventListener('click', function() {
  const message = messageInput.value;

  // Send the message to the chat room.
  // ...

  // Clear the message input.
  messageInput.value = '';
});
