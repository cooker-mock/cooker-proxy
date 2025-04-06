/**
 * Content script for the Chrome extension.
 */
const script = document.createElement('script');
script.src = 'http://localhost:8088/cooker-proxy.js';
document.documentElement.appendChild(script);
script.remove();

// Listen for messages from popup (background script)
chrome.runtime.onMessage.addListener((request) => {
  if (request.type === 'MODE_CHANGE') {
    window.postMessage({ type: 'MODE', mode: request.mode }, '*');
  }
});

// Listen for messages from cooker-proxy.js
window.addEventListener('message', (event) => {
  if (event.source !== window || event.data.type !== 'GET_MODE') {
    return;
  }

  // Get the mode from chrome.storage.sync and send it back to cooker-proxy.js
  chrome.storage.sync.get('mode', (data) => {
    window.postMessage({ type: 'MODE', mode: data.mode || 'mock' }, '*');
  });
});
