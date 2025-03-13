console.log('Background script loaded');

// listen message from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Background received message:', message);

  if (message.type === 'MODE_CHANGE') {
    // forward message to all active tabs
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs.length > 0) {
        chrome.tabs.sendMessage(tabs[0].id, message);
      }
    });
  }

  // if use sendResponse, need to return true to indicate asynchronous reply
  return true;
});
