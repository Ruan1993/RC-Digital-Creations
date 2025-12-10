const MODEL_NAME = "gemini-2.5-flash";
const CHAT_ENDPOINT = '/api/chat';

const WEBSITE_CONTEXT = `--- RC DIGITAL CREATIONS CONTEXT ---

BUSINESS OVERVIEW:
Name: RC Digital Creations (RCDC).
Owner: Ruan Coetzee.
Location: Stilbaai, Western Cape (Serving clients globally).
Mission: To provide professional, high-quality digital solutions for small to medium businesses.
Contact: info@rcdigitalcreations.co.za | Phone: 063 473 3098.

YOUR CREATOR (RUAN COETZEE):
- Ruan is a Front-End Developer and Geospatial Analyst with a BSc Honours in Geography & Environmental Sciences.
- He uses a "Systems Thinking" approach to technology—meaning he builds solutions that integrate seamlessly into a business's workflow.
- Quote: "I don't just write code; I build solutions that are sustainable, data-driven, and designed for the future."
- Personal Portfolio: https://ruancoetzee.co.za/

SERVICES & PRICING:
1. New Business Starter Pack (R5,200.00)
   - Perfect for new companies.
   - Includes: Basic Brochure Website (1-3 Pages, Custom Coded), Professional Logo Design (2 Concepts), Branded QR Code, and Domain & Hosting (1st Year Included).
   - Turnaround: Live in 5-7 days.

2. Standard Business Website (R6,500.00 +)
   - Ideal for established small businesses.
   - Includes: 4-8 Pages (Home, Portfolio, Services, Pricing, Contact), Custom High-Performance Coding, SEO Optimization, Call-to-Actions.
   - Note: Final price depends on the scope of work.

3. AI Chatbots (Custom Quote)
   - Automate customer support 24/7.
   - Integrated directly into websites to handle queries and bookings.

4. App Development
   - Custom web and mobile applications (Android APKs).
   - Technologies: HTML, CSS, JavaScript, Python, Firebase, Capacitor.

5. Geo-Spatial Analysis
   - Specialized mapping, data visualization, and environmental data analysis leveraging Ruan's background.

ADDITIONAL EXPERTISE:
- Branding & Design: Memorable logos, business cards, custom QR codes, and promotional posters.
- Tech Stack: HTML5, Tailwind CSS, JavaScript, Python, and Firebase. We specialize in custom coding rather than standard WordPress templates.

POLICIES & QUOTES:
- Do not make up prices. If a client asks for something not listed, say: "That sounds like a great project! Since it requires custom work, please click the WhatsApp button so Ruan can give you an accurate quote."
- Terms & Conditions: https://www.rcdigitalcreations.co.za/terms.html
- Privacy Policy: https://www.rcdigitalcreations.co.za/privacy.html

EXAMPLE WEBSITES (PORTFOLIO):
- https://albertiniapavers.co.za/
- https://ccautorepairs.netlify.app/
- https://nailsbywilma.co.za/
- https://ruancoetzee.co.za/
- https://debrakke.netlify.app/

FAQ:
Q: How long does it take to build a website?
A: Basic sites are typically completed within three to seven days. Timelines can change based on complexity.

Q: Do you offer ongoing maintenance?
A: Yes. We provide maintenance, performance checks, and content updates.

Q: Can you integrate custom AI chatbots?
A: Yes. We can integrate a site-specific chatbot trained on your content.

Q: Do you work with clients outside South Africa?
A: Yes. We serve clients remotely worldwide.
`;

let websiteContent = WEBSITE_CONTEXT;
let chatContainer;
let userInput;
let sendButton;
let loadingIndicator;
let mainChatWindow;
let isChatOpen = false;
let chatHistory = [];
let typingMessageElement = null;

function toggleChatWindow() {
  isChatOpen = !isChatOpen;
  if (isChatOpen) {
    mainChatWindow.classList.remove("translate-y-full", "opacity-0");
    mainChatWindow.classList.add("translate-y-0", "opacity-100");
    if (userInput) userInput.focus();
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

  // Quick-reply buttons for AI
  if (sender === 'ai' && (text.toLowerCase().includes('call') || text.toLowerCase().includes('whatsapp'))) {
    const btns = document.createElement('div');
    btns.className = 'flex gap-2 mt-3 flex-wrap';
    btns.innerHTML = `
      <a href="https://wa.me/27634733098" target="_blank" class="px-4 py-2 bg-green-600 text-white rounded-full text-sm hover:bg-green-700 transition-colors no-underline">WhatsApp Me</a>
      <a href="https://calendly.com/ruan-rcdigital/30min" target="_blank" class="px-4 py-2 bg-brand-purple text-white rounded-full text-sm hover:opacity-90 transition-opacity no-underline">Book Free Call</a>
    `;
    const bubble = messageElement.querySelector('.rounded-lg');
    if (bubble) bubble.appendChild(btns);
  }

  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function setChatState(isLoading) {
  sendButton.disabled = isLoading;
  userInput.disabled = isLoading;
  loadingIndicator.classList.toggle("hidden", !isLoading);

  if (isLoading) {
    if (!typingMessageElement) {
      typingMessageElement = createMessageElement("Vector is typing...", "ai");
      chatContainer.appendChild(typingMessageElement);
    }
    chatContainer.scrollTop = chatContainer.scrollHeight;
  } else {
    if (typingMessageElement && typingMessageElement.parentNode) {
      typingMessageElement.parentNode.removeChild(typingMessageElement);
    }
    typingMessageElement = null;
  }
}

function initializeChatbot() {
  // websiteContent is already set via WEBSITE_CONTEXT
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

  // Add to history
  chatHistory.push({ role: 'user', parts: [{ text: query }] });
  if (chatHistory.length > 10) chatHistory = chatHistory.slice(-10);

  const MAX_RETRIES = 5;
  let retryCount = 0;
  while (retryCount < MAX_RETRIES) {
    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, context: websiteContent, history: chatHistory })
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status} ${response.statusText} - ${errorText}`);
      }
      const result = await response.json();
      const aiResponseText = result?.text || '';
      appendMessage(aiResponseText || 'No response available.', 'ai');
      
      // Add AI response to history
      if (aiResponseText) {
          chatHistory.push({ role: 'model', parts: [{ text: aiResponseText }] });
      }

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

const CHAT_WIDGET_HTML = `<div id="chatbot-widget-container">
  <div
    id="chat-welcome-bubble"
    class="fixed bottom-20 right-6 z-50 bg-white p-4 rounded-xl shadow-xl border border-gray-200 max-w-[250px] transform translate-y-4 opacity-0 transition-all duration-500 hidden"
  >
    <p class="text-sm font-medium text-gray-800">👋 Need help? Chat with us!</p>
    <div
      class="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-200"
    ></div>
    <button
      id="close-bubble-btn"
      class="absolute -top-2 -right-2 bg-gray-100 hover:bg-gray-200 rounded-full p-1 text-gray-500 shadow-sm transition-colors"
      aria-label="Close bubble"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
  <button
    id="chat-toggle-button"
    class="fixed bottom-6 right-6 z-50 bg-brand-blue text-white p-3 rounded-full shadow-2xl hover:bg-brand-blue/80 transition duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  </button>
  <div
    id="main-chat-window"
    class="fixed bottom-20 md:bottom-24 right-4 z-40 w-[360px] max-w-[92vw] bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[60vh] md:h-[600px] min-h-[420px] max-h-[640px] transform translate-y-full opacity-0 transition-all duration-300"
  >
    <header
      class="p-4 bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-md flex items-center gap-3 flex-shrink-0"
    >
      <div
        class="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/30"
      >
        <span class="font-bold">V</span>
      </div>
      <div class="flex flex-col">
        <h1 class="text-xl font-bold leading-tight">Vector</h1>
        <div class="text-xs opacity-90">Website Assistant</div>
      </div>
    </header>
    <div
      id="chat-container"
      class="chat-container flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50"
    >
      <div class="flex justify-start">
        <div
          class="max-w-xs md:max-w-md p-3 rounded-lg bg-gray-100 text-gray-800 shadow-sm"
        >
          <p class="font-semibold text-sm mb-1 text-brand-blue">Vector</p>
          <p class="text-sm">
            Hi! I’m Vector, your assistant trained on this site’s content. Ask
            me anything about our services, products, or information.
          </p>
        </div>
      </div>
      <div id="loading-indicator" class="hidden flex justify-start">
        <div class="p-3 rounded-lg bg-gray-100 shadow-sm">
          <div class="flex items-center space-x-2">
            <div
              class="w-2 h-2 bg-brand-blue rounded-full animate-bounce"
            ></div>
            <div
              class="w-2 h-2 bg-brand-blue rounded-full animate-bounce"
            ></div>
            <div
              class="w-2 h-2 bg-brand-blue rounded-full animate-bounce"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4 border-t border-gray-200 flex space-x-3 bg-white">
      <input
        type="text"
        id="user-input"
        placeholder="Type your message..."
        class="flex-grow p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-blue transition duration-150 bg-white text-gray-900 placeholder-gray-500"
      />
      <button
        id="send-button"
        class="bg-brand-blue text-white p-3 rounded-full shadow-lg hover:bg-brand-blue/80 transition duration-150 disabled:bg-gray-400 disabled:cursor-not-allowed flex-shrink-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-send"
        >
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      </button>
    </div>
  </div>
</div>`;

document.addEventListener("DOMContentLoaded", async () => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = CHAT_WIDGET_HTML;
  document.body.appendChild(wrapper);
  chatContainer = document.getElementById("chat-container");
  userInput = document.getElementById("user-input");
  sendButton = document.getElementById("send-button");
  loadingIndicator = document.getElementById("loading-indicator");
  mainChatWindow = document.getElementById("main-chat-window");
  document.getElementById("chat-toggle-button").addEventListener("click", toggleChatWindow);
  
  // -- Welcome Bubble Logic --
  const bubble = document.getElementById("chat-welcome-bubble");
  const closeBubbleBtn = document.getElementById("close-bubble-btn");
  
  function hideBubble() {
      if (bubble) {
          bubble.classList.remove("translate-y-0", "opacity-100");
          bubble.classList.add("translate-y-4", "opacity-0");
          setTimeout(() => bubble.classList.add("hidden"), 500);
      }
  }

  if (bubble && closeBubbleBtn) {
      // Show after 3 seconds
      setTimeout(() => {
          // const alreadyOpened = localStorage.getItem('chatOpened') === 'true'; // Commented out for testing
          if (!isChatOpen) { // Removed !alreadyOpened check so it always shows for testing
              bubble.classList.remove("hidden");
              // Small delay to allow display:block to apply before opacity transition
              setTimeout(() => {
                  bubble.classList.remove("translate-y-4", "opacity-0");
                  bubble.classList.add("translate-y-0", "opacity-100");
              }, 50);
              // Auto-hide after 5 seconds
              setTimeout(hideBubble, 5000);
          }
      }, 3000);

      // Close button action
      closeBubbleBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          hideBubble();
      });

      // Click to open chat
      bubble.addEventListener("click", (e) => {
          if (e.target !== closeBubbleBtn && !closeBubbleBtn.contains(e.target)) {
              hideBubble();
              toggleChatWindow();
              localStorage.setItem('chatOpened', 'true');
          }
      });
  }

  // Ensure button click also hides bubble
  document.getElementById("chat-toggle-button").addEventListener("click", () => {
      localStorage.setItem('chatOpened', 'true');
      hideBubble();
  });

  if (sendButton) {
      sendButton.addEventListener("click", sendMessage);
  }
  if (userInput) {
      userInput.addEventListener("keydown", e => { if (e.key === "Enter") sendMessage(); });
  }
  initializeChatbot();
});
