const MODEL_NAME = "gemini-1.5-flash-latest";
const CHAT_ENDPOINT = '/api/chat';

let websiteContent = "";
let chatContainer;
let userInput;
let sendButton;
let loadingIndicator;
let mainChatWindow;
let isChatOpen = false;

function toggleChatWindow() {
  isChatOpen = !isChatOpen;
  if (isChatOpen) {
    mainChatWindow.classList.remove("translate-y-full", "opacity-0");
    mainChatWindow.classList.add("translate-y-0", "opacity-100");
    userInput.focus();
  } else {
    mainChatWindow.classList.remove("translate-y-0", "opacity-100");
    mainChatWindow.classList.add("translate-y-full", "opacity-0");
  }
}

function createMessageElement(text, sender) {
  const isUser = sender === "user";
  const messageDiv = document.createElement("div");
  messageDiv.className = `flex ${isUser ? "justify-end" : "justify-start"}`;
  const bubble = document.createElement("div");
  bubble.className = `max-w-xs md:max-w-md p-3 rounded-lg shadow-md text-sm ${isUser ? "bg-blue-200 text-gray-900 rounded-br-none" : "bg-gray-100 text-gray-800 rounded-tl-none"}`;
  if (!isUser) {
    const senderLabel = document.createElement("p");
    senderLabel.className = "font-semibold text-xs mb-1 text-brand-blue";
    senderLabel.textContent = "Vector";
    bubble.appendChild(senderLabel);
  }
  const content = document.createElement("p");
  content.textContent = text;
  bubble.appendChild(content);
  messageDiv.appendChild(bubble);
  return messageDiv;
}

function appendMessage(text, sender) {
  const messageElement = createMessageElement(text, sender);
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function setChatState(isLoading) {
  sendButton.disabled = isLoading;
  userInput.disabled = isLoading;
  loadingIndicator.classList.toggle("hidden", !isLoading);
  if (isLoading) chatContainer.scrollTop = chatContainer.scrollHeight;
}

function initializeChatbot() {
  websiteContent = document.getElementById("website-content-input").value;
  const trainingArea = document.getElementById("training-area");
  if (trainingArea) trainingArea.style.display = "none";
}

async function sendMessage() {
  const query = userInput.value.trim();
  if (!query || websiteContent.trim() === "") {
    if (websiteContent.trim() === "") appendMessage("I haven't been trained yet. Please add content to the training area.", "ai");
    return;
  }
  appendMessage(query, "user");
  userInput.value = "";
  setChatState(true);
  const MAX_RETRIES = 3;
  let retryCount = 0;
  while (retryCount < MAX_RETRIES) {
    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, context: websiteContent, model: MODEL_NAME })
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status} ${response.statusText} - ${errorText}`);
      }
      const result = await response.json();
      const aiResponseText = result?.text || '';
      appendMessage(aiResponseText || 'No response available.', 'ai');
      setChatState(false);
      return;
    } catch (error) {
      retryCount++;
      if (retryCount >= MAX_RETRIES) {
        let friendlyError = 'I apologize, but I am unable to connect to the service right now. Please try again later.';
        appendMessage(friendlyError, 'ai');
        setChatState(false);
        return;
      }
      const delay = Math.pow(2, retryCount) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("chat-widget.html", { cache: "no-store" });
  const html = await res.text();
  const wrapper = document.createElement("div");
  wrapper.innerHTML = html;
  document.body.appendChild(wrapper);
  chatContainer = document.getElementById("chat-container");
  userInput = document.getElementById("user-input");
  sendButton = document.getElementById("send-button");
  loadingIndicator = document.getElementById("loading-indicator");
  mainChatWindow = document.getElementById("main-chat-window");
  document.getElementById("chat-toggle-button").addEventListener("click", toggleChatWindow);
  sendButton.addEventListener("click", sendMessage);
  userInput.addEventListener("keydown", e => { if (e.key === "Enter") sendMessage(); });
  initializeChatbot();
});
