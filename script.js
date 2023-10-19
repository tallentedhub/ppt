// Automatically sign in as guest ID.
const guestId = Math.random().toString(36).substring(7);

// Connect to the database.
const db = new PDO('mysql:host=localhost;dbname=whatsapp_clone', 'root', '');

// Get the current group ID.
const groupId = document.getElementById('group-id').value;

// Get the chat box element.
const chatBox = document.getElementById('chat-box');

// Get the message input element.
const messageInput = document.getElementById('message-input');

// Get the send button element.
const sendButton = document.getElementById('send-button');

// Get the join group button element.
const joinGroupButton = document.getElementById('join-group-button');

// Load the chat history for the current group.
loadChatHistory(groupId);

// Add an event listener to the send button.
sendButton.addEventListener('click', function() {
  // Get the message text.
  const messageText = messageInput.value;

  // Send the message to the database.
  db.query('INSERT INTO messages (guest_id, group_id, message) VALUES (?, ?, ?)', [guestId, groupId, messageText]);

  // Clear the message input.
  messageInput.value = '';

  // Update the chat history.
  loadChatHistory(groupId);
});

// Add an event listener to the join group button.
joinGroupButton.addEventListener('click', function() {
  // Get the group ID to join
