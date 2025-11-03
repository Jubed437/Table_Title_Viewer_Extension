document.getElementById("getTitle").addEventListener("click", async () => {
  // Get the active tab in the current window
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Extract the title
  const tabTitle = tab.title;

  // Display it in the popup
  document.getElementById("title").textContent = "Tab Title: " + tabTitle;
});
