chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveText",
    title: "Save Selected Text",
    contexts: ["selection"],
  });
});
chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "saveText" && info.selectionText) {
    chrome.storage.local.get({ savedText: [] }, (result) => {
      const updated = [result.savedText, info.selectionText];
      chrome.storage.local.set({ savedText: updated });
    });
  }
});
