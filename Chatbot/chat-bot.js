function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return; // Don't send empty messages
    appendUserMessage(userInput);
    // Simulate a response from the chatbot (you can replace this with actual logic to interact with a backend)
    setTimeout(function() {
      var response = "Thank you for your message: " + userInput;
      appendBotMessage(response);
    }, 500);
  }
  
  function appendUserMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var userChat = document.createElement("div");
    userChat.className = "chat outgoing";
    userChat.innerHTML = '<div class="bubble">' + message + '</div>';
    chatBox.appendChild(userChat);
    document.getElementById("user-input").value = ""; // Clear the input field after sending
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
  }
  
  function appendBotMessage(message) {
    var chatBox = document.getElementById("chat-box");
    var botChat = document.createElement("div");
    botChat.className = "chat incoming";
    botChat.innerHTML = '<div class="bubble">' + message + '</div>';
    chatBox.appendChild(botChat);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the bottom
  }
