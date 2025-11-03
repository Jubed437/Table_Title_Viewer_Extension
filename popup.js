document.getElementById("getTitle").addEventListener("click", async () => {

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const tabTitle = tab.title;
  document.getElementById("title").textContent = "Tab Title: " + tabTitle;
  
});
