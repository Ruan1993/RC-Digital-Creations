const MODEL_NAME = "gemini-2.5-flash";
const CHAT_ENDPOINT = "/api/chat";

const CONTACT = {
  whatsapp: "https://wa.me/27634733098",
  phone: "063 473 3098",
  email: "info@rcdigitalcreations.co.za",
  questionnaire:
    "https://docs.google.com/forms/d/e/1FAIpQLSdgReyOlg7z7Xt7D_UisBDMn2acF34X8OO4wCpNXGUbpXPmjA/viewform?usp=publish-editor",
  contactPage: "https://www.rcdigitalcreations.co.za/#contact",
};

const PACKAGE_DETAILS = {
  starter: {
    label: "New Business Starter Pack",
    priceText: "R5,200 once-off or R499/month invoiced for 12 months",
    short: "Best for new businesses needing a polished starter presence.",
    timeline: "Typically live in 5 to 7 days.",
  },
  business: {
    label: "Standard Business Website",
    priceText: "From R6,500 once-off or R699/month invoiced for 12 months",
    short: "Best for businesses that need a stronger online presence and more pages.",
    timeline: "Timeline depends on scope, usually about 1 to 2 weeks for a standard build.",
  },
  chatbot: {
    label: "AI Chatbot",
    priceText: "R3,500 once-off or R329/month invoiced for 12 months",
    short: "Ideal for automating customer questions, lead capture, and support.",
    timeline: "Setup depends on content and integrations needed.",
  },
};

const WEBSITE_CONTEXT = `--- RC DIGITAL CREATIONS CONTEXT ---

BUSINESS OVERVIEW:
Name: RC Digital Creations (RCDC).
Owner: Ruan Coetzee.
Location: Stilbaai, Western Cape, serving clients globally.
Mission: To provide professional, high-quality digital solutions for small to medium businesses.
Contact: ${CONTACT.email} | Phone: ${CONTACT.phone}.

YOUR CREATOR (RUAN COETZEE):
- Ruan is a Front-End Developer and Geospatial Analyst with a BSc Honours in Geography & Environmental Sciences.
- He uses a systems-thinking approach to build digital solutions that fit into a business workflow.
- Personal Portfolio: https://ruancoetzee.co.za/

SERVICES & PRICING:
1. New Business Starter Pack, R5,200 once-off, or R499 per month invoiced manually for 12 months.
   - Ideal for new companies.
   - Includes a basic brochure website, professional logo concepts, a branded QR code, and first-year domain and hosting.
   - Typical turnaround is 5 to 7 days.

2. Standard Business Website, from R6,500 once-off, or R699 per month invoiced manually for 12 months.
   - Ideal for established businesses.
   - Includes 4 to 8 pages, custom coding, SEO foundations, and strong calls to action.
   - Final price depends on scope.

3. AI Chatbots, R3,500 once-off, or R329 per month invoiced manually for 12 months.
   - Automates customer support and lead capture.
   - Can be integrated directly into websites.

4. App Development.
   - Custom web and mobile applications.

5. Geo-Spatial Analysis.
   - Mapping, environmental data analysis, and data visualization.

ADDITIONAL EXPERTISE:
- Branding and design, including logos, business cards, custom QR codes, and promotional posters.
- Tech stack includes HTML5, Tailwind CSS, JavaScript, Python, Firebase, and custom-coded solutions.

POLICIES & QUOTES:
- Do not make up prices. If a client asks for something custom, say Ruan can provide an accurate quote.
- Monthly options are invoiced manually, there is no automatic subscription checkout on the website.
- Terms & Conditions: https://www.rcdigitalcreations.co.za/terms.html
- Privacy Policy: https://www.rcdigitalcreations.co.za/privacy.html

STARTING A WEBSITE PROJECT:
- The website design client intake questionnaire is here: ${CONTACT.questionnaire}
- Clients can also use the contact form or WhatsApp button on the site.

FAQ:
Q: How long does it take to build a website?
A: Basic sites are typically completed within 3 to 7 days. Timelines can change based on complexity.

Q: Can I pay monthly?
A: Yes. Monthly payment options are handled by manual invoicing.

Q: Do you offer ongoing maintenance?
A: Yes. Maintenance, performance checks, and content updates are available.

Q: Do you work with clients outside South Africa?
A: Yes. Clients are served remotely worldwide.
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
let latestAiBubble = null;

const leadState = {
  flow: null,
  packageKey: null,
  payment: null,
  timeline: null,
};

function resetLeadState() {
  leadState.flow = null;
  leadState.packageKey = null;
  leadState.payment = null;
  leadState.timeline = null;
}

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
  bubble.className = `max-w-xs md:max-w-md p-3 rounded-lg shadow-md text-sm ${
    isUser
      ? "bg-blue-200 text-gray-900 rounded-br-none"
      : "bg-gray-100 text-gray-800 rounded-tl-none"
  }`;

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

  if (!isUser) latestAiBubble = bubble;
  return messageDiv;
}

function appendMessage(text, sender) {
  const messageElement = createMessageElement(text, sender);
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
  return messageElement;
}

function createActionButton(action) {
  if (action.href) {
    const link = document.createElement("a");
    link.href = action.href;
    link.target = action.target || (action.href.startsWith("http") ? "_blank" : "_self");
    if (link.target === "_blank") link.rel = "noopener";
    link.className = `vector-action-chip ${action.primary ? "vector-action-chip-primary" : ""}`;
    link.textContent = action.label;
    return link;
  }

  const button = document.createElement("button");
  button.type = "button";
  button.className = `vector-action-chip ${action.primary ? "vector-action-chip-primary" : ""}`;
  button.textContent = action.label;
  button.addEventListener("click", action.onClick);
  return button;
}

function appendActions(actions, anchorBubble = latestAiBubble) {
  if (!anchorBubble || !actions || !actions.length) return;
  const wrap = document.createElement("div");
  wrap.className = "vector-quick-actions";
  actions.forEach((action) => wrap.appendChild(createActionButton(action)));
  anchorBubble.appendChild(wrap);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function buildWhatsAppLink(message) {
  return `${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;
}

function buildLeadSummary() {
  const packageLabel = leadState.packageKey ? PACKAGE_DETAILS[leadState.packageKey].label : "Not specified";
  const paymentLabel = leadState.payment || "Not specified";
  const timelineLabel = leadState.timeline || "Not specified";
  return `Hi Ruan, I'd like to get started.%0A%0APackage: ${packageLabel}%0APayment preference: ${paymentLabel}%0ATimeline: ${timelineLabel}`;
}

function showPrimaryMenu() {
  appendActions([
    { label: "Get a website", onClick: () => startWebsiteFlow(), primary: true },
    { label: "See pricing", onClick: () => handleGuidedInput("pricing") },
    { label: "AI chatbot", onClick: () => handleGuidedInput("ai chatbot") },
    { label: "Talk on WhatsApp", href: buildWhatsAppLink("Hi Ruan, I'd like to discuss a project.") },
  ]);
}

function showClosingActions() {
  const waSummary = buildLeadSummary().replace(/%0A/g, "\n");
  appendActions([
    {
      label: "Request quote",
      href: buildWhatsAppLink(`${waSummary}\n\nPlease prepare a quote for me.`),
      primary: true,
    },
    {
      label: "Request invoice",
      href: buildWhatsAppLink(`${waSummary}\n\nPlease prepare an invoice for me.`),
    },
    {
      label: "Website questionnaire",
      href: CONTACT.questionnaire,
    },
    {
      label: "Contact form",
      href: CONTACT.contactPage,
      target: "_self",
    },
  ]);
}

function getRecommendationMessage() {
  const info = leadState.packageKey ? PACKAGE_DETAILS[leadState.packageKey] : PACKAGE_DETAILS.business;
  const paymentLine = leadState.payment === "Monthly"
    ? `A good fit looks like ${info.label} on the monthly invoicing option, ${info.priceText}.`
    : leadState.payment === "Once-off"
      ? `A good fit looks like ${info.label} on the once-off option, ${info.priceText}.`
      : `${info.label} looks like the strongest fit for what you described, ${info.priceText}.`;

  const timelineLine = leadState.timeline
    ? `Timeline noted, ${leadState.timeline.toLowerCase()}. ${info.timeline}`
    : info.timeline;

  return `${info.short} ${paymentLine} ${timelineLine} Would you like me to help you request a quote or an invoice?`;
}

function startWebsiteFlow() {
  resetLeadState();
  leadState.flow = "website-package";
  appendMessage(
    "Great, I can help with that. What type of website are you looking for?",
    "ai"
  );
  appendActions([
    { label: "Starter website", onClick: () => handleGuidedInput("starter website"), primary: true },
    { label: "Business website", onClick: () => handleGuidedInput("business website") },
    { label: "Not sure yet", onClick: () => handleGuidedInput("not sure") },
  ]);
}

function continueToPaymentStep() {
  leadState.flow = "payment";
  appendMessage("Would you prefer once-off pricing or monthly invoicing?", "ai");
  appendActions([
    { label: "Once-off", onClick: () => handleGuidedInput("once-off"), primary: true },
    { label: "Monthly", onClick: () => handleGuidedInput("monthly") },
    { label: "Not sure", onClick: () => handleGuidedInput("not sure payment") },
  ]);
}

function continueToTimelineStep() {
  leadState.flow = "timeline";
  appendMessage("When would you like to get started?", "ai");
  appendActions([
    { label: "ASAP", onClick: () => handleGuidedInput("asap"), primary: true },
    { label: "1 to 2 weeks", onClick: () => handleGuidedInput("1-2 weeks") },
    { label: "Just researching", onClick: () => handleGuidedInput("researching") },
  ]);
}

function finishLeadFlow() {
  leadState.flow = "closed";
  appendMessage(getRecommendationMessage(), "ai");
  showClosingActions();
}

function handleGuidedInput(rawInput) {
  const input = String(rawInput || "").trim();
  const lower = input.toLowerCase();

  if (["get a website", "website", "new website"].includes(lower)) {
    appendMessage(input, "user");
    startWebsiteFlow();
    return true;
  }

  if (leadState.flow === "website-package") {
    appendMessage(input, "user");
    if (lower.includes("starter")) leadState.packageKey = "starter";
    else if (lower.includes("business")) leadState.packageKey = "business";
    else leadState.packageKey = "business";
    continueToPaymentStep();
    return true;
  }

  if (leadState.flow === "payment") {
    appendMessage(input, "user");
    if (lower.includes("monthly")) leadState.payment = "Monthly";
    else if (lower.includes("once")) leadState.payment = "Once-off";
    else leadState.payment = "Not sure";
    continueToTimelineStep();
    return true;
  }

  if (leadState.flow === "timeline") {
    appendMessage(input, "user");
    if (lower.includes("asap")) leadState.timeline = "ASAP";
    else if (lower.includes("1") || lower.includes("2 week")) leadState.timeline = "Within 1 to 2 weeks";
    else leadState.timeline = "Just researching";
    finishLeadFlow();
    return true;
  }

  if (lower === "pricing" || lower.includes("price") || lower.includes("cost")) {
    appendMessage(input, "user");
    appendMessage(
      "Here are the main pricing options. New Business Starter Pack is R5,200 once-off or R499/month invoiced for 12 months. Standard Business Website starts at R6,500 once-off or R699/month invoiced for 12 months. AI Chatbot is R3,500 once-off or R329/month invoiced for 12 months. Would you like help choosing the right option?",
      "ai"
    );
    appendActions([
      { label: "Help me choose", onClick: () => startWebsiteFlow(), primary: true },
      { label: "Request quote", href: buildWhatsAppLink("Hi Ruan, I'd like a quote for your website services.") },
      { label: "Talk on WhatsApp", href: buildWhatsAppLink("Hi Ruan, I'd like to discuss pricing.") },
    ]);
    return true;
  }

  if (lower.includes("ai chatbot") || lower === "chatbot") {
    appendMessage(input, "user");
    appendMessage(
      `${PACKAGE_DETAILS.chatbot.label} is ${PACKAGE_DETAILS.chatbot.priceText}. ${PACKAGE_DETAILS.chatbot.short} ${PACKAGE_DETAILS.chatbot.timeline} Would you like a quote or to discuss your setup on WhatsApp?`,
      "ai"
    );
    appendActions([
      { label: "Request chatbot quote", href: buildWhatsAppLink("Hi Ruan, I'd like a quote for an AI chatbot."), primary: true },
      { label: "Talk on WhatsApp", href: buildWhatsAppLink("Hi Ruan, I'd like to discuss an AI chatbot for my website.") },
    ]);
    return true;
  }

  if (lower.includes("monthly")) {
    appendMessage(input, "user");
    appendMessage(
      "Yes, monthly options are available. They are handled through manual invoicing, not automatic subscriptions on the website. Would you like me to help you choose a package or open WhatsApp with a ready-to-send message?",
      "ai"
    );
    appendActions([
      { label: "Choose a package", onClick: () => startWebsiteFlow(), primary: true },
      { label: "Request invoice", href: buildWhatsAppLink("Hi Ruan, I'd like to discuss a monthly invoicing option.") },
    ]);
    return true;
  }

  if (lower.includes("quote") || lower.includes("invoice") || lower.includes("whatsapp") || lower.includes("talk to human")) {
    appendMessage(input, "user");
    appendMessage(
      "Absolutely. I can help you take the next step right away.",
      "ai"
    );
    appendActions([
      { label: "Request quote", href: buildWhatsAppLink("Hi Ruan, I'd like to request a quote."), primary: true },
      { label: "Request invoice", href: buildWhatsAppLink("Hi Ruan, I'd like to request an invoice.") },
      { label: "Talk on WhatsApp", href: buildWhatsAppLink("Hi Ruan, I'd like to discuss a project.") },
    ]);
    return true;
  }

  return false;
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
  websiteContent = WEBSITE_CONTEXT;
}

async function sendMessage() {
  const query = userInput.value.trim();
  if (!query || websiteContent.trim() === "") {
    if (websiteContent.trim() === "") {
      appendMessage("I have not been configured yet.", "ai");
    }
    return;
  }

  if (handleGuidedInput(query)) {
    userInput.value = "";
    return;
  }

  appendMessage(query, "user");
  userInput.value = "";
  setChatState(true);

  chatHistory.push({ role: "user", parts: [{ text: query }] });
  if (chatHistory.length > 10) chatHistory = chatHistory.slice(-10);

  const MAX_RETRIES = 5;
  let retryCount = 0;

  while (retryCount < MAX_RETRIES) {
    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, context: websiteContent, history: chatHistory }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status} ${response.statusText} - ${errorText}`);
      }

      const result = await response.json();
      const aiResponseText = result?.text || "";
      appendMessage(aiResponseText || "No response available.", "ai");

      if (aiResponseText) {
        chatHistory.push({ role: "model", parts: [{ text: aiResponseText }] });
      }

      const lower = aiResponseText.toLowerCase();
      if (lower.includes("whatsapp") || lower.includes("quote") || lower.includes("invoice") || lower.includes("contact")) {
        appendActions([
          { label: "Request quote", href: buildWhatsAppLink("Hi Ruan, I'd like to request a quote."), primary: true },
          { label: "Talk on WhatsApp", href: buildWhatsAppLink("Hi Ruan, I'd like to discuss a project.") },
          { label: "Contact form", href: CONTACT.contactPage, target: "_self" },
        ]);
      }

      setChatState(false);
      return;
    } catch (error) {
      retryCount += 1;
      if (retryCount >= MAX_RETRIES) {
        appendMessage(
          "I am unable to connect to the service right now, but you can still get hold of Ruan immediately using the options below.",
          "ai"
        );
        appendActions([
          { label: "Talk on WhatsApp", href: buildWhatsAppLink("Hi Ruan, I'd like to discuss a project."), primary: true },
          { label: "Contact form", href: CONTACT.contactPage, target: "_self" },
        ]);
        setChatState(false);
        return;
      }
      const delay = Math.pow(2, retryCount) * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
}

const CHAT_WIDGET_HTML = `<div id="chatbot-widget-container">
  <div
    id="chat-welcome-bubble"
    class="fixed bottom-20 right-6 z-50 bg-white p-4 rounded-xl shadow-xl border border-gray-200 max-w-[260px] transform translate-y-4 opacity-0 transition-all duration-500 hidden"
  >
    <p class="text-sm font-medium text-gray-800">👋 Need help choosing the right package?</p>
    <div
      class="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-200"
    ></div>
    <button
      id="close-bubble-btn"
      class="absolute -top-2 -right-2 bg-gray-100 hover:bg-gray-200 rounded-full p-1 text-gray-500 shadow-sm transition-colors"
      aria-label="Close bubble"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
  <button
    id="chat-toggle-button"
    class="fixed bottom-6 right-6 z-50 bg-brand-blue text-white p-3 rounded-full shadow-2xl hover:bg-brand-blue/80 transition duration-300 flex items-center justify-center group"
  >
    <span class="absolute top-0 right-0 flex h-4 w-4 -mt-1 -mr-1">
      <span class="absolute inline-flex h-full w-full rounded-full opacity-75" style="background-color: #ef4444; animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;"></span>
      <span class="relative inline-flex rounded-full h-4 w-4 border-2 border-white" style="background-color: #ef4444;"></span>
    </span>
    <style>
      @keyframes ping {
        75%, 100% {
          transform: scale(2);
          opacity: 0;
        }
      }
    </style>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
    class="fixed bottom-20 md:bottom-24 right-4 z-40 w-[360px] max-w-[92vw] bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[62vh] md:h-[620px] min-h-[440px] max-h-[680px] transform translate-y-full opacity-0 transition-all duration-300"
  >
    <header class="p-4 bg-gradient-to-r from-brand-blue to-brand-purple text-white shadow-md flex items-center gap-3 flex-shrink-0">
      <div class="flex items-center justify-center h-9 w-9 rounded-full bg-white/10 ring-1 ring-white/30">
        <span class="font-bold">V</span>
      </div>
      <div class="flex flex-col">
        <h1 class="text-xl font-bold leading-tight">Vector</h1>
        <div class="text-xs opacity-90">Sales Assistant</div>
      </div>
    </header>
    <div id="chat-container" class="chat-container flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50">
      <div class="flex justify-start">
        <div class="max-w-xs md:max-w-md p-3 rounded-lg bg-gray-100 text-gray-800 shadow-sm">
          <p class="font-semibold text-sm mb-1 text-brand-blue">Vector</p>
          <p class="text-sm">Hi, I can help you choose a package, explain pricing, and get you to the right next step fast.</p>
        </div>
      </div>
      <div id="loading-indicator" class="hidden flex justify-start">
        <div class="p-3 rounded-lg bg-gray-100 shadow-sm">
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-brand-blue rounded-full animate-bounce"></div>
            <div class="w-2 h-2 bg-brand-blue rounded-full animate-bounce"></div>
            <div class="w-2 h-2 bg-brand-blue rounded-full animate-bounce"></div>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send">
          <path d="m22 2-7 20-4-9-9-4Z" />
          <path d="M22 2 11 13" />
        </svg>
      </button>
    </div>
  </div>
</div>`;

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = CHAT_WIDGET_HTML;
  document.body.appendChild(wrapper);

  chatContainer = document.getElementById("chat-container");
  userInput = document.getElementById("user-input");
  sendButton = document.getElementById("send-button");
  loadingIndicator = document.getElementById("loading-indicator");
  mainChatWindow = document.getElementById("main-chat-window");
  const toggleButton = document.getElementById("chat-toggle-button");
  const bubble = document.getElementById("chat-welcome-bubble");
  const closeBubbleBtn = document.getElementById("close-bubble-btn");

  initializeChatbot();

  toggleButton.addEventListener("click", () => {
    localStorage.setItem("chatOpened", "true");
    if (bubble) hideBubble(bubble);
    toggleChatWindow();
  });

  function hideBubble(targetBubble) {
    if (!targetBubble) return;
    targetBubble.classList.remove("translate-y-0", "opacity-100");
    targetBubble.classList.add("translate-y-4", "opacity-0");
    setTimeout(() => targetBubble.classList.add("hidden"), 500);
  }

  if (bubble && closeBubbleBtn) {
    const bubbleText = bubble.querySelector("p");
    const showBubble = (text) => {
      if (isChatOpen) return;
      if (bubbleText) bubbleText.textContent = text;
      bubble.classList.remove("hidden");
      setTimeout(() => {
        bubble.classList.remove("translate-y-4", "opacity-0");
        bubble.classList.add("translate-y-0", "opacity-100");
      }, 50);
      setTimeout(() => hideBubble(bubble), 6000);
    };

    setTimeout(() => {
      if (localStorage.getItem("chatOpened") !== "true") {
        showBubble("👋 Need help choosing the right package?");
      }
    }, 3000);

    setTimeout(() => {
      if (localStorage.getItem("chatOpened") !== "true") {
        showBubble("I can help with pricing, invoices, and getting started.");
      }
    }, 30000);

    closeBubbleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      hideBubble(bubble);
    });

    bubble.addEventListener("click", (e) => {
      if (e.target !== closeBubbleBtn && !closeBubbleBtn.contains(e.target)) {
        hideBubble(bubble);
        toggleChatWindow();
        localStorage.setItem("chatOpened", "true");
      }
    });
  }

  if (sendButton) sendButton.addEventListener("click", sendMessage);
  if (userInput) {
    userInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendMessage();
    });
  }

  appendMessage(
    "Choose one of the options below or ask me anything.",
    "ai"
  );
  showPrimaryMenu();
});
